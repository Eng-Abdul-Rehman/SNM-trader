import { Box } from "@mui/material";
import { AddToCard } from "../components/AddToCard";
import Footer from "@/components/Footer";

const Card = () => {
  return (
    <>
  <AddToCard />
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
<Box sx={{marginTop: 40}}>
<Footer />
</Box>
</>
  )
  ;
};
export default Card;
