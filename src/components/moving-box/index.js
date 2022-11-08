import React,{useState} from "react";
import { motion } from "framer-motion";
import "./index.css";
import { Typography } from "@mui/material";
const MovingBoxImage = ({imgPath, xMove, yMove, delay, duration, scale, content}) => {
  const [hovered, setHovered] = useState(false)
  return (
      <motion.div onHoverEnd={()=>setHovered(false)} onHoverStart={()=>setHovered(true)} className="img-box" animate={{y:yMove, x:xMove, scale: scale}} initial={{scale:0}} transition={{delay:delay, duration: duration}}>
        <img
            className="img-box-border"
            src={imgPath}
            alt=""
            width={100}
            height={100}

            />
        { hovered && <Typography align="center" variant="h6">
            {content}
          </Typography>}
      </motion.div>
  );
};

export default MovingBoxImage;
