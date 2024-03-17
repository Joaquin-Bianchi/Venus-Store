import React from "react";

function Ofertas() {
  return (
    <section className="bg-zinc-50 my-36 border-black w-full py-10">
      <div className="text-center pb-10 pt-6">
        <h5 className="text-4xl text-black font-extrabold">
          Ofertas de las Mejores Marcas
        </h5>
        <p className="text-lg pt-3 text-zinc-950 font-bold">
          Hasta <span className="text-yellow-400">60%</span> de descuento en
          marcas
        </p>
      </div>
      <div className="flex text-xl flex-col items-center md:flex-row md:gap-20 md:justify-center">
        <div className="w-40">
          <img
            src="/assets/images/brands/nike.svg"
            alt="Logo de nike"
            className="w-full h-auto"
          />
        </div>
        <div className="w-40">
          <img
            src="/assets/images/brands/levis.svg"
            alt="Logo de levis"
            className="w-full h-auto"
          />
        </div>
        <div className="w-40">
          <img
            src="/assets/images/brands/puma.svg"
            alt="Logo de Puma"
            className="w-full h-auto"
          />
        </div>
        <div className="w-40">
          <img
            src="/assets/images/brands/adidas.svg"
            alt="Logo de Adidas"
            className="w-full h-auto"
          />
        </div>

        <div className="w-40">
          <img
            src="/assets/images/brands/supreme.svg"
            alt="Logo de Supreme"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Ofertas;
