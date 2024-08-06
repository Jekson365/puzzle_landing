import React from "react";
import {Stack, Typography} from "@mui/material";
import Logo from '../assets/puzzles.png'
import '../styles/partials/minBar.scss'
import {Link} from 'react-router-dom'

export const MinNavbar = () => {
    return (
        <>
            <Stack
                direction={'row'}
                alignItems={'center'} justifyContent={'space-between'}>
                <Link to={'/'}>
                    <img
                        width={'150px'}
                        src={Logo}/>
                </Link>
                <Typography mr={5} className={'min-nav-title'}>
                    პაზლსი / Puzzles
                </Typography>
            </Stack>
        </>
    )
}