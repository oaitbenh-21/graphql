const url = "https://learn.zone01oujda.ma/api/auth/signin";

export function Login(username, password) {
    let Base64 = btoa(`${username}:${password}`);
    fetch(url, {
        method:"post",
        headers:{
            'Authorization': `Basic ${Base64}`,
        },
    }).then(Response => {
        return Response.json();
    }).then(json => {
        if (json.error) {
            document.querySelector(".error").innerTEXT = json.error;
        } else {
            localStorage.setItem("jwt", json)
        }
    })
}