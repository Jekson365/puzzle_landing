import React from "react";
import {MinNavbar} from "../components/MinNavbar.jsx";
import {MinCover} from "../components/MinCover.jsx";
import {ProjectTwo} from "../projects/ProjectTwo.jsx";
import {ProjectOne} from "../projects/ProjectOne.jsx";
import {ProjectThree} from "../projects/ProjectThree.jsx";
import {ProjectFour} from "../projects/ProjectFour.jsx";

export const ProjectsPage = () => {
    return (
        <>
            <MinNavbar/>
            <MinCover/>
            <ProjectOne/>
            <ProjectTwo/>
            <ProjectThree/>
            <ProjectFour/>
        </>
    )
}