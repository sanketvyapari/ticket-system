import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    // <div className="text-white">
    //   <div className="orange-bg w-100 py-2 px-3">
    //     <i class="fa-solid fa-arrow-left me-2"></i>
    //     <span className="ms-2">Show Ticket</span>
    //   </div>
    // </div>
    <img
      src="home.png"
      style={{ width: "100%" }}
      onClick={() => {
        navigate("/list");
      }}
    />
  );
};

export default Home;
