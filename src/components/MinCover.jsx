import React from 'react'
import background from '../assets/35e93da8f8e01619a711b253ecf41893.jpg'
import Stack from "@mui/material/Stack";
import Logo from '../assets/puzzle_white.png'
import {Typography} from "@mui/material";
import {Typewriter} from "react-simple-typewriter";

export const MinCover = () => {
    return (<>
        <div className={'min-cover'}
             style={{backgroundImage: `url(${background})`}}
        >
            <div className={'overlay'}></div>
            <Stack
                zIndex={'1'}
                alignItems={'center'}
                direction={'column'}
                gap={'20px'}
            >
                <img src={Logo}
                     width={'100px'}
                />
                <Typography
                    className={'cover-title'}
                >
                    <Typewriter
                        words={['პროექტები', 'Projects']}
                        loop={'infinity'}
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </Typography>
            </Stack>
        </div>
    </>)
}