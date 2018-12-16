export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (scatter) => ({ type: LOGIN, scatter: scatter });
export const logout = () => ({ type: LOGOUT });

