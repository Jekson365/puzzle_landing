import React from "react";
import {Grid, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Logo from '../assets/puzzle_white.png'
import '../styles/partials/footer.scss'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
    return (
        <>
            <Grid container
                  display={'flex'}
                  alignItems={'flex-start'}
                  p={2}
                  pt={5}
                  pb={5}
            >
                <Grid item xs={6}>
                    <Stack
                        direction={'column'}
                        alignItems={'flex-start'}
                    >
                        <Typography className={'footer-title'}>კონტაქტი</Typography>
                        <Stack
                            mt={4}
                            gap={'20px'}
                        >
                            <Typography className={'footer-data'}>
                                <Stack direction={'row'} gap={'5px'}>
                                    <CallIcon/>
                                    <Typography>+995 557 98 37 61</Typography>
                                </Stack>
                            </Typography>
                            <Typography className={'footer-data'}>
                                <Stack direction={'row'} gap={'5px'}>
                                    <MailIcon/>
                                    <Typography>jeko.erg@gmail.com</Typography>
                                </Stack>
                            </Typography>
                            <Typography className={'footer-data'}>
                                <Stack direction={'row'} gap={'5px'}>
                                    <FacebookIcon/>
                                    <Typography>facebook.com/puzzles</Typography>
                                </Stack>
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={6}
                      display={'flex'}
                      alignItems={'flex-end'}
                      justifyContent={'end'}
                >
                    <img
                        width={'100px'}
                        src={Logo}/>
                </Grid>
            </Grid>
        </>
    )
}