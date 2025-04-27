const Footer = () => {
    return (
        <div className='bg-[#222C1D] py-7 md:p-10 lg:p-15 relative w-full mt-20 px-7 grid grid-cols-3'>
            <div className="flex flex-col justify-center">
                <img className='w-15 md:w-20 lg:w-30' src="/assets/img/icon.png" alt="" />
                <p className='text-[5px] md:text-[10px] lg:text-[16px] mt-3 text-white/70 inter-thin'>Whether you want to purify your air, decorate your space, or gift some green, GreenNest makes plant shopping joyful and effortless.</p>
            </div>
            <div className='text-white/80 text-[7px] md:text-[12px] lg:text-[16px] inter-thin flex flex-col gap-2 mx-auto'>
                <p className='inter-semibold mb-2'>Quick Link's</p>
                <p>Home</p>
                <p>Type's Of plants</p>
                <p>Contact</p>
                <p>Privacy</p>
            </div>
            <div className='flex flex-col justify-center mx-auto'>
                <p className='text-white/80 text-[7px] md:text-[12px] lg:text-[16px] mb-4'>For Every Update</p>
                <input className='border border-white/80 rounded max-w-[100px] md:max-w-[170px] lg:max-w-[220px] text-[7px] md:text-[12px] lg:text-[16px] py-1 px-2 placeholder:text-white/40' placeholder='Enter Email' type="text" name="" id="" />
                <button className="bg-white/80 flex items-center w-fit px-2 py-1 rounded text-[5px] md:text-[10px] lg:text-[13px] mt-2 md:mt-3 inter-bold">
                    <p>SUBSCRIBE</p>
                </button>
            </div>
        </div>
    )
}

export default Footer