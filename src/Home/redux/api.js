import { api } from "utils";


  /**
   * Get all list of users
   * @return {promise} A promise that call in saga
   */
export const fetchAllUsers = () => {
  return api.get("", {params:{per_page:100}});
};

  /**
   * Get one current user by id
   * @param fetchCurrentUser [String] - username of user
   * @return {promise} A promise that call in saga
   */
export const fetchCurrentUser = (username) => {
  console.log(username);
  return api.get(`/${username}`);
};
