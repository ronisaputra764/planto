import { motion } from "framer-motion";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function TrendyPlant() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center flex-col items-center" // ⬅️ Tambahkan ini
        >
            <h1 className=" absolute top-116 md:top-130 lg:top-160  text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                Our Trendy Plants
                <span className="absolute -top-0 -right-3 w-6 h-6 border-r-2 border-t-2 border-white/50 rounded-tr-lg"></span>
                <span className="absolute -bottom-1 -left-3 w-6 h-6 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></span>
            </h1>
            <div className="bg-white/3 md:w-[700px] lg:w-[900px] py-4 lg:py-8 mx-5 absolute custom-shadow top-140 md:top-150 lg:top-185 backdrop-blur-md text-white/90 rounded-4xl grid grid-cols-2 border border-white/10">
                <div className="relative">
                    <img className="w-40 md:w-50 lg:w-70 absolute -top-15 lg:-top-25" src="/assets/img/plant2.png" alt="" />
                </div>
                <div className="flex flex-col justify-center me-2">
                    <p className="text-xs md:text-lg lg:text-xl mb-1">Calathea Plant</p>
                    <p className="text-[8px] md:text-[10px] lg:text-[12px] text-white/70">Calathea Plant is a stunning and popular indoor <br />  plant known for its vibrant.</p>
                    <p className="mt-1 text-xs md:text-lg lg:text-xl">$15</p>
                    <div className="flex items-center mt-1 gap-2">
                        <button className="max-w-[70px] border border-white/70 inter-thin text-[10px] px-[10px] py-[5px]  rounded-md">Explore</button>
                        <button className="px-[5px] py-[5px] rounded-md border border-white/70"><HiOutlineShoppingBag className="text-sm" /></button>
                    </div>
                </div>
            </div>
            <div className="bg-white/3 md:w-[700px] lg:w-[900px] mx-5 py-4 lg:py-8 absolute custom-shadow mt-9 top-175 md:top-190 lg:top-240 backdrop-blur-md text-white/90 rounded-4xl grid grid-cols-2 border border-white/10">
                <div className="flex flex-col justify-center ps-10 md:ps-12">
                    <p className="text-xs md:text-lg lg:text-xl mb-1">Monstera Deliciosa</p>
                    <p className="text-[8px] md:text-[10px] lg:text-[12px] text-white/70">Monstera Deliciosa is a plant that brings <br /> bold beauty to any space.</p>
                    <p className="mt-1 text-xs md:text-lg lg:text-xl">$15</p>
                    <div className="flex items-center mt-1 gap-2">
                        <button className="max-w-[70px] border border-white/70 inter-thin text-[10px] px-[10px] py-[5px]  rounded-md">Explore</button>
                        <button className="px-[5px] py-[5px] rounded-md border border-white/70"><HiOutlineShoppingBag className="text-sm" /></button>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-40 md:w-50 lg:w-70 absolute -top-15 lg:-top-25 -right-1" src="/assets/img/plant3.png" alt="" />
                </div>
            </div>
        </motion.div>
    );
}
