import React, { useState } from 'react'
import { Box, Button, Card, CardHeader, Container, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, MenuItem, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from "yup";
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'


function UserRegisterComp({ userRegisterCom, setUserRegisterCom, setHandleOpen }) {
    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        pNumber: '',
        password: ''
    })

    const handleClose = () => {
        setUserRegisterCom(false)
        setHandleOpen(true)
    }

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        setUserData({
            ...userData,
            [e.target.name]: value
        })
    }

    function registerUser() {
        const userModel = {
            userName: userData.userName,
            email: userData.email,
            pNumber: userData.pNumber,
            password: userData.password
        }

        axios.post("http://localhost:8000/api/user/createUser", userModel).then((res) => {
            if (res.data.status == 200) {
                handleClose();
                clearUserdata();
            }
        })
    }

    function clearUserdata() {
        setUserData({
            ...userData,
            userName: '',
            email: '',
            pNumber: '',
            password: ''
        })
    }

    return (
        <>
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={userRegisterCom}
            >
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon sx={{ color: '#6C0000' }} />
                </IconButton>
                <DialogContent >
                    <Formik
                        initialValues={{
                            userName: userData.userName,
                            email: userData.email,
                            pNumber: userData.pNumber,
                            password: userData.password
                        }}

                        validationSchema={
                            Yup.object().shape({
                                userName: Yup.string().required('User Name is required'),
                            })
                        }

                        onSubmit={() => registerUser()}
                        enableReinitialize

                    >
                        {({
                            errors,
                            handleBlur,
                            handleSubmit,
                            touched
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item md={12} xs={12}></Grid>
                                    <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Typography sx={{ color: '#900000', fontSize: '25px', fontFamily: 'Raleway, sans-serif', fontWeight: '600' }}>Welcome To The Mebius,Register</Typography>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(touched.userName && errors.userName)}
                                            helperText={touched.userName && errors.userName}
                                            name='userName'
                                            value={userData.userName}
                                            id='userName'
                                            size="small"

                                            type='text'
                                            placeholder='Name'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(touched.email && errors.email)}
                                            helperText={touched.email && errors.email}
                                            name='email'
                                            value={userData.email}
                                            id='email'
                                            size="small"

                                            type='text'
                                            placeholder='Email Address'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(touched.pNumber && errors.pNumber)}
                                            helperText={touched.pNumber && errors.pNumber}
                                            name='pNumber'
                                            value={userData.pNumber}
                                            id='pNumber'
                                            size="small"

                                            placeholder='Phone Number'
                                            type='text'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            helperText={touched.password && errors.password}
                                            name='password'
                                            value={userData.password}
                                            id='password'
                                            size="small"

                                            placeholder='Password'
                                            type='password'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <center>
                                            <Button
                                                variant="contained"

                                                size='small'
                                                sx={{ width: '30%' }}
                                                onClick={clearUserdata}
                                            >
                                                Clear
                                            </Button>
                                            &nbsp;
                                            <Button
                                                variant="contained"

                                                size='small'
                                                sx={{ width: '30%' }}
                                                type='submit'
                                            >
                                                Register
                                            </Button>
                                        </center>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog >
        </>
    )
}

export default UserRegisterComp