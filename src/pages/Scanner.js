import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { MdArrowBack, MdOutlineFlashOff } from "react-icons/md";

import "./scanner.css";

const QRScanner = () => {
  const [data, setdata] = useState();

  const handleScanned = (result) => {
    console.log(result);
  };

  return (
    <div className="container">
      <div className="scan-header">
        <MdArrowBack size={25} color="#fff" />
        <h3>Scan QR code</h3>
        <MdOutlineFlashOff
          style={{ marginLeft: "auto" }}
          size={25}
          color="#fff"
        />
      </div>
      <QrReader
        scanDelay={100}
        constraints={{facingMode: "environment"  }}
          onError={(err) => console.log(err)}
          onScan={(data) => window.alert("Scan Successful")}
          // chooseDeviceId={()=>selected}
          containerStyle={{ width: "100%", heigth: "200px" }}
          videoContainerStyle={{ width: "100%", heigth: "200px", border: "1px solid red" }}
          videoStyle={{ width: "100%", heigth: "100px", border: "1px solid red" }}
          onResult={(result, error) => {
          if (!!result) {
            handleScanned(result);
            window.alert("Scan Successful", result);
          }

          if (!!error) {
            console.info("failed");
          }
        }}
      />
    </div>
  );
};

export default QRScanner;
