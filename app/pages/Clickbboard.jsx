"use client";
import Image from "next/image";
import login from "@/public/login.png";
import menu from "@/public/menu.png";
import { useState } from "react";

export const ClipboardComponent = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(
      () => {
        if (type === "email") {
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2000); // Vuelve a "Copiar" después de 2 segundos
        } else if (type === "pass") {
          setCopiedPass(true);
          setTimeout(() => setCopiedPass(false), 2000);
        }
      },
      (err) => {
        console.error("Error al copiar al portapapeles: ", err);
      }
    );
  };

  return (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
        Conseguí mi primer trabajo como desarrollador web, además de presentar el proyecto final de mi carrera.
      </p>
      <div className="mb-8">
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          <span className="font-semibold">Proyecto Final:</span> Desarrollo de una aplicación web para pedir comida dentro de cualquier parte de la Universidad. Puedes verlo{" "}
          <a
            href="https://cafe-code-front-new.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
          >
            👉🏼 aquí
          </a>
          </p>
          <br />
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">Correo:</span>
              <span className="text-neutral-800 dark:text-neutral-200 mr-2">usd@gmail.com</span>
              <button
                onClick={() => copyToClipboard("usd@gmail.com", "email")}
                className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
              >
                {copiedEmail ? "Copiado!" : "Copiar"}
              </button>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Pass:</span>
              <span className="text-neutral-800 dark:text-neutral-200 mr-2">1234567</span>
              <button
                onClick={() => copyToClipboard("1234567", "pass")}
                className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
              >
                {copiedPass ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>
        {/* </p> */}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Image
          src={login}
          alt="Login Screen"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
        />
        <Image
          src={menu}
          alt="Menu Screen"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
        />
      </div>
    </div>
  );
};
