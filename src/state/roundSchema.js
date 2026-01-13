export function createRound({
  round,
  player_last_move,
  ai_last_move,
  question_id,
  answer,
  outcome,
  actual_player_move,
}) {
  return {
    round,
    player_last_move,
    ai_last_move,
    question_id,
    answer,
    outcome,
    actual_player_move,
  };
}
