import React from 'react'
import Stack from "@mui/material/Stack";
import {Box, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode, Pagination} from "swiper/modules";
import img1 from "../assets/projects/furnira/Screenshot from 2024-08-04 18-11-06.png";
import img2 from "../assets/projects/furnira/Screenshot from 2024-08-04 18-11-33.png";
import img3 from "../assets/projects/furnira/Screenshot from 2024-08-04 18-11-57.png";
import img4 from "../assets/projects/furnira/Screenshot from 2024-08-04 18-12-20.png";

export const ProjectThree = () => {
    const ProjectData = {
        title: "",
        description: "",
        images: [
            img1, img2, img3, img4
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
                <Typography className={'title'}>ფურნირა</Typography>
                <div className={'line'}></div>
                <Typography className={'date'}>2023</Typography>
                <Typography className={'description'}>
                    Ecommerce პლატფორმა სადაც შეგიძლია შეიძნოთ ავეჯი.
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