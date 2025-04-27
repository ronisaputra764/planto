import { motion } from "motion/react"
import { MdStarRate } from "react-icons/md";

export default function HeaderReview() {
    return (
        <div className="md:max-w-[80%] xl:max-w-[70%] mx-auto">
            <motion.div
                initial={{ opacity: 100, x: -200 }} // posisi awal
                animate={{ opacity: 1, x: 0 }}   // posisi setelah muncul
                exit={{ opacity: 0, x: -100 }}   // posisi saat keluar
                transition={{ duration: 0.7, ease: "easeOut" }}   // durasi animasi
                className="absolute top-76 md:top-80 lg:top-102 z-10 py-4 md:py-6 px-4 md:px-6 custom-shadow ms-5 md:ms-0 rounded-3xl max-w-[170px] md:max-w-[270px] bg-white/3 backdrop-blur-md text-white/70 inter-thin border border-white/10"
            >
                <div className="flex items-center gap-2">
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full" src="/assets/img/profile4.avif" alt="" />
                    <div>
                        <p className="text-[10px] md:text-[15px] lg:text-[18px]">Alena Patel</p>
                        <div className="flex">
                            <MdStarRate className="text-yellow-300 w-2 md:w-3" />
                            <MdStarRate className="text-yellow-300 w-2 md:w-3" />
                            <MdStarRate className="text-yellow-300 w-2 md:w-3" />
                            <MdStarRate className="text-yellow-300 w-2 md:w-3" />
                            <MdStarRate className="text-yellow-300 w-2 md:w-3" />
                        </div>
                    </div>
                </div>
                <p className="text-[7px] md:text-[10px] lg:text-[13px] mt-2 text-white/50">Absolutely love this plant! It arrived in perfect condition and instantly brightened...</p>
            </motion.div>


        </div>
    )
}