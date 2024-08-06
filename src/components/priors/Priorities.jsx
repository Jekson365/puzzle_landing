import React from "react";
import IconSafe from '../../assets/icons/trust-wallet-svgrepo-com (1).svg'
import IconCheap from '../../assets/icons/money-manager-svgrepo-com.svg'
import IconCheck from '../../assets/icons/check-svgrepo-com.svg'
import {Box, Grid, Typography} from "@mui/material";
import '../../styles/priors.scss'
import Stack from "@mui/material/Stack";

export const Priorities = () => {
    const items = [
        {
            title: "მონაცემები დაცულია",
            img: IconSafe
        },
        {
            title: "იაფი სერვისი",
            img: IconCheap
        },
        {
            title: "ხარისხის გარანტია",
            img: IconCheck
        },
    ]
    return (
        <>
            <Box
                pt={5}
                pb={5}
                className={'prior-cover'}
            >
                <Grid
                    container
                    maxWidth={'800px'}
                    margin={"0 auto"}
                    gap={'50px'}
                    direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    {items.map((e) => {
                        return (
                            <>
                                <Grid
                                    item
                                    display={'flex'}
                                    justifyContent={'center'}
                                    xs={12} md={3}
                                >
                                    <Stack
                                        width={'400px'}
                                        direction={'column'}
                                        alignItems={'center'}
                                        gap={'20px'}
                                        textAlign={'center'}
                                    >
                                        <img
                                            width={'70px'}
                                            src={e.img}/>
                                        <Typography className={'title'}>{e.title}</Typography>
                                    </Stack>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}