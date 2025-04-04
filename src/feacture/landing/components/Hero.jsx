import React from "react";
import HeroBg from '/banner.avif'
import Naruto from '/naruto.avif'
import Neji from '/neji.avif'
import { IconTitle } from "../../../assets/icons/Icons";


export const Hero = () => {
    return(
        <section className="w-full">
            <img 
                className="w-full" 
                src={HeroBg} 
                alt="banner" />

            <div className="mt-[-210px] max-w-[1400px] px-[10px] mx-auto text-white flex items-center justify-between">
                {/* TEXT */}
                <div className="inline-flex items-center justify-center relative">
                    <IconTitle/>
                    <h1 className="z-10 relative whitespace-nowrap">
                        API Narutoshippuden
                    </h1>
                </div>

                {/* PICTURE */}
                <picture className="flex">
                    <img className="h-[400px]" src={Naruto} alt="Naruto" />
                    <img className="h-[400px] mt-[60px]" src={Neji} alt="Naruto" />
                </picture>
            </div>
                

        </section>
    )
}