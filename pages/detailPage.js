import Footer from "@/components/Footer";
import { DetailsPage } from "../components/DeatailPage/DetailPage";
import { Box } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

const DetailData = () => {
  const history = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('Please fill in all the fields');
    } else {
      // Perform your login authentication logic here
      // For demonstration purposes, let's assume successful login
      // Redirect to the other page
      setErrorMessage('');
      history.push('/');
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handleNameChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };
  
  return (
  <>
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
  <DetailsPage />
  <Box sx={{marginTop: 10}}>
  <Footer />
  </Box>
  </>
  );
};
export default DetailData;
