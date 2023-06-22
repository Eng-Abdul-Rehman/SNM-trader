import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const items = [
  {
    id: 1,
    title: "Item 1",
    image: "images/1a-768x768.jpg",
  },
  {
    id: 2,
    title: "Item 2",
    image: "images/1a-768x768.jpg",
  },
  {
    id: 3,
    title: "Item 3",
    image: "images/1a-768x768.jpg",
  },
  {
    id: 4,
    title: "Item 4",
    image: "images/1a-768x768.jpg",
  },
  {
    id: 5,
    title: "Item 5",
    image: "images/1a-768x768.jpg",
  },

  {
    id: 6,
    title: "Item 6",
    image: "images/1a-768x768.jpg",
  },
];
const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev" onClick={onClick} style={{marginTop: -30}}>
    <FontAwesomeIcon  icon={faChevronLeft} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick} style={{marginTop: -30}}>
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: false, // Set axis to horizontal
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const LimitedCarousel = () => {
  return (
    <Box sx={{ display: { md: 'block', sm: "none", xs: 'none' } }}>
    <Slider {...settings} >
      
      {items.map((item) => (
        // <div key={item.id}>
        //   <img
        //     width={"100%"}

        //     src={item.image}
        //     alt={item.title}
        //   />
        // </div>

        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div
                className="mf-banner-large  layout-2 "
                style={{  border: "2px solid #fcca74", height: 426, display: "flex" }}
              >
                
                <div
                  // className="featured-image"
                 />
                 <Link  href="/" />
                 <div className="row banner-row" style={{width: "60%"}}>
                  <div className="col-md-offset-1 col-md-3 col-sm-6 col-xs-12 col-banner-content">
                    <div className="banner-content">
                      <h2 className="box-title" style={{fontSize: 54, width: 400}}>
                        Numbuzin No.3 
                        <br />
                        Super Glowing <strong className="r-price">25% OFF</strong>
                      </h2>{" "}
                      <p className="desc" style={{fontSize: 20, width: 420}}>
                      Ermented Ingredients, Niacinamide,glowy skin radiance
                        Korean Skin Care for Face, 6.76 fl.oz
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 col-banner-price" style={{marginLeft: 160}}>
                    <div className="banner-price">
                      <span className="sale-price" >$260.50</span>{" "}
                      <span className="s-price" style={{fontSize: 24}}>$219.05</span>{" "}
                      <a className="link" href="#" style={{width: 160, height: 50, fontSize: 24, padding: 6}}>
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-xs-12 col-banner-image">
                    <div className="banner-image" />
                  </div>
                </div>
                <Box sx={{ width: 460, height: 340, marginTop: -5}}>
                  <img
                    // src="images/transparent.png"
                    src="images/3c.jpg"
                    alt=""
                    className="lazy "
                    width={460}
                    height={415}
                  />
                </Box>
                </div>
                
              </div>
              <div className="martfury-empty-space ">
                <div className="mf_empty_space_lg" style={{ height: 30 }} />
                <div className="mf_empty_space_md" style={{ height: 30 }} />
                <div className="mf_empty_space_xs" style={{ height: 30 }} />
              </div>
            </div>
          </div>
      ))}
    </Slider>
    </Box>
  );
};

export default LimitedCarousel;
