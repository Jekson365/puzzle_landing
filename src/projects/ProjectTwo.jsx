import React from 'react';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import '../styles/projects/projects.scss'
import img1 from '../assets/projects/kheta/Screenshot from 2024-08-04 17-38-11.png'
import img2 from '../assets/projects/kheta/Screenshot from 2024-08-04 17-38-43.png'
import img3 from '../assets/projects/kheta/Screenshot from 2024-08-04 17-39-10.png'
import img4 from '../assets/projects/kheta/Screenshot from 2024-08-04 17-39-30.png'
import img5 from '../assets/projects/kheta/Screenshot from 2024-08-04 17-40-09.png'
import img6 from '../assets/projects/kheta/Screenshot from 2024-08-04 17-39-46.png'

// import required modules
import {Autoplay, FreeMode, Pagination} from 'swiper/modules';
import {Box, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";


export const ProjectTwo = () => {
    const ProjectData = {
        title: "",
        description: "",
        images: [
            img1, img2, img3, img4, img5, img6
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
                <Typography className={'title'}>ხეთა</Typography>
                <div className={'line'}></div>
                <Typography className={'date'}>2023</Typography>
                <Typography className={'description'}>
                    ხეთა აწარმოებს ეკოლოგიურად სუფთა ხისგან დამზდებულ პროდუქციას.
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