import React from 'react';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import '../styles/projects/projects.scss'
import img1 from '../assets/projects/pos/Screenshot from 2024-08-04 17-19-55.png'
import img2 from '../assets/projects/pos/Screenshot from 2024-08-04 17-22-17.png'
import img3 from '../assets/projects/pos/Screenshot from 2024-08-04 17-21-46.png'
import img4 from '../assets/projects/pos/Screenshot from 2024-08-04 17-22-39.png'
import img5 from '../assets/projects/pos/Screenshot from 2024-08-04 17-23-28.png'

// import required modules
import {Autoplay, FreeMode, Pagination} from 'swiper/modules';
import {Box, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";


export const ProjectOne = () => {
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
                <Typography className={'title'}>POS სისტემა</Typography>
                <div className={'line'}></div>
                <Typography className={'date'}>2024</Typography>
                <Typography className={'description'}>სისტემა მორგებულია კაფე-ბარებზე და წვრილ სასადილოებზე. პროგრამას
                    გააჩნია გადახდის სისტემა,
                    რომელიც
                    გაძლევს საშუალებას დააინტეგრიროთ TBC ან BOG - ის ტერმინალები. მოიცავს ასევე თამაშრომლეის მენეჯმენტის
                    ფუნქციონალს,
                    რეპორტის გვერდს სადაც შეგიძლიათ ნახოთ გაყიდევბის ისტორია,რაოდენობა და საერთო ფასი. შეგიძლიათ შექმნათ
                    პროდუქცია,
                    მოახდინოთ კალკულაცია,მართოთ მარაგები და სხვა.
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