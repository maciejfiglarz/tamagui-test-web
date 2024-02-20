import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles.css'

const M_Slider = () => {
  return (
    <div style={{ position: 'relative', outline: '1px solid red', width: '100%', overflow: 'hidden' }}>
      <Swiper
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}
export { M_Slider }
