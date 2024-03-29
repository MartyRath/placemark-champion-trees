import { userApi } from "./api/user-api.js";
import { provinceApi } from "./api/province-api.js";
import { userTreeApi } from "./api/user-tree-api.js";

export const apiRoutes = [
  // User usertree routes
  { method: "GET", path: "/api/usertrees", config: userTreeApi.find },
  { method: "GET", path: "/api/usertrees/find/{id}", config: userTreeApi.findOne },
  { method: "POST", path: "/api/provinces/{province}/addusertree", config: userTreeApi.create },
  { method: "DELETE", path: "/api/usertrees", config: userTreeApi.deleteAll },
  { method: "DELETE", path: "/api/usertrees/del/{treeid}", config: userTreeApi.deleteOne },

  // User routes
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  // Province routes
  { method: "GET", path: "/api/provinces", config: provinceApi.find },
  { method: "GET", path: "/api/provinces/{title}", config: provinceApi.findOne },
  
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
];