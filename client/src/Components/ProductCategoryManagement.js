import React, { useState } from 'react'
import { Box, Button, Card, CardHeader, Container, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, MenuItem, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from "yup";
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

function ProductCategoryManagement() {
    const [categoryData, setCategoryData] = useState({
        categoryID: 0,
        categoryName: '',
    })

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        setCategoryData({
            ...categoryData,
            [e.target.name]: value
        })
    }
    return (
        <>
            <Box>
                <Box>
                    <h1>Product Category Management</h1>
                    <br />
                    <Box>
                        <Formik
                            initialValues={{
                                categoryID: categoryData.categoryID,
                                categoryName: categoryData.categoryName
                            }}

                            validationSchema={
                                Yup.object().shape({
                                    categoryID: Yup.number().required('CategoryID is required'),
                                    categoryName: Yup.string().required('Category Name is required'),
                                })
                            }

                            // onSubmit={() => addCatogory()}
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
                                        <Grid item md={4} xs={12}>
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                error={Boolean(touched.categoryID && errors.categoryID)}
                                                helperText={touched.categoryID && errors.categoryID}
                                                name='categoryID'
                                                value={categoryData.categoryID}
                                                id='categoryID'
                                                size="small"
                                                color='error'
                                                type='text'
                                                placeholder='Category ID'
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                error={Boolean(touched.categoryName && errors.categoryName)}
                                                helperText={touched.categoryName && errors.categoryName}
                                                name='categoryName'
                                                value={categoryData.categoryName}
                                                id='categoryName'
                                                size="small"
                                                color='error'
                                                type='text'
                                                placeholder='Category Name'
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </Grid>
                                        <Grid item md={4} xs={12}>

                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Button
                                                    variant="contained"
                                                    color='error'
                                                    size='small'
                                                    sx={{ width: '10%' }}
                                                // onClick={clearUserdata}
                                                >
                                                    Clear
                                                </Button>
                                                &nbsp;
                                                <Button
                                                    variant="contained"
                                                    color='error'
                                                    size='small'
                                                    sx={{ width: '10%' }}
                                                    type='submit'
                                                >
                                                    Register
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProductCategoryManagement