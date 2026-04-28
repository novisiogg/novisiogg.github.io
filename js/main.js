import { roadmapData, buildTaskStore } from "./data.js";
import {
  loadState,
  toggleTask,
  getGlobalProgress,
  getPhaseProgress
} from "./state.js";

import {
  renderPhases,
  bindEvents,
  renderGlobalProgress
} from "./ui.js";

const container = document.getElementById("phasesContainer");
const searchInput = document.getElementById("searchInput");

const tasks = buildTaskStore(roadmapData);
loadState(tasks);

function render() {
  renderGlobalProgress(tasks, getGlobalProgress);
  renderPhases(container, roadmapData, tasks, searchInput.value, getPhaseProgress);
}

bindEvents(container, (key, value) => {
  toggleTask(tasks, key, value);
}, render);

searchInput.addEventListener("input", render);

render();