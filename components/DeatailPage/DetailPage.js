import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import { Details } from "./DetailPageData";
import { useState } from "react";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import LanguageIcon from "@mui/icons-material/Language";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
// import facebook from "./../../images/FaceBook2.png";
// import GooglePlus from "./../../images/GooglePlus.jpg";
// import Twitter from "./../../images/Twiter.png";
// import Pinterest from "./../../images/Pinterest.png";
// import iphone6 from "./../../images/iphone6+Sali.png";
import { FrequentlyComponent } from "./Frequently Bought/FrequentlyComponent";
import { Spacification } from './Spacifications/Spacifiaction';
// import { HorizontalCarousel } from '../MainCruosel';

export function DetailsPage() {
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <Box>
       
        <Box
          sx={{
            paddingTop: 10,
            width: "91%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginY: 4, width: "80%" }}>
            {Details.map((item) => (
              <Box sx={{ display: "flex", gap: 3 }}>
                <img
                  height="100%"
                  width="50%"
                  src={item.Image}
                  alt="image of product"
                />
                <Box sx={{ width: "70%", padding: 1 }}>
                  <Box
                    sx={{ borderBottom: "1px solid #abb8c3", paddingBottom: 1 }}
                  >
                    <Typography sx={{ fontSize: 28 }}>{item.Title}</Typography>
                    <Box sx={{ display: "flex", marginTop: 0.8 }}>
                      <Typography sx={{ color: "#666" }}>Brand: </Typography>
                      <Typography
                        sx={{
                          color: "#0066cc",
                          paddingLeft: 0.8,
                          ":hover": { color: "#fcb900" },
                        }}
                      >
                        {item.Brand}
                      </Typography>
                      <Box
                        sx={{
                          width: "1px",
                          height: 12,
                          backgroundColor: "#abb8c3",
                          marginX: 1.6,
                          marginY: 0.6,
                        }}
                      />
                      <Rating
                        sx={{ fontSize: 16, marginY: 0.4 }}
                        name="read-only"
                        value={item.StarRate}
                        readOnly
                      />
                      <Typography
                        sx={{ fontSize: 14, marginLeft: 1, color: "#666" }}
                      >
                        {item.Reviews}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ borderBottom: "1px solid #abb8c3", paddingBottom: 3 }}
                  >
                    <Typography
                      sx={{
                        fontSize: 30,
                        fontWeight: "bold",
                        paddingTop: 1.4,
                        paddingBottom: 0.6,
                      }}
                    >
                      ${item.Price}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Typography sx={{ fontSize: 14 }}>Status:</Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          color: "#8bc500",
                          fontWeight: "bold",
                        }}
                      >
                        {item.InStockORnot}
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: 2 }}>
                      <Box sx={{ display: "flex", textAlign: "baseline" }}>
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine1}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "baseline",
                          marginTop: 0.8,
                        }}
                      >
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine2}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "baseline",
                          marginTop: 0.8,
                        }}
                      >
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine3}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "baseline",
                          marginTop: 0.8,
                        }}
                      >
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine4}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: "baseline",
                          marginTop: 0.8,
                        }}
                      >
                        <Box
                          style={{
                            fontSize: 30,
                            margin: 0,
                            backgroundColor: "#abb8c3",
                            padding: 0,
                            marginTop: 6,
                            width: 8,
                            height: 8,
                            borderRadius: 15,
                          }}
                        ></Box>
                        <Typography
                          style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "#666",
                          }}
                        >
                          {item.TypeLine5}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginY: 2.8,
                      gap: 2,
                      borderBottom: "1px solid #abb8c3",
                      paddingBottom: 5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        border: "1px solid black",
                        padding: 0,
                        borderRadius: 0,
                        width: 120,
                        height: 40,
                      }}
                    >
                      <IconButton onClick={decreaseCount}>
                        <RemoveOutlinedIcon sx={{ color: "#abb8c3" }} />
                      </IconButton>
                      <Typography>{count}</Typography>
                      <IconButton onClick={increaseCount}>
                        <AddOutlinedIcon sx={{ color: "#abb8c3" }} />
                      </IconButton>
                    </Box>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        backgroundColor: "#fcb800",
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                        width: "200px",
                        height: "55px",
                        border: "none",
                        borderRadius: 1,
                        ":hover": {
                          textTransform: "capitalize",
                          backgroundColor: "#fcb800",
                        },
                      }}
                    >
                      Add to Card
                    </Button>
                    <Checkbox
                      icon={
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
                      }
                      checkedIcon={
                        <FavoriteOutlinedIcon
                          sx={{ color: "black", fontSize: 30 }}
                        />
                      }
                    />
                    <IconButton sx={{ marginLeft: -2 }}>
                      <InsertChartOutlinedTwoToneIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography fontSize={14}>SKU: </Typography>
                    <Typography color={"#abb8c3"} marginLeft={1} fontSize={14}>
                      AB123456786
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography fontSize={14}>Categories: </Typography>
                    <Typography
                      sx={{
                        color: "#8ed1fc",
                        marginLeft: 1,
                        fontSize: 14,
                        ":hover": { color: "black" },
                      }}
                    >
                      Computers & Technologies
                    </Typography>
                    <Typography
                      sx={{
                        color: "#abb8c3",
                        marginLeft: 1,
                        fontSize: 14,
                        ":hover": { color: "black" },
                      }}
                    >
                      ,
                    </Typography>
                    <Typography
                      sx={{
                        color: "#8ed1fc",
                        marginLeft: 1,
                        fontSize: 14,
                        ":hover": { color: "black" },
                      }}
                    >
                      {" "}
                      Headphone
                    </Typography>
                    <Typography
                      sx={{
                        color: "#abb8c3",
                        marginLeft: 1,
                        fontSize: 14,
                        ":hover": { color: "black" },
                      }}
                    >
                      ,
                    </Typography>
                    <Typography
                      sx={{
                        color: "#8ed1fc",
                        marginLeft: 1,
                        fontSize: 14,
                        ":hover": { color: "black" },
                      }}
                    >
                      Jewelry & Watches
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography fontSize={14}>Tags: </Typography>
                    <Typography
                      sx={{
                        color: "#abb8c3",
                        marginLeft: 1,
                        fontSize: 14,
                        ":hover": { color: "black" },
                      }}
                    >
                      earphone
                    </Typography>
                    <Typography
                      sx={{
                        color: "#abb8c3",
                        marginLeft: 1,
                        fontSize: 14,
                        ":hover": { color: "black" },
                      }}
                    >
                      ,
                    </Typography>
                    <Typography
                      sx={{
                        color: "#abb8c3",
                        marginLeft: 1,
                        fontSize: 14,
                        ":hover": { color: "black" },
                      }}
                    >
                      technologies
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: 2, marginTop: 2, padding: 0.2 }}
                  >
                    {/* <img
                      width="40px"
                      height="36px"
                      // src={facebook}
                      alt="image of contacts"
                    />
                    <img
                      width="40px"
                      height="40px"
                      src={Twitter}
                      alt="image of contacts"
                    />
                    <img
                      width="40px"
                      height="40px"
                      src={GooglePlus}
                      alt="image of contacts"
                    />
                    <img
                      width="40px"
                      height="40px"
                      src={Pinterest}
                      alt="image of contacts"
                    /> */}
                  </Box>
                </Box>
              </Box>
            ))}
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "40%" }}
            >
              <Typography sx={{ color: "#666", fontSize: 14 }}>
                Roll over image to zoom in
              </Typography>
            </Box>
            <FrequentlyComponent />
            <Spacification />
          </Box>
          <Box sx={{ width: "16%", marginTop: 5 }}>
            <Box
              sx={{ backgroundColor: "#e8e8e8", padding: 3, height: "200px" }}
            >
              <Box sx={{ display: "flex", gap: 2.2 }}>
                <LanguageIcon sx={{ fontSize: 30 }} />
                <Typography sx={{ fontSize: 15, paddingTop: 0.5 }}>
                  Shipping worldwide
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2.2, marginTop: 1 }}>
                <UnarchiveOutlinedIcon sx={{ marginTop: 1, fontSize: 30 }} />
                <Typography sx={{ fontSize: 15, paddingTop: 0.5 }}>
                  Free 7-day return if eligible, so easy
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2.2, marginTop: 1 }}>
                <ArticleOutlinedIcon sx={{ marginTop: 1, fontSize: 30 }} />
                <Typography sx={{ fontSize: 15, paddingTop: 0.5 }}>
                  Supplier give bills for this product.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2.2, marginTop: 1 }}>
                <CreditCardOutlinedIcon sx={{ marginTop: 1, fontSize: 30 }} />
                <Typography sx={{ fontSize: 15, paddingTop: 0.5 }}>
                  Pay online or when receiving goods
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ paddingY: 4, display: "flex", justifyContent: "center" }}
            >
              <StorefrontOutlinedIcon sx={{ fontSize: 16 }} />
              <Typography sx={{ fontSize: 13, marginLeft: 1 }}>
                Sell on Martfury?
              </Typography>
              <Typography
                sx={{
                  fontSize: 13,
                  marginLeft: 1,
                  color: "#0066cc",
                  ":hover": { color: "#fcb900" },
                }}
              >
                Register Now!
              </Typography>
            </Box>
            <Box>
              {/* <img
                height="160px"
                width="100%"
                src={iphone6}
                alt="placeholder"
              /> */}
            </Box>
          </Box>
        </Box>
        {/* <HorizontalCarousel /> */}
      </Box>
    </>
  );
}
