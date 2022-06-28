import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="flex justify-around items-center h-[80vh]">

                <div>
                    <p className='font-medium text-[]'
                    data-aos="fade-right"
                    data-aos-duration='800'
                    >Hire Professionals For Your Film</p>
                    
                    <div className="text-[4rem] ">
                        <h2
                            data-aos="fade-right"
                            data-aos-duration='800'
                            className="font-medium text-[#0A6980]"
                        >Light</h2>
                        <h2
                            data-aos="fade-left"
                            data-aos-duration='900' className='px-[15px] lg:md:ml-[40px] rounded-lg bg-[#ddd] font-medium'>Camera</h2>
                        <h2
                            data-aos="fade-right"
                            data-aos-duration='1000'
                            className='text-[#b700b7e6] font-semibold'
                        >Action</h2>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <lottie-player
                        src="https://assets8.lottiefiles.com/private_files/lf30_ctjyble0.json"
                        // background="transparent"
                        speed="1"
                        loop
                        autoplay
                    ></lottie-player>
                </div>
            </div>
        </div>
    );
};

export default Banner;