import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import PanelOneImage from "../../assets/panels/undraw_website_q7ls.svg";
import { Link } from "react-scroll";


export const PanelTwo = () => {
    return (
        <>
            <Box className={'panel-cover'}>
                <Grid container
                    flexDirection={'row-reverse'}
                    columnSpacing={10}
                    rowSpacing={5}
                >
                    <Grid item xs={12} md={6}>
                        <img src={PanelOneImage} width={'90%'} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Stack direction={'column'} gap={'30px'} alignItems={'flex-start'}
                                className={'panel-content'}>
                                <Typography className={'title'}>ვებ მომსახურება</Typography>
                                <Typography className={'description'}>
                                    პაზლსის ვებ-დეველოპერთა გუნდი გთავაზობთ პროდუქტს რომელიც
                                    მორგებულია თქვენს გემოვნებაზე და სურვილზე.
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
            </Box>
        </>
    )
}