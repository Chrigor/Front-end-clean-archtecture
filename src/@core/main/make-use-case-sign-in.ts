import { SignInUseCase } from "../application/user/sign-in.use-case";
import { UserHttpGateway } from "../infra/gateways/user-http.gateway";
import { http } from "../infra/http";

export const makeUseCaseSignIn = () => {
  return new SignInUseCase(new UserHttpGateway(http));
};
