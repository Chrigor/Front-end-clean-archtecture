"use client";
import "@/app/globals.css";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/app/components/Input";

import { makeUseCaseSignIn } from "@/@core/main/make-use-case-sign-in";
import { useUser } from "@/app/context/user";

export default function Home() {
  const { setUser, user } = useUser();
  const routes = useRouter();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);
    const userName = data.get("username") as string;
    const password = data.get("password") as string;

    const useCase = makeUseCaseSignIn();
    const user = await useCase.execute(userName, password);
    setUser(user);

    routes.push("/home");
  };

  return (
    <main className="flex justify-center items-center w-screen h-full">
      <form onSubmit={onSubmit} className="flex flex-col gap-2 max-w-96">
        <span>User id: {user?.id}</span>

        <div>
          <label htmlFor="username">UserName</label>
          <Input type="username" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <Input type="password" id="password" name="password" required />
        </div>

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2">
          Entrar
        </button>
      </form>
    </main>
  );
}
