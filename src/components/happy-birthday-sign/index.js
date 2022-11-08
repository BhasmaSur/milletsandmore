import React from "react";
import { motion } from "framer-motion";
import "./index.css"
import { Button, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";

const BdaySign = () => {
  const matches = useMediaQuery('(max-width:600px)');
  let navigate = useNavigate();
  const redirectToMilletsAndMore = () =>{
    // window.location.href = 'https://manokalp.co';
    navigate("/")
  }
  return (
    <motion.div
      className="gift-box"
      animate={{ y: [matches ? 150 : 200, matches ? 80 : 50], x: [0,0], scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ type: "spring", bounce: 1, duration: 2 }}
    >
      <Typography align="center" variant={matches ? "h6" : "h4"}>
        Happy Birthday
      </Typography>
      <Typography align="center" variant={matches ? "h3" : "h2"}>
        Sarika
      </Typography>
      <Button onClick={()=>redirectToMilletsAndMore()} sx={{marginLeft:"10px"}} variant="contained">
        click for your present
      </Button>
    </motion.div>
  );
};

export default BdaySign;
