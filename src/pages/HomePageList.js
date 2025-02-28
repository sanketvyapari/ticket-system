import { Navigate, useHistory, useNavigate } from "react-router-dom";
import { getCurrentDate } from "../utils";

export const CONFIG = {
  GENERAL: {
    fare: 15,
    class: "SECOND (II)",
    type: "ORDINARY (O)",
    class_mr: "द्वितीय",
    class_hn: "द्वि श्रे",
    clss_eg: "SECOND",
    type_eg: "ORDINARY",
    type_mr: "साधारण",
    type_hn: "साधारण",
  },
  AC: {
    fare: 100,
    class: "FIRST (FC)",
    type: "AC EMU TRAIN (U)",
    class_mr: "प्रथम",
    class_hn: "प्र श्रे",
    clss_eg: "FIRST (FC)",
    type_eg: "AC EMU TRAIN (U)",
    type_mr: "एसी ईएमयू",
    type_hn: "एसी ईमु",
  },
};

const HomePageList = () => {
  let navigate = useNavigate();

  return (
    <div className="text-white">
      <div className="orange-bg w-100 py-2 px-3">
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          <i class="fa-solid fa-arrow-left me-2"></i>
        </span>
        <span className="ms-2">Show Ticket</span>
      </div>
      <div className="p-2">
        <div className="orange-bg w-100 py-1 px-2 rounded">
          <i class="fa-solid fa-ticket"></i>
          <span className="ms-3">SHOW TICKET</span>
        </div>
      </div>
      <div className="container">
        <div
          class="card rounded-3 shadow"
          onClick={() => {
            console.log("asdlkjaskd");
            navigate("/detail");
          }}
        >
          <div class="card-body px-2 pt-2 booked-ticket-bg">
            <div className="orange-bg w-100 px-2 d-flex">
              <div
                className="w-50 d-flex align-items-center fw-bolder border-1 border-end border-color-gray py-1"
                style={{ fontSize: "0.8rem" }}
              >
                JOURNEY ( M-TICKET )
              </div>
              <div
                className="w-50 d-flex align-items-center justify-content-end fw-bolder"
                style={{ fontSize: "0.8rem" }}
              >
                FARE: <span className="text-black px-1 fs-6">₹</span>
                {CONFIG?.[localStorage.getItem("type")]?.fare}
              </div>
            </div>
            <div className="w-100 px-2 d-flex text-black">
              <div className="d-flex w-50 border-1 border-end border-color-gray py-1 ps-2">
                <div
                  style={{
                    borderRadius: "50%",
                    color: "white",
                    width: "6.5vw",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                  className="orange-bg"
                >
                  S
                </div>
                <div className="text-black ps-2">
                  {localStorage.getItem("from")}
                </div>
              </div>
              <div className="d-flex w-50 py-1 ps-2">
                <div
                  style={{
                    borderRadius: "50%",
                    color: "white",
                    width: "6.5vw",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                  className="orange-bg"
                >
                  D
                </div>
                <div className="text-black ps-2">
                  {localStorage.getItem("to")}
                </div>
              </div>
            </div>
            <div className="w-100 d-flex text-black border-1 border-top border-bottom border-color-gray">
              <div className="text-black py-1" style={{ fontSize: "0.9rem" }}>
                Via: <span className="text-danger fw-bolder">KYN</span>
              </div>
            </div>
            <div
              className="w-100 d-flex text-black border-1 border-bottom border-color-gray"
              style={{ fontSize: "0.7rem" }}
            >
              <div
                className="text-black py-1 border-1 border-end border-color-gray "
                style={{ width: "40%" }}
              >
                <span>
                  ADULT: <span className="text-danger fw-bolder">1</span>
                </span>
                <span className="ms-2">
                  CHILD: <span className="text-danger fw-bolder ">0</span>
                </span>
              </div>
              <div
                className="border-1 border-end border-color-gray text-center py-1"
                style={{ width: "30%" }}
              >
                {CONFIG?.[localStorage.getItem("type")]?.class}
              </div>
              <div className="text-center py-1" style={{ width: "30%" }}>
                {/* ORDINARY (O) */}
                {CONFIG?.[localStorage.getItem("type")]?.type}
              </div>
            </div>
            <div
              className="w-100 d-flex text-black border-1 border-bottom border-color-gray"
              style={{ fontSize: "0.7rem" }}
            >
              <div
                className="text-black py-1 border-1 border-end border-color-gray "
                style={{ width: "60%" }}
              >
                <span>
                  BOOKING DATE:{" "}
                  <span className="text-orange fw-bolder">
                    {getCurrentDate()} {localStorage.getItem("time")}
                  </span>
                </span>
              </div>
              <div
                className="text-black py-1 text-end"
                style={{ width: "40%" }}
              >
                <span>
                  UTS NO:
                  <span className="fw-bolder text-orange">
                    {localStorage.getItem("number")}
                  </span>
                </span>
              </div>
            </div>
            <div
              className="w-100 d-flex text-black fw-bolder"
              style={{ fontSize: "0.7rem" }}
            >
              <div className="text-black py-2 border-1 border-end border-color-gray w-50">
                <span className="d-flex align-items-center">
                  <i
                    class="fa-solid fa-circle me-1"
                    style={{
                      fontSize: "0.1rem",
                    }}
                  ></i>
                  <i class="fa-solid fa-arrow-right me-2"></i>
                  <span className="text-orange fw-bolder">VIEW TICKET</span>
                </span>
              </div>
              <div className="text-black py-2 text-end d-flex justify-content-end w-50">
                <div>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <span className="fw-bolder text-orange ms-1">
                    NEXT TRAINS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fixed_button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fa-solid fa-rotate"></i>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const formProps = Object.fromEntries(formData);
                if (formProps.time) {
                  localStorage.setItem("time", formProps.time);
                }
                if (formProps.from) {
                  localStorage.setItem("from", formProps.from);
                }
                if (formProps.to) {
                  localStorage.setItem("to", formProps.to);
                }
                if (formProps.type) {
                  localStorage.setItem("type", formProps.type);
                }
                if (formProps.phone_number) {
                  localStorage.setItem("phone_number", formProps.phone_number);
                }
                if (formProps.number) {
                  localStorage.setItem("number", formProps.number);
                }
                if (formProps.color) {
                  localStorage.setItem("color", formProps.color);
                }
              }}
            >
              <div class="modal-body">
                <div class="mb-3">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    name="from"
                  >
                    <option selected>Select From</option>
                    <option value="AMBARNATH">AMBARNATH</option>
                    <option value="GHATKOPAR">GHATKOPAR</option>
                  </select>
                </div>
                <div class="mb-3">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    name="to"
                  >
                    <option selected>Select To</option>
                    <option value="AMBARNATH">AMBARNATH</option>
                    <option value="GHATKOPAR">GHATKOPAR</option>
                  </select>
                </div>
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="time"
                    placeholder="Default input"
                    aria-label="default input example"
                    name="time"
                  />
                </div>
                <div class="mb-3">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    name="type"
                  >
                    <option selected>Type</option>
                    <option value="AC">AC</option>
                    <option value="GENERAL">GENERAL</option>
                  </select>
                </div>
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="number"
                    placeholder="Phone Number"
                    aria-label="default input example"
                    name="phone_number"
                    value={localStorage.getItem("phone_number")}
                  />
                </div>
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Your UT Number"
                    aria-label="default input example"
                    name="number"
                    value={"X06VE04005"}
                  />
                </div>
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Color Code"
                    aria-label="color code"
                    name="color"
                    value={localStorage.getItem("color")}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageList;
