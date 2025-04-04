import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "../landing/pages/Landing";
import { ViewError } from "../404/404";
import { ViewPersonajes } from "../landing/pages/ViewPersonajes";

export const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/view-personajes/:id" element={<ViewPersonajes />} />
            <Route path="*" element={<ViewError />} />
        </Routes>
    )
}