import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { MdStarRate } from "react-icons/md";

const reviews = [
    {
        name: "Maxn Ravel",
        image: "/assets/img/profile1.avif",
        review: "I bought the Calathea plant last month and it’s thriving! The leaves are gorgeous and bring so much life to my living room. The packaging was secure, and delivery was super quick!",
    },
    {
        name: "Lii Arthur",
        image: "/assets/img/profile2.avif",
        review: "I ordered the Monstera as a gift for my friend’s birthday, and she couldn’t stop raving about it! It came with a cute care card and looked even better than the pictures.",
    },
    {
        name: "Vaneli K",
        image: "/assets/img/profile3.avif",
        review: "The Snake Plant I received is super healthy and adds a nice touch of green to my home office. I’ve had it for weeks now, and it still looks perfect with minimal care.",
    },
];

const CustomerReview = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });

    return (
        <div className="flex justify-center flex-col items-center mt-[1870px] md:mt-[1890px] lg:mt-[2320px] ">
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: 200 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <h1 className="relative mb-5 -top-10 inline-block text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                    CustomerReview
                    <span className="absolute -top-0 -right-3 w-6 h-6 border-r-2 border-t-2 border-white/50 rounded-tr-lg"></span>
                    <span className="absolute -bottom-1 -left-3 w-6 h-6 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-7"
            >
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="z-10 p-4 lg:p-6 custom-shadow rounded-3xl max-w-[170px] md:max-w-[220px] lg:max-w-[280px]  bg-white/3 backdrop-blur-md text-white/70 inter-thin border border-white/10"
                    >
                        <div className="flex items-center gap-2">
                            <img className="w-8 h-8 lg:w-10 lg:h-10 object-cover rounded-full" src={review.image} alt={review.name} />
                            <div>
                                <p className="text-[10px] md:text-[15px] lg:text-[18px]">{review.name}</p>
                                <div className="flex">
                                    {Array(5).fill(0).map((_, starIndex) => (
                                        <MdStarRate key={starIndex} className="text-yellow-300 w-2 md:w-3" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-[7px] md:text-[10px] lg:text-[13px] mt-2 lg:mt-4 text-white/50">{review.review}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default CustomerReview;
