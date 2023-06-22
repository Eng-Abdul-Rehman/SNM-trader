import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Electronics } from "./Data/ConsumerElectronicsdata";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import { useContext, useMemo, useState } from "react";
import { Box, Checkbox, IconButton, Rating, Typography } from "@mui/material";
import Link from "next/link";
import { Done, Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import BasicModal from "@/pages/VeiwModle";
import { Context } from "@/pages/_app";

const PrevArrow = ({ onClick }) => (
  
  <button className="slick-arrow slick-prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  vertical: false, // Set axis to horizontal
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const HorizontalCarousel = ({DataC}) => {

  const {datafav ,handleFavoriteClick,handleCardClick, dataCard} = useContext(Context)



  const [eyeobject, seteyeobject] = useState([]);

  const handleeye = (item) => {
    seteyeobject((prevEyeObjects) => [...prevEyeObjects, item]);
  };



  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouse2Enter = (index) => {
    setHoveredIndex(null);
  };

  const handleMouse2Leave = () => {
    setHoveredIndex(null);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <Box>
    <Slider {...settings}>
      {/* {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img width={"80%"} src={item.image} alt={item.title} />
        </div>
       
      ))} */}

      {DataC.map((item, index) => (
        <Box sx={{ display: "flex", gap: 2, marginTop: 3, justifyContent: "center" }}>
          <Box
            onMouseEnter={() => handleMouse2Leave(index)}
            onMouseLeave={handleMouse2Enter}
            sx={{ width: 220, margin: "auto" }}
          >
            <Box
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                width: 280,
                paddingX: 3,
                ":hover": { border: "1px solid black" },
                paddingTop: 2,
              }}
            >
              <Box sx={{height: 250}}>
              <Link href={"/detailPage"} >
                {" "}
                <img width={"98%"} height={"100%"} src={item.Image} alt="image of products" />
              </Link>
              </Box>
              {hoveredIndex === index && (
                <Box onMouseEnter={() => handleMouseEnter(index)}>
                  <Box
                    sx={{
                      position: "relative",
                      bottom: 60,
                      width: "100%",
                      height: 60,
                      backgroundColor: "white",
                      paddingY: 2,
                      display: "flex",
                      justifyContent: "space-betwwen",
                      paddingLeft: 6,
                    }}
                  >
                    <IconButton
                      sx={{
                        width: 40,
                        height: 40,
                        ":hover": { backgroundColor: "#fcb800" },
                        marginLeft: 0.7,
                      }}
                    >
                      <Checkbox
                          onClick={(event) => handleCardClick(item, event)}
                          checked={dataCard.some((CardItem) => CardItem.id === item.id)}
                          icon={<ShoppingBagOutlinedIcon sx={{ fontSize: 24 }} />}
                          checkedIcon={<Done sx={{ color: "black", fontSize: 24 }} />}
                     />
                    </IconButton>
                    <IconButton
                    onClick={() => handleeye(item)}
                      sx={{
                        width: 40,
                        height: 40,
                        ":hover": { backgroundColor: "#fcb800" },
                        marginLeft: 0.7,
                      }}
                    >
                        
                      <RemoveRedEyeOutlinedIcon sx={{ fontSize: 24}}/>
                    </IconButton>
                    <IconButton
                      sx={{
                        width: 40,
                        height: 40,
                        ":hover": { backgroundColor: "#fcb800" },
                        marginLeft: 0.7,
                      }}
                    >
                      <Checkbox
                  onClick={(event) => handleFavoriteClick(item, event)}
                  checked={datafav.some((favItem) => favItem.id === item.id)}
                  icon={<FavoriteBorderOutlined sx={{ fontSize: 24 }} />}
                  checkedIcon={<Favorite sx={{ color: "black", fontSize: 24 }} />}
                />
                    </IconButton>
                  </Box>
                  <Box sx={{ marginTop: -6, paddingBottom: 2 }}>
                    <Typography sx={{ fontSize: 16}}>{item.Type}</Typography>
                    <Box
                      sx={{ display: "flex", marginTop: 1, marginLeft: -0.5 }}
                    >
                      <Rating
                        sx={{ fontSize: 20 }}
                        name="read-only"
                        value={item.StarRate}
                        readOnly
                      />
                      <Typography sx={{ fontSize: 15, marginLeft: 1 }}>
                        {item.StarRating}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "black", fontSize: 20 }}>
                      ${item.Price}
                    </Typography>
                  </Box>
                </Box>
              )}
              {hoveredIndex === index ? null : (
                <Box sx={{ marginTop: 1.5, paddingBottom: 2 }}>
                  <Typography sx={{ fontSize: 16}}>{item.Type}</Typography>
                  <Box sx={{ display: "flex", marginTop: 1, marginLeft: -0.5 }}>
                    <Rating
                      sx={{ fontSize: 20 }}
                      name="read-only"
                      value={item.StarRate}
                      readOnly
                    />
                    <Typography sx={{ fontSize: 15, marginLeft: 1 }}>
                      {item.StarRating}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "black", fontSize: 20 }}>
                    ${item.Price}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    
    </Slider>
    {eyeobject.map((item) => (
          <BasicModal key={item.id} item={item} />
 ))}
    </Box>
  );
};

export default HorizontalCarousel;
