/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // ALMACENAR LOS DATOS DEL USUARIO EN LA TABLA USERS
      router.push("/");
    } catch (error) {
      console.error("el error es ", error);
    }
  };

  return (
    <>
      <main className="flex h-screen m-auto border-t border-zinc-400">
        <div className="w-[45%]">
          <img
            className="object-cover object-top w-full h-full"
            src="/assets/images/login.png"
            alt=""
          />
        </div>
        <div className=" w-1/2 px-20 flex flex-col">
          <h1 className="text-4xl mt-10 mb-10 ">Register</h1>
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-1 w-full"
            action=""
          >
            <label htmlFor="name">Name</label>
            <input
              className="w-full bg-gray-100"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              type="name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              className="w-full bg-gray-100"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="w-full bg-gray-100"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              type="password"
              required
            />
            <button className="bg-violet-600 text-white">Enviar</button>
          </form>
        </div>
      </main>
    </>
  );
}
