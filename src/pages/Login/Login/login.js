import React, { useState } from "react";
import {
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [register, setRegister] = useState({});
  const [error, setError] = useState("");
  const { loginByGoogle, loginEmailPassword, handleRegistetion } = useAuth();

  const location = useLocation();
  const redirect = location?.state?.from || "/";
  const navigate = useNavigate();

  const handleOnBlurLogin = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...loginData };
    newUser[field] = value;
    // console.log("new user", newUser);
    setLoginData(newUser);
  };
  const handleOnBlurRegister = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...register };
    newUser[field] = value;
    setRegister(newUser);
  };

  const handleOnSubmitLogin = (e) => {
    // console.log("loginnnn", loginData.email, loginData.password,);
    // loginEmailPassword(loginData.email, loginData.password, redirect, navigate);
    e.preventDefault();
  };

  const handleOnSubmitRegister = (e) => {
    console.log(register);
    if (register.password !== register.password2) {
      setError("Password not match..!!");
      return;
    } else {
      setError("");
    //   handleRegistetion(
    //     register.email,
    //     register.password,
    //     register.name,
    //     navigate
    //   );
    }
    e.preventDefault();
  };

  const handleGoogleLogin = () => {
    loginByGoogle(redirect, navigate);
  };

  return (
    <Box sx={{ mb: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            className="form-container"
            sx={{
              mx: "auto",
              mt: 10,
              width: { md: "75%", sm: "85%", xs: "90%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "blueviolet" }}
            >
              Please Login
            </Typography>
            <form onSubmit={handleOnSubmitLogin}>
              <TextField
                sx={{ width: 1, my: 3 }}
                onBlur={handleOnBlurLogin}
                id="outlined-basic"
                label="email"
                name="email"
                type="email"
                variant="outlined"
                required
              />

              <TextField
                sx={{ width: 1 }}
                onBlur={handleOnBlurLogin}
                id="outlined-basic"
                label="password"
                name="password"
                type="password"
                variant="outlined"
              />

              <Box sx={{ textAlign: "center" }}>
                {/* <Link to="/register"><Button sx={{ py: 2, px: 4, my: 3 }}>New user? Please Register</Button></Link> */}
              </Box>
              <Box sx={{ textAlign: "center", pt: 5 }}>
                <button
                className="loginbtn"
                  style={{
                    padding: "15px 40px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  // onClick={handleOnBlurLogin}
                  type="submit"
                  variant="contained"
                >
                  Login
                </button>
              </Box>
            </form>
            <Box sx={{ textAlign: "center", pt: 2 }}>
              <button
                onClick={handleGoogleLogin}
                className="loginbtn"
                style={{
                  padding: "15px 40px",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
                type="submit"
                variant="contained"
              >
                Login With Google
              </button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{}}>
          <Box
            className="form-container"
            sx={{
              mx: "auto",
              mt: 10,
              width: { md: "75%", sm: "85%", xs: "90%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "blueviolet" }}
            >
              Please Register
            </Typography>
            <form onSubmit={handleOnSubmitRegister}>
              <TextField
                sx={{ width: 1, my: 3 }}
                onBlur={handleOnBlurRegister}
                id="outlined-basic"
                label="name"
                name="name"
                type="text"
                variant="outlined"
                required
              />

              <fieldset>
                Enter your valid email.
                <TextField
                sx={{ width: 1 }}
                onBlur={handleOnBlurRegister}
                id="outlined-basic"
                label="email"
                name="email"
                type="email"
                variant="outlined"
                required
              />
              </fieldset>
              {/* <TextField
                sx={{ width: 1 }}
                onBlur={handleOnBlurRegister}
                id="outlined-basic"
                label="email"
                name="email"
                type="email"
                variant="outlined"
                required
              /> */}
              <TextField
                sx={{ width: 1, my: 3 }}
                onBlur={handleOnBlurRegister}
                id="outlined-basic"
                label="password"
                name="password"
                type="password"
                variant="outlined"
                required
              />
              <Typography
                style={{ color: "red" }}
                variant="caption"
                display="block"
                gutterBottom
              >
                {error}
              </Typography>
              <TextField
                sx={{ width: 1 }}
                onBlur={handleOnBlurRegister}
                id="outlined-basic"
                label="password"
                name="password2"
                type="password"
                variant="outlined"
                required
              />
              <Box sx={{ textAlign: "center" }}>
                {/* <Link to="/login"><Button sx={{ py: 2, px: 4, my: 3 }}>Already Registered, please log in.</Button></Link> */}
              </Box>
              <Box sx={{ textAlign: "center", pt: 4 }}>
                <button
                className="loginbtn"
                  style={{
                    padding: "15px 40px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Registation
                </button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;