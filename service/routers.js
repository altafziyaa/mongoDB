import * as userService from "./allService.js";

class UserController {
  async createUser(req, res, next) {
    try {
      const user = await userService.createUser(req.body);
      return res.status(201).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
