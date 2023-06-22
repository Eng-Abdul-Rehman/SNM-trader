import { Box, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from "next/link";

function ThankYouPage () {
    return(
        <>
        <Box sx={{ width: "90%", margin: "auto", display: "flex", justifyContent: "center", height: "90vh"}}>
            <Link href="/">
            <KeyboardBackspaceIcon sx={{position: "absolute", top: 10, fontSize: {lg:70, md: 60, sm: 50, xs: 40}, left: 40, color: "black"}} />
            </Link>
            <Typography sx={{position: "relative",fontSize:{lg:80, md: 70, sm: 60, xs: 30}, fontWeight: "bold",marginTop: {lg:46, md: 40, sm: 30, xs: 20}}}>Thank You!</Typography>
        </Box>
        </>
    )
}

export default ThankYouPage;