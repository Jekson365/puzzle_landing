import React from "react";
import {Box, Grid, Stack, Typography} from "@mui/material";
import PanelOneImage from "../../assets/panels/undraw_project_completed_re_jr7u.svg";
import {Link} from "react-router-dom";


export const PanelFour = () => {
    return (
        <Box className={'panel-cover'}>
            <Grid container
                  columnSpacing={10}
                  rowSpacing={5}
                  flexDirection={'row-reverse'}
            >
                <Grid item xs={12} md={6}>
                    <img src={PanelOneImage} width={'100%'}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Stack direction={'column'} gap={'30px'} alignItems={'flex-start'}
                               className={'panel-content'}>
                            <Typography className={'title'}>პროექტები</Typography>
                            <Typography className={'description'}>
                                იხილეთ პაზლსის პროექტები
                            </Typography>
                            <Stack direction={'row'} alignItems={'center'}>
                                <button className={'main-button'}>
                                    <Link to={'/projects'}>პროექტები</Link>
                                </button>
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}