import { AxiosInstance } from "axios";
import { UserGateway } from "@/@core/domain/gateways/user.gateway";
import { User } from "@/@core/domain/entities/user";

export class UserHttpGateway implements UserGateway {
  constructor(private readonly http: AxiosInstance) {}

  signIn(username: string, password: string): Promise<User> {
    return this.http
      .post("/api/v1/autenticar/login", {
        usuario: username,
        senha: password,
      })
      .then(({ data: response }) => new User(response.data));
  }
}
