import { createNotification } from "../src/scripts/notification/createNotification.js";
import {
  hideSpinner,
  showSpinner,
} from "../src/scripts/utils/loading-spinner.js";
import ApiPaths from "./apiPaths.js";
import { bloggers } from "./startData/startData.js";

class UsersApi {
  static async getAllUsers() {
    try {
      //   showSpinner();
      const response = await fetch(ApiPaths.getFullPath(ApiPaths.paths.users));
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      return await response.json();
    } catch (error) {
      if (error.message === "Internal server error") {
        createNotification("error", "The server is down. Using local data");
        return bloggers;
      } else {
        createNotification("error", error);
      }
    } finally {
      //   hideSpinner();
    }
  }
}

export default UsersApi;
