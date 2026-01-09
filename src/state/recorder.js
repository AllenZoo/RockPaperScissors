const STORAGE_KEY = "rps_history";

export function recordRound(round) {
  const history = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  history.push(round);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function getHistory() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}
