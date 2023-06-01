import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
  return (
    <div>
      <Typography sx={{ margin:"5%" }} variant="h3" align="center">
        Get Stronger!
      </Typography>
      <div>
        <ul className="ul">
          <li>
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/lift/dashboard">
              Lift Heavy
            </Link>
            </Button>
          </li>
          <li>
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/lift/feed">
              Get started
            </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;