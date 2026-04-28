export function renderGlobalProgress(tasks, getGlobalProgress) {
  const stats = getGlobalProgress(tasks);
  const el = document.getElementById("globalProgress");
  if (!el) return;

  el.innerHTML = `
        <div class="progress-track">
            <div class="progress-fill" style="width: ${stats.percent}%"></div>
        </div>
        <div class="progress-text">
            <span>Overall Mastery</span>
            <span class="accent-text">${stats.percent}%</span>
        </div>
    `;
}

export function renderPhases(container, data, tasks, search, getPhaseProgress) {
  if (!container) return;
  container.innerHTML = "";

  // Sort phases by id and in vertical order
  const sortedPhases = [...data].sort((a, b) => a.id - b.id);

  for (const phase of sortedPhases) {
    const taskKeys = Object.keys(tasks).filter(key => key.startsWith(`${phase.id}_`));

    const matchesSearch = !search ||
      phase.name.toLowerCase().includes(search.toLowerCase()) ||
      taskKeys.some(key => tasks[key].text.toLowerCase().includes(search.toLowerCase()));

    if (!matchesSearch) continue;

    let learnHtml = "";
    let projectHtml = "";

    for (const key of taskKeys) {
      const task = tasks[key];
      if (search && !task.text.toLowerCase().includes(search.toLowerCase())) continue;

      const taskHtml = `
                <div class="task-item ${task.checked ? 'completed' : ''}">
                    <input type="checkbox" data-key="${key}" ${task.checked ? "checked" : ""}>
                    <span>${escapeHtml(task.text)}</span>
                </div>
            `;
      if (task.category === "learn") {
        learnHtml += taskHtml;
      } else if (task.category === "project") {
        projectHtml += taskHtml;
      }
    }

    const progress = getPhaseProgress(tasks, phase.id);


    const stored = localStorage.getItem(`phase_${phase.id}`);
    const isOpen = stored === null ? false : stored === "true";

    const arrow = isOpen ? "▼" : "▶";

    const card = document.createElement("div");
    card.className = "phase-card";

    card.innerHTML = `
            <div class="phase-header" data-phase="${phase.id}">
                <strong>${arrow} ${escapeHtml(phase.name)}</strong>
                <span class="progress-badge">${progress.percent}%</span>
            </div>
            <div class="phase-progress-bar">
                <div class="phase-progress-fill" style="width: ${progress.percent}%; background: ${phase.color || 'var(--accent)'}"></div>
            </div>
            <div class="phase-content" style="display: ${isOpen ? 'block' : 'none'}">
                <h4>📚 Theory</h4>
                ${learnHtml || '<div class="empty-message">No learning tasks</div>'}
                <h4>🎯 Projects</h4>
                ${projectHtml || '<div class="empty-message">No projects</div>'}
            </div>
        `;
    container.appendChild(card);
  }
}

export function bindEvents(container, onToggle, rerender) {
  container.addEventListener("click", (e) => {
    const header = e.target.closest(".phase-header");
    if (!header) return;

    const phaseId = header.dataset.phase;
    const card = header.closest(".phase-card");
    const content = card.querySelector(".phase-content");
    const strongElem = header.querySelector("strong");

    if (!content || !phaseId) return;

    const isCurrentlyOpen = content.style.display === "block";
    const newState = !isCurrentlyOpen;
    content.style.display = newState ? "block" : "none";


    localStorage.setItem(`phase_${phaseId}`, newState);

    if (strongElem) {
      const arrow = newState ? "▼" : "▶";
      const textWithoutArrow = strongElem.innerText.replace(/^[▼▶]\s*/, "");
      strongElem.innerHTML = `${arrow} ${textWithoutArrow}`;
    }
  });

  container.addEventListener("change", (e) => {
    if (e.target.matches("input[type='checkbox']")) {
      const key = e.target.dataset.key;
      const checked = e.target.checked;
      onToggle(key, checked);
      rerender(); 
    }
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}