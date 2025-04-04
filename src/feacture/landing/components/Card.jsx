import axios from "axios";
import React, { useEffect, useState } from "react";
import { IconKunay } from "../../../assets/icons/Icons";
import { useNavigate } from "react-router-dom";

export const Card = () => {

    const navegation = useNavigate()


    const[personajes, setPersonajes] = useState([])

    useEffect(() => {
        const thenAxios = () => {
            axios.get("https://naruto-api-rsl3.onrender.com/api/v1/characters")
            .then((result) => {
                console.log(result)
                setPersonajes(result.data)
            })
        }

        thenAxios()
    }, [])


    const viewPersonajes = (id) => {
        navegation("/view-personajes/"+id)
    }


   

    return(
        <>
            {personajes.map((element, index) => (
                <article>
                    {/* PICTURE */}
                    <picture className="relative block w-full h-[300px]">
                        {/* NAME */}
                        <h2 className="bg-[var(--naruto-orange)] py-[1px] px-[8px] absolute right-0 top-0 z-50">{element.name}</h2>
                        <img 
                            className="w-full h-full object-cover object-center" 
                            src={element.images[0]} 
                            alt="personajes" />
                    </picture>
                    {/*  */}
                    <p className="line-clamp-3 overflow-hidden pt-[20px]">{element.about[1]}</p>
                    {/* LINE */}
                    <span className="w-full my-[20px] h-[1px] bg-black block"></span>
                    {/* FLEX */}
                    <div className="flex justify-between items-center">
                        <h5 
                            onClick={() => viewPersonajes(element.id)}
                            className="flex items-center gap-[10px] bg-black text-white inline-flex py-[10px] px-[17px] hover:bg-[var(--naruto-orange)] hover:text-[var(--naruto-blue)] duration-300 transition-all">
                            Ver mas 
                            <IconKunay />
                        </h5>
                        <p className="italic underline">{element.info.Sexo}</p>

                    </div>
                </article>
            ))}
        </>
    )

}