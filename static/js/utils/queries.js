export const queries = {
    user: {
        query: `{
        user {
          login
          firstName
          lastName
          attrs
          auditRatio
          campus
          createdAt
          totalDown
          totalUp
          updatedAt
        }
      }`,
    },

    level: {
        query: `{
        transaction_aggregate(
          where: {
            type: { _eq: "level" }
            event: { object: { name: { _eq: "Module" } } }
          }
          order_by: { createdAt: desc }
        ) {
          aggregate {
            max {
              amount
            }
          }
        }
      }`,
    },

    skills: {
        query: `{
        transaction(
          where: { type: { _like: "skill%" } }
          order_by: { amount: desc }
        ) {
          type
          amount
        }
      }`,
    },

    projects: {
        query: (moduleID) => `{
        transaction(
          where: {
            type: { _eq: "xp" }
            eventId: { _eq: ${moduleID} }
          }
          order_by: { createdAt: desc }
        ) {
          path
          amount
          createdAt
        }
      }`,
    },

    audit: {
        query: `{
        user {
          audits_aggregate(where: { closureType: { _eq: succeeded } }) {
            aggregate {
              count
            }
          }
          failed_audits: audits_aggregate(where: { closureType: { _eq: failed } }) {
            aggregate {
              count
            }
          }
        }
      }`,
    },
};