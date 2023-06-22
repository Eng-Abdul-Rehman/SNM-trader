import { Box, Button, IconButton, Typography } from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseIcon from '@mui/icons-material/Close';
import { Context } from "@/pages/_app";
import { useContext, useState } from "react";
import Link from "next/link";

export  function AddToCard () {
  const { CardData, dataCard, CardClose, removeItem, CardClosed, setCardClosed, TotalPrice, setTotalPrice,counts, setCounts,counts2, set2Counts} = useContext(Context);

   console.log(CardData,'scc', CardClose)

  const decreaseCount = (index) => {
    if (counts[index] > 1) {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => (i === index ? count - 1 : count))
      );
    }
  };

  const increaseCount = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const calculateTotal = (price, count) => {
    return (price * count).toFixed(2);
  };


  const decreaseCardCount = (index) => {
    if (counts2[index] > 1) {
      set2Counts((prevCounts) =>
        prevCounts.map((count, i) => (i === index ? count - 1 : count))
      );
    }
  };

const increaseCardCount = (index) => {
    set2Counts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const calculateCardTotal = (price, count) => {
    return (price * count).toFixed(2);
  };

 
  const removeItemCard = (index) => {
    setCardClosed((prevCardData) =>
      prevCardData.filter((_, i) => i !== index)
    );
  };






  const calculateOverallTotal = () => {
    let totalPrice = 0;

    // Calculate total price for CardClose
    CardClose.forEach((item, index) => {
      const itemTotal = parseFloat(calculateTotal(item.Price, counts[index]));
      totalPrice += itemTotal;
    });

    // Calculate total price for CardClosed
    CardClosed.forEach((item, index) => {
      const itemTotal = parseFloat(calculateCardTotal(item.Price, counts2[index]));
      totalPrice += itemTotal;
    });

    return totalPrice.toFixed(2);
  };

  const handleButtonClick = () => {
    const TotalPrices = calculateOverallTotal();
    console.log(TotalPrices, "lsdldasl;d;asd;la")
    setTotalPrice(TotalPrices);
  };
    return (
        <>
        <Box sx={{ width: '70%', margin: "auto"}}>
            <Box sx={{textAlign: "center", marginTop: 10}}>
                <Typography sx={{fontSize: 50 , fontWeight: "bold"}}>Cart</Typography>
            </Box>
            <Box sx={{backgroundColor: "#e6e6e6", borderBottom: "1px solid #c4c4c4", paddingY: 1, display: "flex", marginTop: 12}}>
                <Box sx={{width: "50%", textAlign: "center"}}>
                  <Typography  sx={{  fontWeight: "bold"}}>PRODUCT</Typography>
                </Box>
                <Box sx={{width: "30%", textAlign: "end"}}>
               <Typography  sx={{  fontWeight: "bold"}}>	PRICE</Typography>
                </Box>
                <Box sx={{width: "30%", textAlign: "center"}}>
                  <Typography  sx={{  fontWeight: "bold"}}>QUANTITY</Typography>
                </Box>
                <Box sx={{width: "25%", textAlign: "start"}}>
                  <Typography  sx={{  fontWeight: "bold"}}>	TOTAL</Typography>
                </Box>
            </Box>
            {CardClose.map((item, index) => (
                    <Box key={item.id} sx={{width: "100%", display: "flex", marginTop: 3, borderBottom: "1px Solid #c4c4c4"}}>
                     <Box sx={{width: "75%", textAlign: "start", display: "flex" }}>
                        <img width={100} height={120} src={item.Image} alt="image of Projuctfgfgffdfd" />
                        <Typography>{item.Type}</Typography>
                     </Box>
                     <Box sx={{width: "26%", textAlign: "center"}}>
                     <Typography sx={{ fontWeight: "bold", }}>${item.Price}</Typography>
                     </Box>
                        <Box
                      sx={{
                        display: "flex",
                        marginRight: 6,
                        gap: 2,
                        border: "1px solid black",
                        padding: 0,
                        borderRadius: 0,
                        width: "12%",
                        textAlign: "center",
                        height: 40,
                      }}
                    >
                      <IconButton onClick={() => decreaseCount(index)}>
                        <RemoveOutlinedIcon sx={{ color: "#abb8c3" }} />
                      </IconButton>
                      <Typography sx={{paddingTop: 1}}>{counts[index]}</Typography>
                      <IconButton onClick={() => increaseCount(index)}>
                        <AddOutlinedIcon sx={{ color: "#abb8c3" }} />
                      </IconButton>
                    </Box>
                     <Box sx={{width: "24%", textAlign: "start"}}>
                  <Typography  sx={{  fontWeight: "bold"}}>${calculateTotal(item.Price, counts[index])}</Typography>
                </Box>
                <Box sx={{width: "4%", textAlign: "start"}}>
                <IconButton onClick={() => removeItem(index)}>
                  <CloseIcon sx={{fontSize: 26}} />
                  </IconButton>
                </Box>
                    </Box>
                    
                    ))} 
                    {CardClosed.map((item, index) => (
                    <Box key={item.id} sx={{width: "100%", display: "flex", marginTop: 3, borderBottom: "1px Solid #c4c4c4"}}>
                     <Box sx={{width: "75%", textAlign: "start", display: "flex" }}>
                        <img width={100} height={120} src={item.Image} alt="image of Projuct" />
                        <Typography>{item.Type}</Typography>
                     </Box>
                     <Box sx={{width: "26%", textAlign: "center"}}>
                     <Typography sx={{ fontWeight: "bold", }}>${item.Price}</Typography>
                     </Box>
                        <Box
                      sx={{
                        display: "flex",
                        marginRight: 6,
                        gap: 2,
                        border: "1px solid black",
                        padding: 0,
                        borderRadius: 0,
                        width: "12%",
                        textAlign: "center",
                        height: 40,
                      }}
                    >
                      <IconButton onClick={() => decreaseCardCount(index)}>
                        <RemoveOutlinedIcon sx={{ color: "#abb8c3" }} />
                      </IconButton>
                      <Typography sx={{paddingTop: 1}}>{counts2[index]}</Typography>
                      <IconButton onClick={() => increaseCardCount(index)}>
                        <AddOutlinedIcon sx={{ color: "#abb8c3" }} />
                      </IconButton>
                    </Box>
                     <Box sx={{width: "24%", textAlign: "start"}}>
                  <Typography  sx={{  fontWeight: "bold"}}>${calculateCardTotal(item.Price, counts2[index])}</Typography>
                </Box>
                <Box sx={{width: "4%", textAlign: "start"}}>
                <IconButton onClick={() => removeItemCard(index)}>
                  <CloseIcon sx={{fontSize: 26}} />
                  </IconButton>
                </Box>
                    </Box>
                    
                    ))} 
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                      <Link href="/">
            <Button
            
             sx={{
                textTransform: "capitalize",
                backgroundColor: "#fcb800",
                color: "black",
                fontSize: 18,
                fontWeight: "bold",
                width: "180px",
                height: "45px",
                border: "none",
                borderRadius: 1,
                marginY: 2,
                ":hover": {
                  textTransform: "capitalize",
                  backgroundColor: "#fcb800",
                },
              }}><KeyboardBackspaceIcon sx={{paddingRight: 1}} /> Back To Shop</Button>
              </Link>
              <Button
              onClick={handleButtonClick}
                    sx={{
                        textTransform: "capitalize",
                        backgroundColor: "white",
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                        width: "222px",
                        height: "45px",
                        border: "none",
                        borderRadius: 1,
                        border: '1px solid black',
                        marginY: 2,
                        ":hover": {
                          textTransform: "capitalize",
                          backgroundColor: "white",
                        },
                      }}>Total the Price</Button>
              </Box>
              <Box>
                <Box sx={{display: "flex", justifyContent: "space-between", padding: 3, backgroundColor: "#dedede", border: "1px solid #b3b3b3"}}>
                <Typography>Subtotal</Typography>
                <Typography sx={{fontSize: 14}}>{TotalPrice}</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", padding: 3, backgroundColor: "#dedede", border: "1px solid #b3b3b3", borderTop: 0}}>
                <Typography sx={{fontSize: 20, fontWeight: "bold"}}>Total</Typography>
                <Typography sx={{fontSize: 20, fontWeight: "bold", color: "#fa6b3c"}}>{TotalPrice}</Typography>
                </Box>
                <Link href="/CheckOutPage">
                <Button
                    sx={{
                        textTransform: "capitalize",
                        backgroundColor: "#fcb800",
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                        width: "222px",
                        height: "45px",
                        border: "none",
                        borderRadius: 1,
                        marginY: 2,
                        ":hover": {
                          textTransform: "capitalize",
                          backgroundColor: "#fcb800",
                        },
                      }}>Proceed to checkout</Button></Link>
              </Box>
        </Box>
        </> 
    )
}