import { PropsWithChildren } from "react";
import { UserProvider } from "@/app/context/user";

function Providers({ children }: PropsWithChildren) {
  return <UserProvider>{children}</UserProvider>;
}

export default Providers;
