import React from "react";
import {MinNavbar} from "../components/MinNavbar.jsx";
import {Cover} from "../components/Cover.jsx";
import {Box, Grid} from "@mui/material";
import {MainPanel} from "../components/MainPanel.jsx";
import {Navbar} from "../partials/Navbar.jsx";
import {useTranslation} from "react-i18next";

export const MainPage = () => {

    const {t} = useTranslation()
    return (
        <>
            <MinNavbar/>
            <Cover/>
            <Grid container>
                <Grid item xs={12} md={10}>
                    <MainPanel/>
                </Grid>
                <Grid item xs={12} md={2} sx={{display: {xs: "none", md: "block"}}}>
                    <Box
                        style={{position: "sticky", top: "0"}}
                    >
                        <Navbar/>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
