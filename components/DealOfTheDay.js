import React, { useContext, useEffect, useMemo, useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import { Box, IconButton, Rating, Typography, Grid, Checkbox } from "@mui/material";
import { Electronics } from "./Data/ConsumerElectronicsdata";
import BasicModal from "@/pages/VeiwModle";
import { Favorite } from "@mui/icons-material";
import { Context } from "@/pages/_app";
import DoneIcon from '@mui/icons-material/Done';
import { Link } from "react-router-dom";

const DealOfTheDay = ({favCount, shopCount}) => {
  const {handleFavoriteClick, datafav,handleCardClick, dataCard, CardData} = useContext(Context)

  // const [dataShoping, setdataShoping] = useState([]);
  // useMemo(()=>{
  //   shopCount(dataShoping?.length)
  // },[dataShoping])
  // const handleShopingClick = (item) => { ``
  //   const isItemChecked = dataShoping.some((favItem) => favItem.id === item.id);
  //   if (!isItemChecked) {
  //     setdataShoping((prevDatafav) => [...prevDatafav, item]);
  //   } else {
  //     setdataShoping((prevDatafav) => prevDatafav.filter((favItem) => favItem.id !== item.id));
  //   }
  // };



  useMemo(() => {
    const combinedLength = CardData.length + dataCard.length;
    shopCount(combinedLength);
  }, [CardData, dataCard]);

  // const [datafav, setdatafav] = useState([]);
  useMemo(()=>{
    favCount(datafav?.length)
  },[datafav])
  // const handleFavoriteClick = (item) => { ``
  //   const isItemChecked = datafav.some((favItem) => favItem.id === item.id);
  //   if (!isItemChecked) {
  //     setdatafav((prevDatafav) => [...prevDatafav, item]);
  //   } else {
  //     setdatafav((prevDatafav) => prevDatafav.filter((favItem) => favItem.id !== item.id));
  //   }
  // };


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


  const [eyeobject, seteyeobject] = useState([]);

  const handleeye = (item) => {
    seteyeobject((prevEyeObjects) => [...prevEyeObjects, item]);
  };





  const [time, setTime] = useState("24:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        // Split the time into hours, minutes, and seconds
        const [hours, minutes, seconds] = prevTime.split(":").map(Number);

        // Calculate the total number of seconds
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        // Decrease the total seconds by 1
        totalSeconds--;

        if (totalSeconds < 0) {
          // Time is complete, remove the box or perform any other action
          clearInterval(interval);
          return prevTime;
        }

        // Calculate the new hours, minutes, and seconds
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;

        // Format the new time
        return `${newHours} : ${String(newMinutes).padStart(2, "0")} : ${String(
          newSeconds
        ).padStart(2, "0")}`;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      {/* <Box>
      <FaveroteItems data={datafav} />
      </Box> */}
      <div
        className="mf-product-deals-day woocommerce  type-carousel style-1 product-type-sale mf-products-carousel"
        id="deals-of-day645c8202c33af"
      >
        <div className="cat-header">
          <div className="header-content">
            {" "}
            <h2 className="cat-title">Deals of the day</h2>{" "}
            <div className="header-countdown">
              <span className="ends-text">Ends in : {time}</span>
              <div className="martfury-countdown" data-expire={65406} />
            </div>{" "}
          </div>{" "}
          
        </div>
        <Grid container>
        {Electronics.map((item, index) => (
          <Grid container lg={2.3} md={4} sm={6} xs={9} spacing={2} >
        <Box sx={{ display: "flex", gap: 2,  marginTop: 3, margin: "auto", justifyContent: "center" }}>
          <Box
            onMouseEnter={() => handleMouse2Leave(index)}
            onMouseLeave={handleMouse2Enter}
            sx={{ width: {md:190, xs: 170} }}
          >
            <Box
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                position: "relative",
                width: {md:250, xs: 250},
                paddingX: 1,
                ":hover": { border: "1px solid black" },
                paddingTop: 2,
              }}
            >
                 <Box sx={{height: 240}}>
                <img width={"98%"} height={"100%"} src={item.Image} alt="image of products" />
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
                      paddingLeft: {lg: 6, md: 5.5, sm: 1, xs: 2},
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
                          checkedIcon={<DoneIcon sx={{ color: "black", fontSize: 24 }} />}
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
                  icon={<FavoriteBorderOutlinedIcon sx={{ fontSize: 24 }} />}
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
                        value={5}
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
                      value={5}
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
        </Grid>
      ))}
</Grid>
{eyeobject.map((item) => (
          <BasicModal key={item.id} item={item} />
 ))}
      </div>
    </div>
  );
};

export default DealOfTheDay;
