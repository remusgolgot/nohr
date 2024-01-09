import { Box, Container, Typography, Button } from "@mui/material";
import bgImage from "../assets/main/freelancer.jpeg";

const Home = () => {

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
           <Button variant="contained" onClick={() => { alert('booyah'); }}>FIND JOBS</Button>
           <Typography
            sx={{
              color: "red",
              marginTop: "10px",
              textAlign: "center",
              fontWeight: "600",
              fontSize: {
                xs: "38px",
                md: "48px",
              },
              lineHeight: "62px",
              mb: 4,
            }}
          >
            Discover the coolest opportunities jobs
          </Typography>
          {/* <MainButton text="Discover on 3D Globe" iconImg={btnGlobalIcon} /> */}
          {/* <SearchNav /> */}
        </Box>
      </Container>
    );
  };


export default Home