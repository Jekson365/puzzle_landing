import React from "react";
import {Box, Grid, Stack, Typography} from "@mui/material";
import PanelOneImage from '../../assets/panels/undraw_team_collaboration_re_ow29.svg'
import {Link} from "react-scroll";
import cover from '../../assets/cover.png'

export const PanelOne = () => {
    return (
        <>
            <Box className={'panel-cover'}>
                <Grid container
                      columnSpacing={10}
                      rowSpacing={5}
                >
                    <Grid item xs={12} md={6}>
                        <img src={PanelOneImage} width={'100%'}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Stack direction={'column'} gap={'30px'} alignItems={'flex-start'}
                                   className={'panel-content'}>
                                <Typography className={'title'}>პაზლსი / Puzzles</Typography>
                                <Typography className={'description'}>
                                    პაზლსი წარმოადგენს დეველოპერების გუნდს, რომელიც ორიენტირებულია
                                    იმაზე,რომ თქვენი ხედვა გარდაქმნას ციფრულ პროდუქტად.
                                </Typography>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Link to={'section-4'} duration={500} smooth={true}>
                                        <button className={'main-button'}>დაგვიკავშირდი</button>
                                    </Link>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <img className="inner-dots inner-dot-lines" src={cover}/>
                <img className="inner-dots inner-dot-lines second" src={cover}/>
            </Box>
        </>
    )
}