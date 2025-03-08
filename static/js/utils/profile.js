const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDk1IiwiaWF0IjoxNzQxMzkyODk0LCJpcCI6IjEwLjEuNi4xLCAxNzIuMTguMC4yIiwiZXhwIjoxNzQxNDc5Mjk0LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1jYW1wdXNlcyI6Int9IiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiIxMDk1IiwieC1oYXN1cmEtdG9rZW4taWQiOiJiMGM5NjUyMS01NWU5LTRiNGMtYTg3Ny04ODU5Nzc4ODA1N2YifX0.wy-UkTR4LVa_Q7ipc5FC6FoQ-ZDzFRLy7bUWHIT5vLI";
const url = "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql";

export async function GraphGet(query) {
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