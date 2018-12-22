export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SHOW_ERROR = "SHOW_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";

export const login = (scatter) => ({ type: LOGIN, scatter: scatter });
export const logout = () => ({ type: LOGOUT });
export const showError = (error) => ({ type: SHOW_ERROR, error: error });
export const hideError = () => ({ type: HIDE_ERROR });

