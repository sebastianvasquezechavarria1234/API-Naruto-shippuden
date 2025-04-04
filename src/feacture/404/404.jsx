import React from "react";
import { Link } from "react-router-dom";
import { IconKunay, IconShuriken } from "../../assets/icons/Icons";

export const ViewError = () => {
    return(
        <>
            <section className="max-w-[800px] mx-auto px-[10px] mt-[120px]">
                <h2 className="text-center mb-[20px]">No se pudo encontrar ninguna pagina con la URL introducida. Estas son las posibles causas:</h2>

                {/* CONTAINER */}

                <div className="border-1 border-black p-[20px]">
                    <p className="mb-[20px]">La pagina podría haber sido movida, renombrada o eliminada.
                    (Las páginas que solo están disponibles temporalmente se eliminan después de un cierto periodo de tiempo.)</p>
                    <p className="mb-[20px]">La URL introducida podría ser incorrecta.</p>
                    <p>Es posible que no tengas permisos para acceder a esta página.</p>
                </div>

                {/* BUTTON */}
                <div className="flex flex-col items-center">
                    <h4 className="text-center mt-[20px]">PEDIMOS DISCULPAS POR LA INCONVENIENCIA.</h4>
                    <Link 
                        className="mt-[20px] border-1 border-black inline-flex gap-[20px] items-center py-[12px] px-[20px] hover:bg-black hover:text-white duration-300 transition-all" 
                        to="/">
                            Volver al inicio
                            <IconKunay />
                    </Link>

                </div>

            </section>
        </>

    )
}