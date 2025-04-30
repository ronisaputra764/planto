import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import Search from "./Search";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <div className={`absolute left-0 right-0 px-5 md:px-0 py-5 md:p-7 z-10 justify-between md:max-w-[80%] xl:max-w-[70%] mx-auto items-center flex w-full ${searchOpen ? 'blur-sm' : ''}`}>
                <img className="w-20 md:w-25 lg:w-35" src="/assets/img/icon.png" alt="Logo" />
                <div className="md:flex gap-6 text-xs lg:text-[15px] text-white/70 hidden">
                    <a>Home</a>
                    <a>Plants Type</a>
                    <a>More</a>
                    <a>Contact</a>
                </div>
                <div className="text-white/70 text-xl flex justify-between gap-8 ">
                    <button onClick={() => setSearchOpen(true)}><GoSearch /></button>
                    <HiOutlineShoppingBag />
                    <button className="hover:cursor-pointer md:hidden" onClick={() => setMenuOpen(true)}>
                        <CiMenuBurger />
                    </button>
                </div>
            </div>

            {/* overlay menu */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed top-0 right-0 h-full w-full backdrop-blur-md text-white/80 p-8 z-30 flex flex-col gap-6
                duration-500 ease-in-out
                ${menuOpen ? 'translate-x-0 ' : 'translate-x-full  pointer-events-none'}
            `}
            >
                <div onClick={(e) => e.stopPropagation()} className="relative flex flex-col gap-6">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute right-0 top-0 hover:cursor-pointer"
                    >
                        <TfiClose className="text-xl" />
                    </button>
                    <a href="#" className="w-fit hover:translate-x-1 transition-all">Home</a>
                    <a href="#" className="w-fit hover:translate-x-1 transition-all">Plants Type</a>
                    <a href="#" className="w-fit hover:translate-x-1 transition-all">More</a>
                    <a href="#" className="w-fit hover:translate-x-1 transition-all">Contact</a>
                </div>
            </div>



            {/* Overlay Search */}
            {searchOpen && (
                <Search setSearchOpen={setSearchOpen} />
            )}
        </>
    );
}
