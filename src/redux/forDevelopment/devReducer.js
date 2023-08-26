import * as devActionTypes from "./devActionTypes";

const devReducerState = {
  isResponsive: false,
  msgShowCount: 0,
};

export const devReducer = (state = devReducerState, action) => {
  switch (action.type) {
    case devActionTypes.SHOW_RESPONSIVE_MSG:
      if (action.payload >= 451) {
        if (state.msgShowCount === 0) {
          return {
            ...state,
            msgShowCount: 1,
          };
        } else if (action.payload < 451) {
          //   console.log(action.payload);
          if (state.msgShowCount === 1) {
            return {
              ...state,
              isResponsive: true,
            };
          }
        }
      }
    default:
      return state;
  }
};
