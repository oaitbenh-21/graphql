export function createProjectGraph(data, title, options = {}, radius) {
    const containerId = options.containerId || 'container';
    const width = options.width || 400;
    const height = options.height || 400;
    const levels = options.levels || 5;
    const maxValue = options.maxValue || 100;

    const chartRadius = radius || Math.min(parseInt(width), parseInt(height)) / 2;
    const angleSlice = (Math.PI * 2) / data.length;

    const svgWidth = 500;
    const svgHeight = 500;
    let html = `<h4>${title}</h4>`;
    html += `<svg viewBox="0 0 ${svgWidth} ${svgHeight}" preserveAspectRatio="xMidYMid meet" width="${width}" height="${height}">`;

    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;
    const outerCircle = 25;
    for (let level = 0; level < levels; level++) {
        const levelRadius = (chartRadius / levels) * (level + 1);
        html += `<circle cx="${centerX}" cy="${centerY}" r="${levelRadius}" stroke="#ccc" fill="none"/>`;
    }
    data.forEach((obj, i) => {
        const angle = angleSlice * i - Math.PI;
        const x = centerX + Math.cos(Math.PI / 2 - angle) * chartRadius;
        const y = centerY + Math.sin(Math.PI / 2 - angle) * chartRadius;

        const xt = centerX + Math.cos(Math.PI / 2 - angle) * (chartRadius + outerCircle);
        const yt = centerY + Math.sin(Math.PI / 2 - angle) * (chartRadius + outerCircle);

        html += `<line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" stroke="#ccc"/>`;
        html += `<text x="${xt}" y="${yt}" text-anchor="middle" fill="black">${obj.label}</text>`;
    });
    const points = data.map((obj, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        const x = centerX + Math.cos(angle) * (obj.value / maxValue) * chartRadius;
        const y = centerY + Math.sin(angle) * (obj.value / maxValue) * chartRadius;
        return `${x},${y}`;
    }).join(" ");

    html += `<polygon points="${points}" fill="rgba(0, 0, 255, 0.4)" stroke="blue" stroke-width="2"/>`;

    html += `</svg>`;

    return html;
}
