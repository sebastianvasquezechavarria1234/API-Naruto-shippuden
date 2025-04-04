import React from "react";
import { Header } from "../layout/Header";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";

export const Landing = () => {
    

    return (
        <>
            <Header />
            <Hero />
            <section className="">
                {/* GRID */}
                <div className="grid grid-cols-3 max-w-[1400px] mx-auto px-[10px] gap-[30px]">
                    <Card />
                </div>
            </section>
        </>
    );
};
