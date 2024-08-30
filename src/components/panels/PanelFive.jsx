import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ExtensionIcon from '@mui/icons-material/Extension';
import { Transform } from '@mui/icons-material';

export const PanelFive = () => {
    const pricing = [
        {
            name: "basic",
            price: {
                monthly: 89,
                yearly: 499
            },
            components: [
                {
                    title: "პროდუქციის მართვა",
                    active: true,
                },
                {
                    title: "კატეგორიები",
                    active: true,
                },
                {
                    title: "სამართავი პანელი",
                    active: true,
                },
                {
                    title: "დომეინი",
                    active: true,
                },
                {
                    title: "კალათა",
                    active: true,
                },
                {
                    title: "ბლოგი",
                    active: true,
                },
                {
                    title: "სასურველი დიზაინი",
                    active: false
                },
                {
                    title: "ლოგო",
                    active: false
                },
            ],
        },
        {

            name: "premium",
            price: {
                monthly: 139,
                yearly: 799
            },
            components: [
                {
                    title: "პროდუქციის მართვა",
                    active: true,
                },
                {
                    title: "კატეგორიები",
                    active: true,
                },
                {
                    title: "სამართავი პანელი",
                    active: true,
                },
                {
                    title: "დომეინი",
                    active: true,
                },
                {
                    title: "კალათა",
                    active: true,
                },
                {
                    title: "ბლოგი",
                    active: true,
                },
                {
                    title: "სასურველი დიზაინი",
                    active: true
                },
                {
                    title: "ლოგო",
                    active: true
                },
            ],
        }
    ]
    return (
        <>
            <Grid container

                justifyContent={'center'}
                rowSpacing={3}
            >
                {pricing.map((item) => {
                    return (
                        <>
                            <Grid item xs={12} sm={6} md={4}
                            >
                                <Box
                                    className='priceing-box'
                                >
                                    <Stack
                                        direction={'column'}
                                        alignItems={'flex-start'}
                                        gap={'40px'}
                                    >
                                        <h2
                                            style={{ color: "white" }}
                                        >ონლაინ მაღაზია</h2>
                                        <div className="line"></div>
                                        <Stack
                                            direction={'column'}
                                            alignItems={'flex-start'}
                                        >
                                            <Stack direction={'column'} gap={'20px'}>
                                                {item.components.map((comp) => {
                                                    return (
                                                        <>
                                                            <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
                                                                <Box className='check-icon'>
                                                                    {comp.active ? (<>
                                                                        <CheckIcon
                                                                            style={{ fontSize: "25px" }}
                                                                        />
                                                                    </>) : (<>
                                                                        <CloseIcon
                                                                            style={{ fontSize: "25px", color: "rgb(250, 120, 120)" }}
                                                                        />
                                                                    </>)}
                                                                </Box>
                                                                <div className='check-title'>
                                                                    {comp.title}
                                                                </div>
                                                            </Stack>
                                                        </>
                                                    )
                                                })}
                                            </Stack>
                                            <Stack direction={'row'} mt={7} gap={'30px'}>
                                                <Box position={'relative'}>
                                                    <Stack direction={'row'} alignItems={'flex-end'} gap={'5px'}>
                                                        <Box
                                                            style={{
                                                                position: 'absolute',
                                                                right: "-20px",
                                                                top: "-10px",
                                                                transform: "rotateZ(-45deg)",
                                                                zIndex: "10", // Set to a lower value to ensure it's behind the text
                                                            }}
                                                        >
                                                            <ExtensionIcon
                                                                className='puzzle-size puzzle-size-2'
                                                                fontSize='large'
                                                            />
                                                        </Box>
                                                        <Box style={{ fontSize: "35px", color: "white", position: 'relative', zIndex: "11" }}>
                                                            {item.price.monthly}
                                                        </Box>
                                                        <Box style={{ fontSize: "20px", color: "white", position: 'relative', zIndex: "11" }}>
                                                            ლ/თვე
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                                <Stack direction={'row'} alignItems={'flex-end'} gap={'5px'} position={'relative'}>
                                                    <Box
                                                        style={{
                                                            position: 'absolute',
                                                            right: "-20px",
                                                            top: "-10px",
                                                            transform: "rotateZ(-45deg)",
                                                            zIndex: "10", // Set to a lower value to ensure it's behind the text
                                                        }}
                                                    >
                                                        <ExtensionIcon
                                                            className='puzzle-size'
                                                            fontSize='large'
                                                        />
                                                    </Box>
                                                    <Box style={{ fontSize: "35px", color: "white", position: 'relative', zIndex: "1" }}>
                                                        {item.price.yearly}
                                                    </Box>
                                                    <Box style={{ fontSize: "20px", color: "white", position: 'relative', zIndex: "1" }}>
                                                        ლ/წელი
                                                    </Box>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}