import { User } from "../entities/user";

export interface UserGateway {
  signIn: (username: string, password: string) => Promise<User>;
}
