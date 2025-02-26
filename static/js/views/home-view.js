import { GraphGet } from "./../utils/profile.js";
import { queries } from "./../utils/queries.js";





async function getData() {
  var data = {
    user: await GraphGet(queries.user),
    level: await GraphGet(queries.level),
    skills: await GraphGet(queries.skills),
    projects: await GraphGet(queries.projects),
  };
  data.user = data.user.data.user;
  data.level = data.level.data.transaction_aggregate.aggregate.max;
  data.skills = data.skills.data.transaction;
  data.projects = data.projects.data.transaction;
  console.log(JSON.stringify(data));
}

getData()
