import checkListConstants from "../constants/checkListConstants";

const habitReducer = (state = [], action) => {
  switch (action.type) {
    case checkListConstants.GET_HABITS_SUCCESS:
      return [state, ...action.payload];

    // case checkListConstants.ADD_HABIT_STATUS_SUCCESS:
    //   return (state, action) =>
    //     state.filter((habit) => habit.habitId !== action.payload);

    default:
      return state;
  }
};

export default habitReducer;