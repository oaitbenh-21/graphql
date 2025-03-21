document.getElementById('login-btn').addEventListener('click', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
        document.getElementById('error-message').textContent = 'Please enter both username and password.';
    } else {
        document.getElementById('error-message').textContent = '';
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        Login(username, password)
    }
});

const url = "https://learn.zone01oujda.ma/api/auth/signin";

function Login(username, password) {
    let Base64 = btoa(`${username}:${password}`);
    fetch(url, {
        method: "post",
        headers: {
            'Authorization': `Basic ${Base64}`,
        },
    }).then(Response => {
        if (Response.ok) {
            return Response.json();
        }
        
    }).then(json => {
        if (json.error) {
            document.querySelector(".error").innerTEXT = json.error;
        } else {
            localStorage.setItem("hasura-jwt-token", json)
            location.href = "/"
        }
    })
}