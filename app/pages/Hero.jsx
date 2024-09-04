import Image from "next/image"
import { Cover } from "../components/ui/cover"
import { FlipWords } from "../components/ui/flip-words"

const words = [
    "Noe Jasiel",
    "Creativo",
    "Innovador",
    "Apasionado",
    "Profesional",
    "Comprometido",
]

export const Hero = () => {

    return (
        <div className="flex py-10 flex-col lg:flex-row items-center space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 justify-around w-full">
            {/* Título */}
            <h1 className="text-4xl w-full lg:w-[60%] md:text-4xl lg:text-5xl font-semibold text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white whitespace-nowrap" >
                Yo soy <Cover> <FlipWords words={words} /> </Cover>
                <br />
            </h1>

            {/* Imagen Circular */}
            <div className="w-full lg:w-[15%] flex justify-center z-50">
                <Image
                    src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/305952855_581550400386078_1592326159366513077_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=wtnIn45P9FkQ7kNvgEESxSn&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjkyNTE2MzM1Nzc1MDg1NTAzNg%3D%3D.2-ccb7-5&oh=00_AYAhNsdxdloy2IAbeD2OzgFGx3k9CgXVGeSUETSEXoX8OA&oe=66D33BB4&_nc_sid=10d13b"
                    alt="Descripción de la imagen"
                    width={150}
                    height={150}
                    className="lg:w-full lg:h-full h-[30%] w-[30%] object-cover rounded-full border-4 border-[#6a5ae0] dark:border-[#6a5ae0] shadow-[0_0_10px_#6a5ae0,0_0_15px_#6a5ae0,0_0_20px_#6a5ae0,0_0_25px_#6a5ae0]"
                />
            </div>
        </div>
    )
}