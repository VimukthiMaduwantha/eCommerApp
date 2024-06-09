import React, { useState } from 'react'
import { Box, Button, Card, CardHeader, Container, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, MenuItem, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from "yup";
import CloseIcon from '@mui/icons-material/Close';
import UserRegisterComp from './UserRegisterComp';

function UserLogin({ setHandleOpen, handelOpen }) {
    const [userRegisterCom, setUserRegisterCom] = useState(false)


    const handleClose = () => {
        setHandleOpen(false)
    }

    const userRegister = () => {
        setHandleOpen(false);
        setUserRegisterCom(true);
    }

    return (
        <>
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={handelOpen}
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
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12}></Grid>
                        <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography sx={{ color: '#900000', fontSize: '25px', fontFamily: 'Raleway, sans-serif', fontWeight: '600' }}>Welcome To The Mebius, Login</Typography>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                // error={Boolean(touched.itemCode && errors.itemCode)}
                                // helperText={touched.itemCode && errors.itemCode}
                                // name='itemCode'
                                // value={itemCodeNew}
                                id='itemCode'
                                size="small"
                                color='error'
                                placeholder='User Name'
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                // error={Boolean(touched.itemCode && errors.itemCode)}
                                // helperText={touched.itemCode && errors.itemCode}
                                // name='itemCode'
                                // value={itemCodeNew}
                                id='itemCode'
                                size="small"
                                color='error'
                                placeholder='Password'
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <center>
                                <Button
                                    variant="contained"
                                    color='error'
                                    size='small'
                                    sx={{ width: '50%' }}
                                >
                                    Login
                                </Button>
                            </center>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography>Don't you have an account ?<span onClick={() => userRegister()} style={{ fontWeight: 'bold', color: '#900000', cursor: 'pointer' }}>Click here</span></Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog >

            {/* user reguster component */}
            <UserRegisterComp
                userRegisterCom={userRegisterCom}
                setUserRegisterCom={setUserRegisterCom}
                setHandleOpen={setHandleOpen}
            />
        </>

    )
}

export default UserLogin