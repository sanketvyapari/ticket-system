import React, { useState, useEffect } from "react";

import handleGetLocation from "../service/geoLocation";
import sendNotification, { showNotification } from "../service/notification";
import handleVibrate from "../service/vibrate";
import { useNavigate } from "react-router";
import { getCurrentDate } from "../utils";
import { CONFIG } from "./HomePageList";

const STN_DETAIL_CONFG = {
  AMBARNATH: {
    mr: "अंबरनाथ",
    hn: "अंबरनाथ",
  },
  GHATKOPAR: {
    mr: "घाटकोपर",
    hn: "घाटकोपर",
  },
};

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
    <div className="" style={{ background: "white" }}>
      <div className="marquee-container">
        <div className="box">
          <div
            className="d-flex align-items-center mt-2 fw-bolder"
            style={{ color: "rgb(61, 87, 253)" }}
          >
            <marquee
              scrollamount="10"
              loop="infinite"
              behavior="scroll"
              direction="left"
            >
              IR Unreserved Ticketing
            </marquee>
          </div>
        </div>
        <div className="box d-flex">
          <div className="container d-flex align-items-center justify-content-between">
            <img src="cris.png" className="circle-icons ms-2" width={"20vw"} />
            <img src="indian-railway.png" className="irl-icon" width={"20vw"} />
          </div>
        </div>
      </div>

      <div className="container fw-bolder" style={{ fontSize: "0.8rem" }}>
        <div className="shadow bg-body rounded-2">
          <div
            className="px-3 pt-3"
            style={{
              background: localStorage.getItem("color"),
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            }}
          >
            <div className="fs-3 text-uppercase">Happy Journey</div>
            <div className="border-bottom py-1"></div>

            <div className="d-flex justify-content-between py-1">
              <div>&nbsp;</div>
              <div className="text-uppercase">JOURNEY (J)</div>
              <div>{getCurrentDate()}</div>
            </div>
            <div className="d-flex justify-content-between py-1">
              <div>₹{CONFIG?.[localStorage.getItem("type")]?.fare}/-</div>
              <div>{localStorage.getItem("phone_number")}</div>
            </div>
            <div className="d-flex justify-content-between py-1">
              <div className="text-uppercase">
                UTS No: {localStorage.getItem("number")}
              </div>
            </div>

            <div className="border-bottom py-1"></div>

            <div
              className="d-flex align-items-center"
              style={{ fontSize: "0.8rem" }}
            >
              {/* "border-radius:50%; border:solid black 1px;padding:5px" */}
              <div
                style={{
                  borderRadius: "50%",
                  background: "#961295",
                  color: "white",
                  width: "6.5vw",
                  textAlign: "center",
                }}
              >
                S
              </div>
              <div className="ps-2 pt-2">
                <div>{STN_DETAIL_CONFG?.[localStorage.getItem("from")].mr}</div>
                <div className="text-uppercase">
                  {localStorage.getItem("from")}
                </div>
                <div>{STN_DETAIL_CONFG?.[localStorage.getItem("from")].hn}</div>
              </div>
            </div>
            <div
              className="d-flex align-items-center pt-2"
              style={{ fontSize: "0.8rem" }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  background: "#961295",
                  color: "white",
                  width: "6.5vw",
                  textAlign: "center",
                }}
              >
                D
              </div>
              <div className="ps-2">
                <div>{STN_DETAIL_CONFG?.[localStorage.getItem("to")].mr}</div>
                <div className="text-uppercase">
                  {localStorage.getItem("to")}
                </div>
                <div>{STN_DETAIL_CONFG?.[localStorage.getItem("to")].hn}</div>
              </div>
              {/* <div className="ps-2">
                <div>अंबरनाथ</div>
                <div className="text-uppercase">Ambarnath</div>
                <div>अंबरनाथ</div>
              </div> */}
            </div>
            <div
              className="d-flex align-items-center pt-1"
              style={{ fontSize: "0.8rem" }}
            >
              <div>Adult: 1</div>
              <div className="ms-4">Child: 0</div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center pt-1"
              style={{ fontSize: "0.8rem" }}
            >
              <div className="d-flex align-items-center">
                <div className="fw-light">CLASS:</div>
                <div className="ms-2">
                  <div>{CONFIG?.[localStorage.getItem("type")]?.class_mr}</div>
                  <div>{CONFIG?.[localStorage.getItem("type")]?.clss_eg}</div>
                  <div>{CONFIG?.[localStorage.getItem("type")]?.class_hn}</div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="fw-light">TRAIN TYPE:</div>
                <div className="ms-2">
                  <div>{CONFIG?.[localStorage.getItem("type")]?.type_mr}</div>
                  <div>{CONFIG?.[localStorage.getItem("type")]?.type_eg}</div>
                  <div>{CONFIG?.[localStorage.getItem("type")]?.type_hn}</div>
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
                  width: "7.5vw",
                  textAlign: "center",
                }}
                className=""
              >
                via
              </div>
              <div className="ms-2 fw-light">KYN</div>
            </div>

            <div className="border-bottom py-1"></div>

            <div
              className="d-flex align-items-center py-1"
              style={{ fontSize: "0.8rem" }}
            >
              <div className="d-flex align-items-center">
                <div className="fw-light">SAC:</div>
                <div>996411</div>
              </div>
              <div className="d-flex align-items-center ms-4">
                <div className="fw-light">IR:</div>
                <div>27AAAGMO289C2ZI</div>
              </div>
            </div>
            <div
              className="d-flex align-items-center py-1"
              style={{ fontSize: "0.8rem" }}
            >
              <div className="d-flex align-items-center">
                <div className="fw-light">Total GST:</div>
                <div>{CONFIG?.[localStorage.getItem("type")]?.fare * 0.05}</div>
              </div>
            </div>
            <div
              className="d-flex align-items-center py-1"
              style={{ fontSize: "0.8rem" }}
            >
              <div className="d-flex align-items-center">
                <div className="fw-light">
                  Journey Should Commence within 1 hour
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center py-1"
              style={{ fontSize: "0.8rem" }}
            >
              <div>R17159</div>
              <div className="fw-light">Distance: 41 km</div>
            </div>
            <div
              className="d-flex align-items-center py-1"
              style={{ fontSize: "0.8rem" }}
            >
              <div>Booking Time:</div>
              <div className="fw-light">
                {getCurrentDate()} {localStorage.getItem("time")}
              </div>
            </div>
          </div>
          <div className="px-2 pb-4 pt-2">
            <div
              className="fw-light text-primary"
              style={{ fontSize: "0.7rem" }}
            >
              It is recommended not to perform factory reset or change you
              handset whenever you are having valid ticket in the mobile.
            </div>
            <div
              className="fw-light text-decoration-underline py-2"
              style={{ color: "rgb(254, 108, 75)", fontSize: "0.8rem" }}
            >
              Click for Changing Handset with Valid Ticket
            </div>
            <div style={{ color: "rgb(254, 59, 59)", fontSize: "0.7rem" }}>
              FOR MEDICAL EMERGENCY I FIRST AID. CONTACT TICKET
            </div>
            <div
              className="text-center"
              style={{ color: "rgb(254, 59, 59)", fontSize: "0.7rem" }}
            >
              CHECKING STAFFIGUARD OR DIAL 139
            </div>
            <button
              style={{
                borderRadius: "2rem",
                background: "#FE6D49",
                border: "0px",
                color: "white",
                fontSize: "0.8rem",
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
                fontSize: "0.8rem",
              }}
              class="w-100 py-2 my-2"
            >
              NEXT TRAINS TO {localStorage.getItem("to")}
            </button>
            <button
              style={{
                borderRadius: "2rem",
                background: "#FE6D49",
                border: "0px",
                color: "white",
                fontSize: "0.8rem",
              }}
              class="w-100 py-2 my-2"
              onClick={() => {
                navigate("/");
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        Centre for Railway Information Systems (CRIS)
      </div>
      {/* <img src="WhatsApp Image 2025-02-14 at 3.55.16 PM.jpeg" /> */}
    </div>
  );
};

export default HomePage;
