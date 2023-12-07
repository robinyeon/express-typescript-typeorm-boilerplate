import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { myDataSource } from "../data-source.ts";
import { createUser } from "../types/user.type";
import { PossibleNull } from "../types/common.type";
import { CustomError } from "../middleware/error.middleware";

export class UserRepository {
  private user: Repository<User>;

  constructor() {
    this.user = myDataSource.getRepository(User);
  }

  async findOneUserById(id: string) {
    const foundUser = this.user.findOneBy({ id });
    if (!foundUser) throw new CustomError(400, "User not found.");
    return foundUser;
  }

  createUser(newUserInfo: createUser): User {
    const createdUser = this.user.create(newUserInfo);
    return createdUser;
  }
}
