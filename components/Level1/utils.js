export const getNumber = string =>
  string.match(/\d+/) && string.match(/\d+/)[0];

export const checkCharged = (charged, percentage) => {
  if (typeof charged === 'string') {
    return getNumber(charged) >= percentage;
  }
  if (typeof charged === 'boolean') {
    return charged;
  }
  return false;
};

export const chargedMouth = charged => {
  if (typeof charged === 'string') {
    const chargeNumber = getNumber(charged);
    if (chargeNumber < 50) return '◠';
    if (chargeNumber >= 50 && chargeNumber < 60) return '-';
    if (chargeNumber >= 60) return '◡';
  }
  if (typeof charged === 'boolean') {
    return charged ? '◡' : '◠';
  }
  return '◠';
};

export const checkAnswer = answer => {
  const answerWithoutSpaces = answer.replace(' ', '');
  const answerNumber = getNumber(answer) || 0;
  if (answerWithoutSpaces === '=true') return true;
  if (answerWithoutSpaces === `='${answerNumber}%'`) return answerNumber + '%';
  return false;
};

export const checkCorrectAnswer = answer => {
  const answerWithoutSpaces = answer.replace(' ', '');
  const answerNumber = getNumber(answer) || 0;
  if (answerWithoutSpaces === '=true') return true;
  if (answerWithoutSpaces === `='${answerNumber}%'` && answerNumber >= 60)
    return true;
  return false;
};
