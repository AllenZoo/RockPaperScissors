const STORAGE_KEY = "rps_history";

export function recordRound(round) {
  const history = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  history.push(round);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function getHistory() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function exportSessionToJSON(sessionData) {
  const dataStr = JSON.stringify(sessionData, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `rps-session-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function exportSessionToCSV(sessionData) {
  if (sessionData.length === 0) return;

  // Define CSV headers
  const headers = [
    "round",
    "player_last_move",
    "ai_last_move",
    "question_id",
    "answer",
    "outcome",
    "actual_player_move",
  ];

  // Create CSV rows
  const csvRows = [
    headers.join(","), // Header row
    ...sessionData.map((row) =>
      headers
        .map((header) => {
          const value = row[header];
          // Handle null/undefined values
          if (value === null || value === undefined) return "";
          // Escape values that contain commas or quotes
          if (
            typeof value === "string" &&
            (value.includes(",") || value.includes('"'))
          ) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        })
        .join(",")
    ),
  ];

  const csvString = csvRows.join("\n");
  const dataBlob = new Blob([csvString], { type: "text/csv" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `rps-session-${Date.now()}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}
