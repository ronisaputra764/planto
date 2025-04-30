import React, { useState } from 'react'
import { TfiClose } from "react-icons/tfi";
import { plants } from '../data';

const Search = ({ setSearchOpen }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter plants berdasarkan inputan
    const filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            onClick={() => setSearchOpen(false)} // <<< ini betul sekarang
            className="fixed inset-0 flex justify-center items-center backdrop-blur-md z-40"
        >
            <div
                onClick={(e) => e.stopPropagation()} // <<< supaya klik di dalam modal tidak close
                className="mx-4 my-10 relative bg-white/10 p-10 px-5 w-[700px] max-h-[500px] rounded-3xl border border-white/20 flex flex-col gap-4"
            >
                <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute top-4 right-4 text-white/70 hover:text-white"
                >
                    <TfiClose className="text-xl" />
                </button>

                {/* Input Search */}
                <input
                    type="text"
                    placeholder="Search Plant"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:outline-none"
                />

                {/* Hasil Search */}
                {searchTerm && (
                    <div className="flex flex-col gap-4 mt-5 overflow-y-auto max-h-[300px] md:pr-2">
                        {filteredPlants.length > 0 ? (
                            filteredPlants.map((plant, index) => (
                                <div key={index} className='flex items-center gap-4 p-3 py-6 relative bg-white/10 rounded-2xl'>
                                    <img className='w-20 -left-0 absolute object-cover rounded-xl' src={`/assets/img/${plant.image}`} alt={plant.name} />
                                    <p className='text-white/70 ms-20 text-xl'>{plant.name}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-white/70 text-center mt-10">No plants found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search;


