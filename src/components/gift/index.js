import React from 'react'
import { motion } from "framer-motion";
import "./index.css"
const Gift = ({imgPath, yMove, xMove, scale, width, setOpenBox}) => {
  return (
    <motion.div onClick={()=>setOpenBox(true)} className='gift-box' animate={{y:yMove, x:xMove, scale: scale}} initial={{scale:1}} transition={{ type:"spring", bounce: 1 , duration: 2}}>
    <img
        src={imgPath}
        alt=""
        width={200}
        height={200}
        />
  </motion.div>
  )
}

export default Gift