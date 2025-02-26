const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDk1IiwiaWF0IjoxNzQwNTg0MjUxLCJpcCI6IjEwLjEuMS4yLCAxNzIuMTguMC4yIiwiZXhwIjoxNzQwNjcwNjUxLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1jYW1wdXNlcyI6Int9IiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiIxMDk1IiwieC1oYXN1cmEtdG9rZW4taWQiOiI2YWFiZjdmYi0xZjQxLTRjNjktODE0MC1lMzY3N2YyYzNiNTAifX0.U9ylmjvZFRViIbkDOMRoRrYkTT_hS8T4TZvwl42C9bk";
const url = "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql";

export async function GraphGet(query) {
    let res = await fetch(url, {
        method: "post",
        headers: {
            'Authorization': `Bearer ${jwt}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                user {
                    firstName
                    lastName
                    
                }
            }`,
        }),
    });
    let json = await res.json();
    return json
}