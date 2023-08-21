export const getYearRandom = () => {

  const yearInit = 1900;
  const yearEnd = 2023;
  
  const rangeYears = yearEnd - yearInit + 1;
  const yearRandom = Math.floor(Math.random() * rangeYears) + yearInit;
  
  return yearRandom;
};
