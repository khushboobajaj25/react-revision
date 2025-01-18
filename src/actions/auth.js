import { apiCall } from "../middleware/api";

export const login = (username, password) => {
  return apiCall("/login", "POST", { username, password });
};

export const register = (username, password, phoneNo) => {
  return apiCall("/register", "POST", { username, password, phoneNo });
};

export const logout = () => {
  return apiCall("/logout", "POST");
};