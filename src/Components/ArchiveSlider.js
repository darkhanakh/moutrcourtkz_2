import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./../Style/ArchiveSlider.css";

import archive1 from "./../Images/1.jpeg";
import archive2 from "./../Images/2.jpeg";
import archive3 from "./../Images/3.jpeg";
import archive4 from "./../Images/4.jpeg";
import archive5 from "./../Images/5.jpeg";
import archive6 from "./../Images/6.jpeg";
import archive7 from "./../Images/7.jpeg";
import archive8 from "./../Images/8.jpeg";
import archive9 from "./../Images/9.jpeg";
import archive10 from "./../Images/10.jpeg";
import archive11 from "./../Images/11.jpeg";
import archive12 from "./../Images/12.jpg";
import archive13 from "./../Images/13.jpg";
import archive14 from "./../Images/14.jpg";
import archive15 from "./../Images/15.jpg";
import archive16 from "./../Images/16.jpg";
import archive17 from "./../Images/17.jpg";
import archive18 from "./../Images/18.jpg";
import archive19 from "./../Images/19.jpg";
import archive20 from "./../Images/20.jpg";

import { matchRoutes, useLocation } from "react-router-dom";

const routes = [{ path: "archive/old" }, { path: "archive/new" }];

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route.path;
};

const ArchiveSlider = () => {
  const currentPath = useCurrentPath();

  const oldArchiveImages = [
    archive1,
    archive2,
    archive3,
    archive4,
    archive5,
    archive6,
    archive7,
    archive8,
    archive9,
    archive10,
    archive11,
  ];

  const newArchiveImages = [
    archive12,
    archive13,
    archive14,
    archive15,
    archive16,
    archive17,
    archive18,
    archive19,
    archive20,
  ];

  const buildSlider = () => {
    if (currentPath === "archive/old") {
      return (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
        >
          {oldArchiveImages.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt={"archive" + image} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    } else if (currentPath === "archive/new") {
      return (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
        >
          {newArchiveImages.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt={"archive" + image} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  };

  return <div style={{ marginBottom: "30px" }}>{buildSlider()}</div>;
};

export default ArchiveSlider;
