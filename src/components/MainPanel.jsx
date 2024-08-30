import React from "react";
import {PanelOne} from "./panels/PanelOne.jsx";
import '../styles/panels/main.scss'
import {PanelTwo} from "./panels/PanelTwo.jsx";
import {PanelThree} from "./panels/PanelThree.jsx";
import {Priorities} from "./priors/Priorities.jsx";
import {Element} from 'react-scroll';
import {PanelFour} from "./panels/PanelFour.jsx";
import { PanelFive } from "./panels/PanelFive.jsx";


export const MainPanel = () => {
    return (
        <>
            <Element name={'section-1'}>
                <PanelOne/>
            </Element>
            <Element name={'priors'}>
                <Priorities/>
            </Element>
            <Element name={'section-2'}>
                <PanelTwo/>
            </Element>
            <Element name={'section-3'}>
                <PanelThree/>
            </Element>
            <Element name={'section-4'}>
                <PanelFour/>
            </Element>
            <Element name={'section-5'}>
                <PanelFive/>
            </Element>
        </>
    )
}