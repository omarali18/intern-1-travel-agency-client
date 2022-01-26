import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from "@mui/material/Box";

const AddExperience = () => {
    const [register, setRegister] = useState({});
    // const [error, setError] = useState("");

    const handleOnBlurRegister = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...register };
        newUser[field] = value;
        setRegister(newUser);
      };

      const handleOnSubmitRegister = (e) => {
        console.log(register);
       
        e.preventDefault();
      };
    
    return (
        <div>
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
              Share Your Experience
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

              
                <TextField
                sx={{ width: 1 }}
                onBlur={handleOnBlurRegister}
                id="outlined-basic"
                label="place Name"
                name="placeName"
                type="text"
                variant="outlined"
                required
              />
              
              <TextField
                sx={{ width: 1, my: 3 }}
                onBlur={handleOnBlurRegister}
                id="outlined-basic"
                label="Your Experience"
                name="description"
                type="text"
                variant="outlined"
                required
              />
             
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
                  Submit
                </button>
              </Box>
            </form>
          </Box>
        </div>
    );
};

export default AddExperience;