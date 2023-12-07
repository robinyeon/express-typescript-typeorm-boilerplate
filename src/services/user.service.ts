import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { createUser } from "../types/user.type";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async findOneUserById(id: string) {}

  createUser(newUserInfo: createUser): User {
    const createdUser = this.userRepository.createUser(newUserInfo);
    return createdUser;
  }
}
