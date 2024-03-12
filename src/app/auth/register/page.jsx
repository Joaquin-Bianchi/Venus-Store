/* eslint-disable @next/next/no-img-element */
import React from "react";

function page() {
  return (
    <main className="flex h-screen m-auto border-t border-zinc-400">
      <div className="w-[45%]">
        <img
          className="object-cover object-top w-full h-full"
          src="/assets/images/login.png"
          alt=""
        />
      </div>
      <div className=" w-1/2 px-20 flex flex-col items-center">
        <h1 className="text-4xl mt-10 ">Register</h1>
        <form className="flex flex-col gap-1 w-full" action="">
          <label htmlFor="">Name</label>
          <input className="w-full bg-gray-100" type="email" required />

          <label htmlFor="">Email</label>
          <input className="w-full bg-gray-100" type="email" required />

          <label htmlFor="">contraseña</label>
          <input className="w-full bg-gray-100" type="password" required />

          <button className="bg-violet-600 text-white">Enviar</button>
        </form>
      </div>
    </main>
  );
}

export default page;
