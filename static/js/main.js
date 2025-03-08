import { GraphGet } from "./utils/profile.js";
import { queries } from "./utils/queries.js";
import { createProjectGraph } from "./components/skills.js";
import { projectsXpChart } from "./components/projects.js";



async function getData() {
  var data = {
    user: await GraphGet(queries.user),
    level: await GraphGet(queries.level),
    skills: await GraphGet(queries.skills),
    projects: await GraphGet(queries.projects),
  };
  data.user = data.user.data.user[0];
  data.level = data.level.data.transaction_aggregate.aggregate.max;
  data.skills = new Set(data.skills.data.transaction);
  data.projects = data.projects.data.transaction;
  return data
}

getData().then((data) => {
  console.log(data);
  document.querySelector(".profile-card .profile-header .header-card .avatar").innerHTML = "lvl " + data.level.amount;
  document.querySelector(".profile-card .profile-header .name h2").innerHTML = `${data.user.firstName} ${data.user.lastName}`
  document.querySelector(".profile-card .profile-header .campus b").innerHTML = data.user.campus
  document.querySelector(".ratio .up p").innerText = (data.user.totalUp / 1000 / 1000).toFixed(2) + " mb";
  document.querySelector(".ratio .down p").innerText = (data.user.totalDown / 1000 / 1000).toFixed(2) + " mb";
  document.querySelector(".ratio .now p").innerText = (data.user.totalUp / data.user.totalDown).toFixed(1) + " total";
  document.querySelector(".progress-bar .progress-full").innerText = (data.user.totalUp / data.user.totalDown).toFixed(1) * 100 + "%";
  let progress = data.user.totalUp / data.user.totalDown * 100;
  if (progress > 100) {
    progress = 100
  }
  document.querySelector(".progress-bar .progress-full").style.width = progress + "%";
  document.querySelector(".dialog").innerText = `The current up/down ratio is ${Math.ceil(progress / 10) / 10}, calculated from ${Math.ceil(progress)}% up and ${(Math.ceil(progress) - 100) * -1}% down ratings.`
  let skills = filterSkills(data.skills);
  document.querySelector(".container").innerHTML += `<div class="audit">${createProjectGraph(skills, "Best Skills")}</div>`
  document.querySelector(".container").innerHTML += `<div class="audit">${projectsXpChart(data.projects, "Last Projects")}</div>`

})


const filterSkills = (skills) => {
  let skillsObj = new Object();
  skills.forEach((skill) => {
    if (skillsObj[skill.type]) {
      if (skillsObj[skill.type] < skill.amount) {
        skillsObj[skill.type] = skill.amount;
      } else {
        return;
      }
    }
    skillsObj[skill.type] = skill.amount;
  });

  return skillsObj = Object.entries(skillsObj).map(([key, value]) => {
    return { label: key.replace('skill_', ''), value: value };
  }).slice(0, 6);
}


