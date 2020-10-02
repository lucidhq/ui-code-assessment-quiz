
const mainReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_DATA": {
      return {
        ...state,
        ...payload,
      };
    }
    case "ONCHANGE": {
      return {
        ...state,
        ...payload,
      };
    }
    case "NEXT_QUESTION": {
      return {
        ...state,
        ...payload,
        currentAnswer: "",
      };
    }
    case "RESTART_QUIZ": {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};

export default mainReducer
