type UserProps = {
  idUsuario: string;
  name: string;
  token?: string
};

export class User {
  constructor(protected props: UserProps) {}

  get id() {
    return this.props.idUsuario;
  }

  get name() {
    return this.props.name;
  }

  get token() {
    return this.props.token;
  }
}
