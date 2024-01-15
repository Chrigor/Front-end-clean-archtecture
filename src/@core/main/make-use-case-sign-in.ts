import { SignInUseCase } from "@/@core/application/user/sign-in.use-case";
import { UserHttpGateway } from "@/@core/infra/gateways/user-http.gateway";
import { http } from "@/@core/infra/http";

export const makeUseCaseSignIn = () => {
  return new SignInUseCase(new UserHttpGateway(http));
};
