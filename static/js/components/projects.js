export function projectsXpChart(data, title, options = {}) {
    const defaultOptions = {
      width: 550,
      height: 550,
      left: 180,
      right: 120,
      top: 30,
      bottom: 30,
    };
  
    const config = { ...defaultOptions, ...options };
    const barHeight = 20;
    const spacing = 12;
    const max = 10;
  
    const projects = {};
    data.forEach(t => {
      projects[t.path] = t.amount;
    });
  
    const projectEntries = Object.entries(projects)
      .sort(([, a], [, b]) => b - a)
      .slice(0, max);
  
    const chartHeight = projectEntries.length * (barHeight + spacing);
    let html = `<h4>${title}</h4>`;
    html += `<svg viewBox="0 0 ${config.width} ${config.height}" preserveAspectRatio="xMinYMin meet" style="width:100%; height:auto; max-height:100vh;">`;
    projectEntries.forEach(([project, amount], i) => {
      const y = config.top + (i * (barHeight + spacing));
      const maxWidth = 600 - config.left - config.right;
      const width = (amount / Math.max(...Object.values(projects))) * maxWidth;
      html += `<rect x="${config.left}" y="${y}" width="${width}" height="${barHeight}" fill="#4a90e2" />`;
      html += `<text x="${config.left - 10}" y="${y + barHeight / 2}" text-anchor="end" dominant-baseline="middle" font-size="1.2em">${project.split('/').pop()}</text>`;
      html += `<text x="${config.left + width + 5}" y="${y + barHeight / 2}" dominant-baseline="middle" font-size="1em">${amount.toLocaleString()}</text>`;
    });
  
    html += `</svg>`;
  
    return html;
  }
  