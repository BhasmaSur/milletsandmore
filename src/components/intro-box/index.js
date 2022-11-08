import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import MovingBoxImage from "../moving-box";
import "./index.css";
const HomeIntro = () => {
  return (
    <>
      <Grid container mt={5}>
        <Grid mt={10} xs={12} sm={9} item>
          <Typography align="center" variant="h6">
            Welcome to
          </Typography>
          <Typography align="center" variant="h3">
            Millets And More
          </Typography>
        </Grid>
        <Grid xs={12} sm={3} item>
        </Grid>
        <Grid pt={10} item xs={12} sm={9} display={"flex"} flexDirection={"column"} justifyContent={"right"} alignItems={'flex-end'}>
          <MovingBoxImage
            imgPath={"/moving-images/mangocookie.jpeg"}
            yMove={[0, 548, 150]}
            xMove={[0, -30, -800]}
            delay={0}
            duration={2}
            scale={[0,2.5]}
            content={"Cookies"}
          />
          <MovingBoxImage
            imgPath={"/moving-images/chocodip.jpeg"}
            yMove={[0, 448, 50]}
            xMove={[0, -30, -500]}
            delay={1}
            duration={2.5}
            scale={[0,2.5]}
            content={"Cakes"}
          />
         <MovingBoxImage
            imgPath={"/moving-images/cookies.jpeg"}
            yMove={[0, 348, -50]}
            xMove={[0, -30, -200]}
            delay={2}
            duration={3}
            scale={[0,2.5]}
            content={"Brownies"}
          />
          {/* <MovingBoxImage
            imgPath={"/moving-images/mangocookie.jpeg"}
            yMove={[0,548, -280]}
            xMove={[0, -30, -450]}
            delay={3}
            duration={4}
            scale={[0,1]}
          />
          <MovingBoxImage
            imgPath={"/moving-images/mangocookie.jpeg"}
            yMove={[0, 548, -440]}
            xMove={[0, -30, -300]}
            delay={4}
            duration={4}
            scale={[0,1]}
          />
          
          <MovingBoxImage
            imgPath={"/moving-images/mangocookie.jpeg"}
            yMove={[0, 548, -430]}
            xMove={[0, -30, -300]}
            delay={5}
            duration={4}
            scale={[0,1]}
          />
          <MovingBoxImage
            imgPath={"/moving-images/mangocookie.jpeg"}
            yMove={[0, 548, -420]}
            xMove={[0, -30, -300]}
            delay={6}
            duration={4}
            scale={[0,1]}
          /> */}
        </Grid>
        <Grid item sm={3}>
          <img src="/moving-images/sarika.png" alt="" width={"60%"} />
          <Divider />
        </Grid>
      </Grid>
      
    </>
  );
};

export default HomeIntro;
