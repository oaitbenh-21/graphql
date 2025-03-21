// const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDk1IiwiaWF0IjoxNzQyNTUxOTc0LCJpcCI6IjEwLjEuMTAuNiwgMTcyLjE4LjAuMiIsImV4cCI6MTc0MjYzODM3NCwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtY2FtcHVzZXMiOiJ7fSIsIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiMTA5NSIsIngtaGFzdXJhLXRva2VuLWlkIjoiNTQyZTFiYmItNDhjNS00MDUxLWI1NTItZGQ5MjM1MTg1OGJkIn19.xer99BH-LQUII46CLBzO3n_ml-ruDQzRuzNWa3tUIXg";
const url = "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql";

export async function GraphGet(query) {
    let jwt = localStorage.getItem("hasura-jwt-token")
    if (!jwt) {
        location.href = "/login.html"
    }
    let res = await fetch(url, {
        method: "post",
        headers: {
            'Authorization': `Bearer ${jwt}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: query,
        }),
    });
    let json = await res.json();
    return json
}
