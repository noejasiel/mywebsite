import Image from "next/image";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { Cover } from "../components/ui/cover";
import { FlipWords } from "../components/ui/flip-words";
import { Hero } from "./Hero";
import { AnimatedModalDemo } from "./IAM";
import { TimelineDemo } from "../components/Timeline";



export const Summary = () => {


    return (
        <div className="flex justify-center items-center overflow-hidden ">
            <BackgroundGradientAnimation className="w-[80%] m-auto">
                <div className="flex items-center justify-center w-full h-full">
                    <Hero />
                </div>
                <div>
                    Yo soy desarrollador web, diseñador gráfico y fotógrafo. Me apasiona la tecnología, la creatividad y la innovación. Soy un profesional comprometido con mi trabajo y con mis clientes.
                    <AnimatedModalDemo />
                </div>
                <TimelineDemo />
            </BackgroundGradientAnimation>
        </div>
    );

}