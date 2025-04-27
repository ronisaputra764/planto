// import { motion, useInView } from "framer-motion"
// import { HiOutlineShoppingBag } from "react-icons/hi2"
// import { plants } from "../data"
// import { useRef } from "react";

// export default function TopSelling() {

//     const titleRef = useRef(null);
//     const titleInView = useInView(titleRef, { once: true });

//     return (
//         <motion.div className="flex justify-center flex-col items-center mx-5">
//             <h1 className="absolute top-235 md:top-260 lg:top-320 text-white text-xl md:text-2xl lg:text-3xl font-semibold">
//                 Our Top Selling
//                 <span className="absolute -top-0 -right-3 w-6 h-6 border-r-2 border-t-2 border-white/50 rounded-tr-lg"></span>
//                 <span className="absolute -bottom-1 -left-3 w-6 h-6 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></span>
//             </h1>

//             <div className="grid grid-cols-2 md:grid-cols-3 gap-5 absolute top-255 md:top-285 lg:top-345 mx-5">
//                 {plants.map((plant, index) => (
//                     <div key={index} className="bg-white/3 py-4 custom-shadow mt-7 -top-5 backdrop-blur-md flex w-[170px] md:w-[200px] flex-col justify-center items-center rounded-4xl border border-white/10">
//                         <div className=" ">
//                             <img className="absolute  left-0 right-0  -top-10 md:-top-14" src={`/assets/img/${plant.image}`} alt={plant.name} />
//                         </div>
//                         <div className="px-5 mt-30  text-white/70 flex flex-col gap-2">
//                             <p className="text-xs md:text-lg">{plant.name}</p>
//                             <p className="text-[8px] md:text-[10px] line-clamp-2">{plant.description}</p>
//                             <div className="flex items-center justify-between md:mt-2">
//                                 <p className="text-xs md:text-lg">${plant.price}</p>
//                                 <button className="p-[4px] md:p-[5px] rounded-md border border-white/70">
//                                     <HiOutlineShoppingBag className="text-xs  " />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )
//                 )}
//             </div>
//         </motion.div>
//     )
// }

import { motion, useInView } from "framer-motion"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { plants } from "../data"
import { useRef } from "react";

export default function TopSelling() {
    return (
        <div className="flex justify-center flex-col items-center relative">
            <h1 className="absolute top-235 md:top-260 lg:top-320 text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                Our Top Selling
                <span className="absolute -top-0 -right-3 w-6 h-6 border-r-2 border-t-2 border-white/50 rounded-tr-lg"></span>
                <span className="absolute -bottom-1 -left-3 w-6 h-6 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></span>
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-7 absolute top-255 md:top-285 lg:top-345 ">
                {plants.map((plant, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true });

                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/3 py-4 custom-shadow mt-7 -top-5 backdrop-blur-md flex w-[170px] md:w-[220px] lg:w-[280px] flex-col justify-center items-center rounded-4xl border border-white/10"
                        >
                            <div className=" ">
                                <img className="absolute  left-0 right-0  -top-10 md:-top-19" src={`/assets/img/${plant.image}`} alt={plant.name} />
                            </div>
                            <div className="px-5 lg:px-7 mt-30 lg:mt-45 text-white/70 flex flex-col gap-2 lg:gap-4">
                                <p className="text-xs md:text-lg lg:text-2xl">{plant.name}</p>
                                <p className="text-[8px] md:text-[10px] lg:text-[13px] line-clamp-2">{plant.description}</p>
                                <div className="flex items-center justify-between md:mt-2">
                                    <p className="text-xs md:text-lg lg:text-2xl">${plant.price}</p>
                                    <button className="p-[4px] md:p-[5px] lg:p-[6px] rounded-md border border-white/70">
                                        <HiOutlineShoppingBag className="text-xs lg:text-lg" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}
