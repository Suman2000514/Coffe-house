import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import logo from "../assets/image/Cofee.png";
import "../index.css"

const Loader = () => {
  return (
    <div
      className="loader-container"
    >
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <img src={logo} alt="" className="rotating-image" style={{height:"100px",width:"100px"}} />
      </Stack>
    </div>
  );
};

export default Loader;
