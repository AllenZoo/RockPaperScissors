export function createRound({
  userMove,
  aiMove,
  result,
  previousRound = null,
}) {
  return {
    userMove,
    aiMove,
    result,
    previousUserMove: previousRound?.userMove ?? null,
    previousResult: previousRound?.result ?? null,
    timestamp: Date.now(),
  };
}
