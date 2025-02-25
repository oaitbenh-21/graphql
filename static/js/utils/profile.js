const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDk1IiwiaWF0IjoxNzM5ODg3MTUwLCJpcCI6IjEwLjEuOC4zLCAxNzIuMTguMC4yIiwiZXhwIjoxNzM5OTczNTUwLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1jYW1wdXNlcyI6Int9IiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiIxMDk1IiwieC1oYXN1cmEtdG9rZW4taWQiOiJjOTcxMDAyNS02M2EyLTQ2NzYtYTQ3My01MDkyNWQ1OTVjN2UifX0.oq1FK1VwZNy59KS5--3J-X5WcyWsQ3T4_RBhP4VRMME";

async function GraphGet(query) {
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
    console.log(json.data);
}
GraphGet()
