import React, { useEffect, useState } from "react";
import Bg from '/view-personajes-bg.avif'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IconKunay, IconShuriken, IconTitle } from "../../../assets/icons/Icons";

// 

import Cejotas from '/cejotas.avif'


export const ViewPersonajes = () => {

    const [personaje, setPersonaje] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const thenAxios = () => {
            axios.get("https://naruto-api-rsl3.onrender.com/api/v1/characters/" + id)
                .then((result) => {
                    console.log(result)
                    setPersonaje(result.data)


                })
        }

        thenAxios()
    }, [])



    return (
        <main>
            {/* BG */}
            <img className="fixed top-0 left-0 object-cover object-top w-full h-full" src={Bg} alt="banner" />


            {/* SECTION */}
            <section className="my-[120px] relative z-50 bg-white max-w-[1000px] mx-auto p-[30px]">
                {/* TITLE */}
                <h1 className=" h-[130px] bg-[url(/pergamino.svg)] bg-cover flex items-center pl-[40px]">{personaje.name}</h1>
                {/* NAVBAR */}
                <nav className="mt-[20px] flex justify-between items-center border-b-1 border-black pb-[20px]">
                    <ul className="flex">
                        <li>
                            <p className="block bg-[var(--naruto-orange)] py-[6px] px-[15px]">ID: {personaje.id}</p>
                        </li>
                        <li>
                            <a className="block bg-black text-[var(--naruto-orange)] py-[6px] px-[15px]" target="_black" href={personaje.page}>Pagina</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/">ir al Inicio</Link>
                        </li>
                    </ul>
                </nav>
                <picture className="mt-[20px] grid grid-cols-2 gap-[20px] w-full h-[400px] ">
                    <div className="relative block w-full h-full">
                        <span className="absolute top-0 left-0 bg-[var(--naruto-orange)] py-[6px] px-[15px]">Antes</span>
                        <img
                            className="w-full h-full object-cover object-center"
                            src={personaje.images?.[0]}
                            alt={personaje.name}
                        />
                    </div>
                    <div className="relative block h-full w-full">
                        <span className="absolute top-0 left-0 bg-black text-[var(--naruto-orange)] py-[6px] px-[15px]">Despues</span>
                        <img
                            className="w-full h-full object-cover object-center"
                            src={personaje.images?.[1] || personaje.images?.[0]}
                            alt={personaje.name}
                        />

                    </div>
                </picture>
                {/* CONITANER */}
                <div className="p-[18px] flex flex-col gap-[10px] my-[20px] bg-gray-100">
                    <span className="flex gap-[10px] items-center">
                        <IconKunay />
                        Altura:
                        {personaje.info?.Altura || "Desconocida"}
                    </span>
                    <span className="flex gap-[10px] items-center">
                        <IconKunay />
                        Aniversario:
                        {personaje.info?.Aniversário || "Desconocida"}
                    </span>
                    <span className="flex gap-[10px] items-center">
                        <IconKunay />
                        Estado:
                        {personaje.info?.Estado || "Desconocida"}
                    </span>
                    <span className="flex gap-[10px] items-center">
                        <IconKunay />
                        Sexo:
                        {personaje.info?.Sexo || "Desconocida"}
                    </span>
                </div>
                <span className="text-[13px]">{personaje.about}</span>
            </section>
        </main>
    )
}