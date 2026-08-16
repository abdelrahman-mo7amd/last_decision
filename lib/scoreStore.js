const _state = {
  totalScore: 0,
  roundScore: 0,
  lastScoreChange: 0,
  answers: [],
};

const _subscribers = new Set();

function notify() {
  for (const subscriber of _subscribers) {
    subscriber({ ..._state });
  }
}

export function setTotalScore(value) {
  _state.totalScore = Number(value) || 0;
  notify();
}

export function addToTotalScore(value) {
  _state.totalScore += Number(value) || 0;
  notify();
}

export function setRoundScore(value) {
  _state.roundScore = Number(value) || 0;
  notify();
}

export function setLastScoreChange(value) {
  _state.lastScoreChange = Number(value) || 0;
  notify();
}

export function setAnswers(arr) {
  _state.answers = Array.isArray(arr) ? arr.slice() : [];
  notify();
}

export function addAnswer(answerObj) {
  _state.answers.push(answerObj);
  notify();
}

export function getState() {
  return {
    ..._state,
    answers: [..._state.answers],
  };
}

export function subscribe(callback) {
  _subscribers.add(callback);

  // Give the subscriber the current state immediately
  callback(getState());

  return () => _subscribers.delete(callback);
}

export function resetScore() {
  _state.totalScore = 0;
  _state.roundScore = 0;
  _state.lastScoreChange = 0;
  _state.answers = [];

  notify();
}

export default {
  setTotalScore,
  addToTotalScore,
  setRoundScore,
  setLastScoreChange,
  setAnswers,
  addAnswer,
  getState,
  subscribe,
  resetScore,
};