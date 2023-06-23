import { ArrowBack } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Footer from "@/components/Footer";


const About = () => {
    return (
        <>
        <Link href={"/"}>
          <ArrowBack sx={{fontSize: 30, margin: 2, color: "black"}} />
        </Link>
            <Box sx={{width: {md:"60%", sm: "80%", xs: "98%"}, margin: "auto"}}>
                <Box sx={{width: {md:"70%", sm: "86%", xs: "100%"}, margin: "auto"}}>
                <Typography sx={{fontSize: 30, fontWeight: "bold", color: "black"}}>Welcome to Yahia-llc</Typography>
                <Typography sx={{marginTop: 10, fontSize: 36, fontWeight: "bold", color: "black"}}>
                We connect millions of buyers and sellers around the world, empowering people & creating economic opportunity for all
                </Typography>
                <Typography sx={{marginTop: 8, fontSize: 20, color: "#6e6e6e"}}>
                Within our markets, millions of people around the world connect, both online and offline, to make, sell and buy unique goods. We also offer a wide range of Seller Services and tools that help creative entrepreneurs start, manage and scale their businesses. Our mission is to reimagine commerce in ways that build a more fulfilling and lasting world, and we’re committed to using the power of business to strengthen communities and empower people.
                </Typography>
                <Typography sx={{marginTop: 3, fontSize: 20, fontWeight: "bold", color: "black"}}>
                Yahia-llc.com
                </Typography>
                </Box>
                <Box sx={{borderTop: "1px solid #b8b8b8", marginTop: 10,paddingX: 5, paddingY: 8}}>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Grid container lg={12} md={12} sm={12} xs={8} gap={5} textAlign={"center"} justifyContent={"center"}>
                        <Box sx={{ textAlign: "center", width: 230}}>
                            <InboxOutlinedIcon sx={{fontSize: 90, color: "#fcb900"}} />
                            <Typography sx={{fontSize: 40, fontWeight: "bold", color: "black"}}>10M</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e"}}>Products for Sale</Typography>
                        </Box>
                       
                        <Box sx={{ textAlign: "center", width: 230}}>
                            <StorefrontOutlinedIcon sx={{fontSize: 90, color: "#fcb900"}} />
                            <Typography sx={{fontSize: 40, fontWeight: "bold", color: "black"}}>1.2M</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e"}}>Sellers Active on Martfury</Typography>
                        </Box>

                        <Box sx={{ textAlign: "center", width: 230}}>
                            <ShoppingBagOutlinedIcon sx={{fontSize: 90, color: "#fcb900"}} />
                            <Typography sx={{fontSize: 40, fontWeight: "bold", color: "black"}}>20.6M</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e"}}>Buyers Activie on Martfury</Typography>
                        </Box>

                        <Box sx={{ textAlign: "center", width: 230}}>
                            <AttachMoneyIcon sx={{fontSize: 90, color: "#fcb900"}} />
                            <Typography sx={{fontSize: 40, fontWeight: "bold", color: "black"}}>$2.24M</Typography>
                            <Typography sx={{fontSize: 15, color: "#6e6e6e"}}>Annual gross merchandise sales</Typography>
                        </Box>
                        
                
                </Grid>
                </Box>
                </Box>
            </Box>
<link
  rel="stylesheet"
  id="bootstrap-css"
  href="css/bootstrap.min.css"
  type="text/css"
  media="all"
/>
<link
  rel="stylesheet"
  id="martfury-css"
  href="css/style.css"
  type="text/css"
  media="all"
/>
<Box sx={{marginTop: 10}}>
<Footer />
</Box>
        </>
    )
}

export default About;