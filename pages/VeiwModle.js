import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Details } from '../components/DeatailPage/DetailPageData';
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useState } from "react";
import { 
  Checkbox,
  IconButton,
  Link,
  Rating,} from "@mui/material";
import { useContext } from 'react';
import { Context } from './_app';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({item}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);


  const { datafav, handleFavoriteClick,  handleCardClick} = useContext(Context);




  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {/* {Details.map((item) => ( */}
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
                    <Typography sx={{ fontSize: 28 }}>{item.Type}</Typography>
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
                      marginTop: 2.8,
                      gap: 2,
                    }}
                  >
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
                      onClick={(event) => handleCardClick(item, event)}
                    >
                      Add to Card
                    </Button>
                    <Checkbox
                  onClick={(event) => handleFavoriteClick(item, event)}
                  checked={datafav.some((favItem) => favItem.id === item.id)}
                  icon={<FavoriteBorderOutlined sx={{ fontSize: 24 }} />}
                  checkedIcon={<Favorite sx={{ color: "black", fontSize: 24 }} />}
                />
                  </Box>
                </Box>
              </Box>
            {/* ))}  */}
        </Box>
      </Modal>
    </div>
  );
}