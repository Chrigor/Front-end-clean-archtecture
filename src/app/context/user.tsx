"use client";
import { User } from "@/@core/domain/entities/user";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type UserContextProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextProps>({
  setUser: () => null,
  user: null,
});

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
