const getConstAmountOfCigarettesPerDay = state =>
  state.quizInfo.cigarettePerDay;

const getCigarettePackPrice = state => {
  return state.quizInfo.cigarettePackPrice;
};

const getCurrentAmountOfCigarettes = state => state.cigarettes;

const getTimeForOneCigarette = state => state.quizInfo.cigarettePerTime;

// ===============habits=========

const listOfHabits = state => state.habits.allHabits;

const getHabitById = (state, habitId) => {
  const habits = listOfHabits(state);
  return habits.find(habit => habit._id === habitId);
};
// ===============habits=========
export default {
  getConstAmountOfCigarettesPerDay,
  getCigarettePackPrice,
  getCurrentAmountOfCigarettes,
  getTimeForOneCigarette,
  listOfHabits,
  getHabitById,
};
