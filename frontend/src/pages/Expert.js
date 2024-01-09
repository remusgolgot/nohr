import { Box, Container, Typography, Button } from "@mui/material";
import bgImage from "../assets/main/freelancer.jpeg";

const Expert = () => {

    return (
        <Container
        maxWidth="false"
        disableGutters
        sx={{
          p: {
            xs: 2,
            sm: 5,
            md: 2,
          },
          background: `url(${bgImage}) center center/cover`,
          minHeight: "800px",
          marginTop: "16.5px",
          borderRadius: {
            xs: "0px 0px 27px 27px",
            md: "0px 0px 54px 54px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
           
        
          {/* <MainButton text="Discover on 3D Globe" iconImg={btnGlobalIcon} /> */}
          {/* <SearchNav /> */}
        </Box>
      </Container>
    );
  };


export default Expert

