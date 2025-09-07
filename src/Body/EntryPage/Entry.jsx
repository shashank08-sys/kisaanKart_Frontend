import React, { useState, useEffect } from "react";
import "./Entry.css"; // Import the CSS file for styling
import Crops from "../../Crops/Crops";


import crop1 from "../../assets/pics/crop1.jpg";
import crop2 from "../../assets/pics/crop2.jpg";
import crop3 from "../../assets/pics/crop3.jpg";
import crop4 from "../../assets/pics/crop4.jpg";


export default function Entry() {

   const images = [crop1, crop2, crop3, crop4];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // change image every 3 sec

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <>
    <div className="entry-main-div">
    <div className="crops-section" style={{ textAlign: "center" }}>
      <img
        src={images[currentIndex]}
        alt="Crop"
        style={{ margin : "10px" ,width: "800px", height: "400px", objectFit: "cover" }}
      />
    </div>
    <div className="description-section">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Straight from the Farms.</h1>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        Time to think about the food you eat.
      </p>
    </div>
    </div>
    <div className="crops-cards">
     <Crops/>
    </div>
   
    </>
  );
}
