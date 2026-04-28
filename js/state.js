const STORAGE_KEY = "roadmap_progress_v1";

export function loadState(tasks) {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
        const parsed = JSON.parse(saved);
        for (let key in parsed) {
            if (tasks[key]) tasks[key].checked = parsed[key];
        }
    } catch { }
}

export function saveState(tasks) {
    const out = {};
    for (let k in tasks) out[k] = tasks[k].checked;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(out));
}

export function toggleTask(tasks, key, value) {
    if (tasks[key]) tasks[key].checked = value;
    saveState(tasks);
}

export function getGlobalProgress(tasks) {
    const keys = Object.keys(tasks);
    const done = keys.filter(k => tasks[k].checked).length;

    return {
        percent: Math.round((done / keys.length) * 100),
        done,
        total: keys.length
    };
}

export function getPhaseProgress(tasks, phaseId) {
    const keys = Object.keys(tasks).filter(k =>
        k.startsWith(`${phaseId}_`)
    );

    const done = keys.filter(k => tasks[k].checked).length;

    return {
        percent: Math.round((done / keys.length) * 100),
        done,
        total: keys.length
    };
}