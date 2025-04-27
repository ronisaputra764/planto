import { FaPlay } from "react-icons/fa";
import { motion } from "motion/react"

export default function Header() {
    return (
        <>
            <motion.div
                initial={{ opacity: 100, x: -200 }} // posisi awal
                animate={{ opacity: 1, x: 0 }}   // posisi setelah muncul
                exit={{ opacity: 0, x: -100 }}   // posisi saat keluar
                transition={{ duration: 0.7, ease: "easeOut" }}   // durasi animasi
                className="absolute top-20 md:max-w-[80%] xl:max-w-[70%] mx-auto md:mt-20 left-0 right-0"
            >
                <div className="px-5 md:ps-0 text-white/70 w-fit max-w-[270px] md:max-w-[400px] xl:max-w-[590px]">
                    <h1 className="text-3xl inter-regular md:text-5xl xl:text-7xl">Breath Natureal</h1>
                    <p className="text-[8px] lg:text-[10px] xl:mt-2 xl:text-xs inter-thin ">Whether you want to purify your air, decorate your space, or gift some green, GreenNest makes plant shopping joyful and effortless.</p>
                    <div className="mt-2 xl:mt-4 flex items-center gap-2 lg:gap-4">
                        <button className="border border-white/70 inter-thin text-xs lg:text-lg lg:px-7 px-5 py-1 rounded-md">Explore</button>
                        <button className="flex items-center gap-1 lg:gap-2">
                            <span className="border border-white/70 rounded-full p-[7px] lg:p-[10px]">
                                <FaPlay className="text-[10px] lg:text-sm" />
                            </span>
                            <p className="text-[8px] lg:text-[10px]">Live Demo...</p>
                        </button>
                    </div>
                </div>
            </motion.div>

        </>

    )
}