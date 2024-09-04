import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";
import Dino from "@/public/Dino.png";
import Rick from "@/public/RIck.png";
import ludo from "@/public/ludo.png";
import Compi from "@/public/Compi.png";
import { ClipboardComponent } from "../pages/Clickbboard";


export function TimelineDemo() {
  const data = [
    {
      title: "2019 - 2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Comencé a hacer mis primeros proyectos de desarrollo web, aprendiendo HTML, CSS, JavaScript y React. Puedes
            verlos{" "}
            <a
              target="_blank"
              href="https://noejasiel.github.io/YoSoy/"
              className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
            >
              👉🏼 aquí
            </a>
            
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Dino}
              alt="Dino"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Rick}
              alt="Rick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            En esta etapa, comencé a trabajar en proyectos más grandes, complejos y en equipo.
          </p>
          <ul className="list-none pl-0 mb-8">
            <li className="flex items-center mb-2">
              <span className="text-yellow-500 text-lg md:text-xl mr-2">🥉</span>
              <span className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                <span className="font-semibold">Hackatec 2021:</span> 3er lugar
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-lg md:text-xl mr-2">🥇</span>
              <span className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                <span className="font-semibold">Hack for Equality:</span> 1er lugar
              </span>
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={ludo}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={Compi}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Ahora",
      content: (
       <ClipboardComponent />
      ),
    },
  ];

  return <Timeline data={data} />;
}
