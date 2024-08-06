import React from 'react'
import background from '../assets/35e93da8f8e01619a711b253ecf41893.jpg'
import Stack from "@mui/material/Stack";
import Logo from '../assets/puzzle_white.png'
import {Typography} from "@mui/material";
import {Typewriter} from "react-simple-typewriter";

export const Cover = () => {
    return (<>
        <div className={'main-cover'}
             style={{backgroundImage: `url(${background})`}}
        >
            <div className={'overlay'}></div>
            <Stack
                zIndex={'1'}
                alignItems={'center'}
                direction={'column'}
                gap={'30px'}
            >
                <img src={Logo}
                     width={'200px'}
                />
                <Typography
                    className={'cover-title'}
                >
                    <Typewriter
                        words={['პაზლსი', 'Puzzles']}
                        loop={'infinity'}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </Typography>
                <Typography
                    className={'cover-description'}
                >Transforming Ideas into Digital Reality</Typography>
            </Stack>
        </div>
    </>)
}