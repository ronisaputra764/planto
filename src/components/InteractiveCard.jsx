import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react"
import { plants } from "../data";


export default function InteractiveCard() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const plant = plants[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % plants.length);
    };

    const handleSelect = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="md:max-w-[80%] xl:max-w-[70%] mx-auto">
            <div className="me-5 md:me-0 flex justify-end">
                <motion.div
                    initial={{ opacity: 100, x: 200 }} // posisi awal
                    animate={{ opacity: 1, x: 0 }}   // posisi setelah muncul
                    exit={{ opacity: 0, x: -100 }}   // posisi saat keluar
                    transition={{ duration: 0.7, ease: "easeOut" }}   // durasi animasi
                    className="absolute top-50 w-fit custom-shadow rounded-4xl lg:rounded-[60px] z-10 px-4 lg:px-7 bg-white/3 backdrop-blur-md text-white/70 inter-thin border border-white/10">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={plant.image}
                            src={`/assets/img/${plant.image}`}
                            alt="plant image"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="w-30 md:w-40 lg:w-60 relative -top-10 "
                        />
                    </AnimatePresence>
                    <div className="relative ms-1 -top-8">
                        <p className=" text-[7px] md:text-[10px] lg:text-[15px] mb-1">{plant.tag}</p>
                        <div className=" flex items-center justify-between">
                            <h2 className="text-xs md:text-lg lg:text-2xl">{plant.name}</h2>
                            <button onClick={handleNext}>
                                <IoIosArrowForward className="text-lg hover:cursor-pointer" />
                            </button>
                        </div>
                        <button className=" border border-white/70 inter-thin text-[10px] lg:text-[15px] px-[10px] lg:px-[20px] py-[5px] mt-2 rounded-md">Buy Now</button>

                        <div className="flex justify-center gap-2 mt-4 ">
                            {plants.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelect(index)}
                                    className={` rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white/80 w-3 h-1" : "bg-white/30 w-1 h-1"}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}
