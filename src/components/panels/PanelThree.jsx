import React from "react";
import {Box, Grid, Stack, Typography} from "@mui/material";
import PanelOneImage from "../../assets/panels/undraw_services_re_hu5n.svg";
import {Link} from "react-scroll";
import cover from '../../assets/cover.png'


export const PanelThree = () => {
    return (
        <>
            <Box className={'panel-cover'}>
            <img className="inner-dot-lines" src={cover}/>
                <img className="inner-dot-lines second" src={cover}/>
                <Grid container
                      columnSpacing={10}
                      rowSpacing={5}
                >
                    <Grid item xs={12} md={6}>
                        <img src={PanelOneImage} width={'90%'}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Stack direction={'column'} gap={'30px'} alignItems={'flex-start'}
                                   className={'panel-content'}>
                                <Typography className={'title'}>POS სისტემა</Typography>
                                <Typography className={'description'}>
                                    პაზლს აქვს POS სისტემის სერვისი. ამ სერვისით
                                    თქვენ შეგიძლიათ მართოთ თქვენი კაფე/ბარი. დეტალურად
                                    ნახოთ გაყიდვები,განათავსოც პროდუქციები და მართოთ თანამშრომლები
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