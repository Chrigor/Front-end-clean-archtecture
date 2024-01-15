import { User } from "@/@core/domain/entities/user";
import { UserGateway } from "@/@core/domain/gateways/user.gateway";

export class SignInUseCase {
  constructor(private userGateway: UserGateway) {}

  async execute(username: string, password: string): Promise<User> {
    const user = await this.userGateway.signIn(username, password)
    return user
  }
}