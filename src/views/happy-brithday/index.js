import React, { useState } from "react";
import Gift from "../../components/gift";
import BdaySign from "../../components/happy-birthday-sign";
import "./index.css";
import useMediaQuery from '@mui/material/useMediaQuery';
const HappyBirthday = () => {
    const matches = useMediaQuery('(max-width:600px)');
  const [openBox, setOpenBox] = useState(false);
  return (
    <div>
      <div className="bday-box">
        {!openBox && (
          <Gift
            setOpenBox={setOpenBox}
            imgPath={"/gift-images/giftclose.png"}
            yMove={[0, matches ? 350 : 500]}
            xMove={[0, 0]}
            scale={1}
            width={250}
          />
        )}
        {openBox && <BdaySign />}
        {openBox && (
          <Gift
            setOpenBox={setOpenBox}
            imgPath={"/gift-images/opengift.jpeg"}
            yMove={[matches ? 200 : 350, 100]}
            xMove={[0, 0]}
            scale={1}
            width={250}
          />
        )}
      </div>
    </div>
  );
};

export default HappyBirthday;
