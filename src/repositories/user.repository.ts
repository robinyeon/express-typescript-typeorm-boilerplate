import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { myDataSource } from "../data-source.ts";
import { createUser } from "../types/user.type";

export class UserRepository {
  private user: Repository<User>;

  constructor() {
    this.user = myDataSource.getRepository(User);
  }

  async findOneUserById(id: string) {
    const foundUser = this.user.findOneBy({ id });
    return foundUser;
  }

  createUser(newUserInfo: createUser): User {
    const createdUser = this.user.create(newUserInfo);
    return createdUser;
  }
}
