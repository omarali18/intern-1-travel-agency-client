import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import admin from "./Image/admin.jpg"

const MakeAdmin = () => {
    const [createAdmin, setCreateAdmin] = useState("")
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setCreateAdmin(e.target.value)
    }

    const handleOnSubmit = e => {

        const user = { email: createAdmin }
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    setSuccess(true)
                }
            })


        e.preventDefault()
    }

    return (
        <Box>
        <Grid container spacing={2}>
            <Grid item >
                <img src={admin} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ textAlign: "center", mt: 20 }}>
                    <Typography variant="h3">
                        Create an Admin
                    </Typography>
                </Box>
                {success && <Alert severity="success">successfully created admin.</Alert>}
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        sx={{ width: 1, my: 2 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        // defaultValue="Enter Email"
                        label="Enter Email"
                        name="email"
                        type="email"
                        variant="outlined"
                    />
                    <Box sx={{ textAlign: "center" }}>
                        <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Submit</Button>
                    </Box>
                </form>
            </Grid>

        </Grid>
    </Box>
    );
};

export default MakeAdmin;