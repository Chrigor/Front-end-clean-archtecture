"use client";

import { useUser } from "@/app/context/user";

function Home() {
  const { user } = useUser();

  return (
    <div>
      <span>Olá, {user?.id} </span>
    </div>
  );
}

export default Home;
