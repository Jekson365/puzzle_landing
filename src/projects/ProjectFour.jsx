import React from 'react';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import '../styles/projects/projects.scss'
import img1 from '../assets/earthstore/Screenshot from 2024-08-29 22-46-38.png'
import img2 from '../assets/earthstore/Screenshot from 2024-08-29 22-46-48.png'
import img3 from '../assets/earthstore/Screenshot from 2024-08-29 22-46-59.png'
import img4 from '../assets/earthstore/Screenshot from 2024-08-29 22-47-26.png'
import img5 from '../assets/earthstore/Screenshot from 2024-08-29 22-47-35.png'

// import required modules
import {Autoplay, FreeMode, Pagination} from 'swiper/modules';
import {Box, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";


export const ProjectFour = () => {
    const ProjectData = {
        title: "",
        description: "",
        images: [
            img1, img2, img3, img4, img5
        ]
    }
    return (
        <>
            <Stack
                mt={5}
                direction={'column'}
                className={'content-cover'}
                alignItems={'flex-start'}
                gap={'20px'}
                p={2}
            >
                <Typography className={'title'}>ონალინ მაღაზია - EarthStore</Typography>
                <div className={'line'}></div>
                <Typography className={'date'}>2024</Typography>
                <Typography className={'description'}>
                    ონლაინ მაღაზია რომელსაც გააჩნია ყველა ფუნქციონალი,რომელიც საჭიროა
                    მაღაზიის გამართულად ფუნქციონირებისთვის: ავტორიზაცია,ლალათა,გადახდა,პროდუქტების და მარაგების მართვა,
                    სამართავი პანელი,რომელიც საშუალებას გაძლევთ მართოთ საიტის თემები და ტექსტები
                </Typography>
            </Stack>
            <Box mt={5} p={2}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {ProjectData.images.map((e) => {
                        return (
                            <>
                                <SwiperSlide>
                                    <Box
                                        className={'slider-cover'}
                                    >
                                        <img src={e}/>
                                    </Box>
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </Box>
        </>
    )
}