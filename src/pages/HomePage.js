import React, { useState, useEffect } from "react";

import handleGetLocation from "../service/geoLocation";
import sendNotification, { showNotification } from "../service/notification";
import handleVibrate from "../service/vibrate";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [isLoactionLoaded, setisLoactionLoaded] = useState();
  const [otp, setOTP] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          setOTP(otp.code);
          ac.abort();
        })
        .catch((err) => {
          ac.abort();
          console.log(err);
        });
    }
  }, []);

  const handleNotification = () => {
    //from browser
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        sendNotification(
          "Did you make a $1,000,000 purchase at Dr. Evil..",
          "Test Notification"
        );
      }
    });
    // from PWA
    showNotification("Test Notification");
  };

  const accessCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });
      const videoTracks = stream.getVideoTracks();
      const track = videoTracks[0];
      alert(`Getting video from: ${track.label}`);
      document.getElementById("video").srcObject = stream;
    } catch (error) {
      alert(`${error.name}`);
      console.error(error);
    }
  };

  return (
    // <div className="App">
    //   <h2>React - PWA</h2>
    //   <button className="btn" onClick={handleNotification}>
    //     Send Custom notification (PWA)
    //   </button>
    //   <button
    //     className="btn"
    //     onClick={() => handleGetLocation(setisLoactionLoaded)}
    //   >
    //     Get Location
    //   </button>
    //   {isLoactionLoaded ? (
    //     <p>
    //       Your current location is (Latitude: {isLoactionLoaded.coords.latitude}{" "}
    //       , Longitude: {isLoactionLoaded.coords.longitude} )
    //     </p>
    //   ) : null}

    //   <button disabled className="btn" onClick={handleVibrate}>
    //     Reading Otp ( only in chrome android )
    //   </button>
    //   <button className="btn" onClick={handleVibrate}>
    //     Vibrate (only Mobile)
    //   </button>
    //   <button onClick={() => navigate("/stream")} className="btn">
    //     Stream (Record)
    //   </button>
    //   <label htmlFor="input-file">
    //     <button className="btn">Storage</button>
    //     <input id="input-file" type="file" />
    //   </label>
    //   <button className="btn" style={{ backgroundColor: "gray" }}>
    //     Plateform = {navigator.platform}{" "}
    //   </button>
    //   <button onClick={() => navigate("/scanner")} className="btn">
    //     Scan QR
    //   </button>
    // </div>
    <div className="" style={{ background: "white" }}>
      <marquee scrollamount="30">
        <h1 className="fw-bolder" style={{ color: "rgb(61, 87, 253)" }}>
          IR Unreserved Ticketing
        </h1>
      </marquee>

      <div className="container fw-bolder">
        <div className="shadow bg-body rounded-2">
          <div
            className="p-3"
            style={{
              background: "#B8C3B0",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            }}
          >
            <div className="fs-3 text-uppercase">Happy Journey</div>
            <div className="border-bottom py-1"></div>

            <div className="d-flex justify-content-between py-1">
              <div>&nbsp;</div>
              <div className="text-uppercase">JOURNEY</div>
              <div>06/02/2025</div>
            </div>
            <div className="d-flex justify-content-between py-1">
              <div>$5.00/-</div>
              <div>9167390024</div>
            </div>
            <div className="d-flex justify-content-between py-1">
              <div className="text-uppercase">UTS No: X06YE030DF</div>
            </div>

            <div className="border-bottom py-1"></div>

            <div className="d-flex align-items-center">
              {/* "border-radius:50%; border:solid black 1px;padding:5px" */}
              <div
                style={{
                  borderRadius: "50%",
                  background: "#961295",
                  color: "white",
                  width: "1.5vw",
                  textAlign: "center",
                }}
              >
                S
              </div>
              <div className="ps-2 pt-2">
                <div>अंबरनाथ</div>
                <div className="text-uppercase">Ambernath</div>
                <div>अंबरनाथ</div>
              </div>
            </div>
            <div className="d-flex align-items-center pt-3">
              <div
                style={{
                  borderRadius: "50%",
                  background: "#961295",
                  color: "white",
                  width: "1.5vw",
                  textAlign: "center",
                }}
              >
                D
              </div>{" "}
              <div className="ps-2">
                <div>कल्याण जं.</div>
                <div className="text-uppercase">KALAN JN.</div>
                <div>कल्यान ज.</div>
              </div>
            </div>
            <div className="d-flex align-items-center pt-3">
              <div>Adult: 1</div>
              <div className="ms-4">Child: 0</div>
            </div>
            <div className="d-flex justify-content-between align-items-center pt-3">
              <div className="d-flex align-items-center">
                <div className="fw-light">CLASS:</div>
                <div className="ms-2">
                  <div>द्वितीय</div>
                  <div>SECOND</div>
                  <div>द्वि श्रे</div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-light">TRAIN TYPE:</div>
                <div className="ms-2">
                  <div>साधारण</div>
                  <div>ORDINARY</div>
                  <div>साधारण</div>
                </div>
              </div>
            </div>
            <div className="border-bottom py-1 mb-1"></div>
            <div className="d-flex align-items-center">
              <div
                style={{
                  borderRadius: "50%",
                  background: "#961295",
                  color: "white",
                  width: "1.5vw",
                  textAlign: "center",
                }}
                className=""
              >
                via
              </div>
              <div className="ms-2 fw-light">-------</div>
            </div>

            <div className="border-bottom py-1"></div>

            <div className="d-flex align-items-center py-1">
              <div className="d-flex align-items-center">
                <div className="fw-light">TRAIN TYPE:</div>
                <div>996411</div>
              </div>
              <div className="d-flex align-items-center ms-4">
                <div className="fw-light">IR:</div>
                <div>27AAAGMO289C2ZI</div>
              </div>
            </div>
            <div className="d-flex align-items-center py-1">
              <div className="d-flex align-items-center">
                <div className="fw-light">
                  Journey Should Commence within 1 hour
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-1">
              <div>R17159</div>
              <div className="fw-light">Distance: 7 km</div>
            </div>
            <div className="d-flex align-items-center py-1">
              <div>Booking Time:</div>
              <div className="fw-light">06/02/2025 19:17</div>
            </div>
          </div>
          <div className="px-5 pb-4 pt-2">
            <div className="fw-light text-primary">
              It is recommended not to perform factory reset or change you
              handset whenever you are having valid ticket in the mobile.
            </div>
            <div
              className="fw-light text-decoration-underline"
              style={{ color: "rgb(254, 108, 75)" }}
            >
              Click for Changing Handset with Valid Ticket
            </div>
            <div style={{ color: "rgb(254, 59, 59)" }}>
              FOR MEDICAL EMERGENCY I FIRST AID. CONTACT TICKET
            </div>
            <div className="text-center" style={{ color: "rgb(254, 59, 59)" }}>
              CHECKING STAFFIGUARD OR DIAL 139
            </div>
            <button
              style={{
                borderRadius: "2rem",
                background: "#FE6D49",
                border: "0px",
                color: "white",
                fontSize: "1.2rem",
              }}
              class="w-100 py-2 my-2"
            >
              OPEN OR CODE
            </button>
            <button
              style={{
                borderRadius: "2rem",
                background: "#FE6D49",
                border: "0px",
                color: "white",
                fontSize: "1.2rem",
              }}
              class="w-100 py-2 my-2"
            >
              NEXT TRAINS TO KALYAN JN.
            </button>
            <button
              style={{
                borderRadius: "2rem",
                background: "#FE6D49",
                border: "0px",
                color: "white",
                fontSize: "1.2rem",
              }}
              class="w-100 py-2 my-2"
            >
              OK
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        Centre for Railway Information Systems (CRIS)
      </div>
    </div>
  );
};

export default HomePage;
