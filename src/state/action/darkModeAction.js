import { DARK_MODE } from "../type/type";

export const handledarkMode = (e) => async (dispatch) => {
    localStorage.setItem("darkmode", e);
    
    dispatch({
      type: DARK_MODE,
      payload: e,
    });
  };