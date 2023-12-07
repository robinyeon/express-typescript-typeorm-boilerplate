import { User } from "../entities/user.entity";
import { CustomError } from "../middleware/error.middleware";
import { UserRepository } from "../repositories/user.repository";
import { createUser } from "../types/user.type";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async findOneUserById(id: string) {
    const foundUser = await this.userRepository.findOneUserById(id);
    if (!foundUser) throw new CustomError(400, "User not found.");
    return foundUser;
  }

  createUser(newUserInfo: createUser): User {
    const createdUser = this.userRepository.createUser(newUserInfo);
    return createdUser;
  }
}
