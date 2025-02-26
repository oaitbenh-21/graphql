export const queries = {
  user: `{
            user {
              login
              firstName
              lastName
              auditRatio
              campus
              totalDown
              totalUp
            }
          }`,

  level: `{
            transaction_aggregate(
              where: {type: {_eq: "level"}, event: {object: {name: {_eq: "Module"}}}}
              order_by: {createdAt: desc}
            ) {
              aggregate {
                max {
                  amount
                }
              }
            }
          }`,

  skills: `{
              transaction(where: {type: {_like: "skill_%"}}, order_by: {amount: desc}) {
                type
                amount
              }
            }`,

  projects: `{
                transaction(
                  where: {type: {_eq: "xp"}, eventId: {_eq: 41}}
                  order_by: {createdAt: desc}
                ) {
                  path
                  amount
                  createdAt
                }
              }`,

};