import React from "react";

function Feedback() {
  return (
    <section className="w-[90%] m-auto">
      <div className="container flex flex-col mb-3">
        <div className="flex mb-6 justify-center md:justify-start">
          <div className="rounded w-2 h-12 bg-purple-600 "></div>
          <h2 className="text-3xl ml-3 font-bold">Feedback</h2>
        </div>
      </div>
      <div className="container flex flex-col items-center drop-shadow-xl justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        <div className="flex flex-col jus max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 border border-black rounded-t-2xl  sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-purple-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Compra asombrosa. La atención al cliente fue excepcional y la ropa
              es de alta calidad. ¡Muy contento con mi elección! 👍
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-purple-400"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-zinc-800 text-white">
            <div className="w-16 h-16 -mt-16 ">
              <img
                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhciUyMG11amVyfGVufDB8fDB8fHww"
                alt=""
                className=" w-full h-full border border-zinc-700 object-center object-cover  rounded-full"
              />
            </div>
            <p className="text-lg font-medium ">Alejandra Sanchez</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 border border-black rounded-t-2xl  sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-purple-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Experiencia de compra increíble. La tela superó mis expectativas.
              Talla perfecta y tejido cómodo. ¡Totalmente satisfecho!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-purple-400"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-zinc-800 text-white">
            <div className="w-16 h-16 -mt-16 ">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhciUyMG11amVyfGVufDB8fDB8fHww"
                alt=""
                className=" w-full h-full border border-zinc-700 object-center object-cover  rounded-full"
              />
            </div>
            <p className="text-lg font-medium ">Maria Perez</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 border border-black rounded-t-2xl  sm:px-8 md:px-12 bg-gray-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 dark:text-purple-400"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              ¡La calidad y el estilo son perfectos. El servicio al cliente fue
              excelente y la entrega fue rápida. ¡Me encanta!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 dark:text-purple-400"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-zinc-800 text-white">
            <div className="w-16 h-16 -mt-16 ">
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className=" w-full h-full border border-zinc-700 object-center object-cover  rounded-full"
              />
            </div>
            <p className="text-lg font-medium ">Julian Brizuela</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
