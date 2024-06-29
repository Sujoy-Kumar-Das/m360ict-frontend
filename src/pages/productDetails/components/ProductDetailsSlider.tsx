import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

export default function ProductDetailsSlider({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Thumbs]}
      >
        {images.map((image, index: number) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundColor: "#f0f2f5",
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <img
                src={image}
                alt="Nature 1"
                style={{
                  height: "350px",
                  width: "350px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{ marginTop: "20px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                border: "1px solid white",
                borderRadius: "8px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={image}
                alt="Nature 1"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
