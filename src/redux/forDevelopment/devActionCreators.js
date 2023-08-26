import * as devActionTypes from "./devActionTypes";

export const handleResponsiveMsg = (width) => ({
  type: devActionTypes.SHOW_RESPONSIVE_MSG,
  payload: width,
});
