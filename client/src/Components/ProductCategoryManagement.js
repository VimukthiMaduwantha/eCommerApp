import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardHeader, Chip, Container, Dialog, DialogContent, DialogTitle, Divider, Grid, IconButton, MenuItem, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography, styled, useTheme, } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from "yup";
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ProductCategoryManagement() {
    const theme = useTheme();
    const [categoryData, setCategoryData] = useState({
        categoryID: 1,
        categoryName: '',
        isActive: true
    })
    const [categoryCount, setCategoryCount] = useState();
    const [allCategoryDetails, setCallCategoryDetails] = useState([]);
    const [searchUsers, setSearchUsers] = useState("");
    const [updateRowID, setUpdateRowID] = useState();
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        getItemCategoryCount()
        getAllCategoryDetails()
    }, [])

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        setCategoryData({
            ...categoryData,
            [e.target.name]: value
        })
    }


    function addCatogory() {
        if (isUpdate) {
            const updateModel = {
                categoryName: categoryData.categoryName,
                isActive: categoryData.isActive,
                updateRowID: updateRowID
            }
            axios.put("http://localhost:8000/api/item/updateItemCategory", updateModel).then((res) => {
                if (res.data.status === 'Success') {
                    setCategoryCount()
                    setUpdateRowID();
                    setIsUpdate(false);
                    setCategoryData({
                        ...categoryData,
                        categoryName: '',
                        isActive: true
                    })
                    getItemCategoryCount();
                    getAllCategoryDetails();
                }
            })
        } else {
            const categoryModel = {
                categoryID: categoryCount,
                categoryName: categoryData.categoryName,
                isActive: categoryData.isActive
            }

            axios.post("http://localhost:8000/api/item/createItemCategory", categoryModel).then((res) => {
                getItemCategoryCount()
                getAllCategoryDetails();
                clearUserdata()
            })
        }
    }

    function getItemCategoryCount() {
        axios.get('http://localhost:8000/api/item/getCategoryCount').then((res) => {
            if (res.data.ItemCategoryDetailCount == 0) {
                setCategoryCount(1);
            } else {
                setCategoryCount(res.data.ItemCategoryDetailCount + 1);
            }
        })
    }

    function getAllCategoryDetails() {
        axios.get('http://localhost:8000/api/item/getAllCategoryDetails').then((res) => {
            if (res.data.allCategory.length >= 0) {
                setCallCategoryDetails(res.data.allCategory);
            }
        })
    }

    function categortyDelete() {

    }

    function clearUserdata() {
        setCategoryData({
            ...categoryData,
            categoryName: '',
        })
    }

    function handleChangeActive() {
        setCategoryData({
            ...categoryData,
            isActive: !categoryData.isActive
        })
    }

    function categortyUpdate(updateRow) {
        setCategoryCount(updateRow.categoryID)
        setUpdateRowID(updateRow._id);
        setIsUpdate(true);
        setCategoryData({
            ...categoryData,
            categoryName: updateRow.categoryName,
            isActive: updateRow.isActive
        })
    }

    return (
        <>
            <Box>
                <Box>
                    <h1>Product Category Management</h1>
                    <br />
                    <Box >
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

                            onSubmit={() => addCatogory()}
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
                                                value={categoryCount}
                                                id='categoryID'
                                                size="small"
                                                type='text'
                                                placeholder='Category ID'
                                                onChange={(e) => handleChange(e)}
                                                inputProps={{
                                                    readOnly: "true"
                                                }}
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
                                                type='text'
                                                placeholder='Category Name'
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </Grid>
                                        <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                            <Typography>Active</Typography>
                                            <Switch
                                                checked={categoryData.isActive}
                                                onChange={handleChangeActive}
                                                name="isActive"

                                            />
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                {!isUpdate ?
                                                    <Button
                                                        variant="contained"
                                                        size='small'
                                                        sx={{ width: { md: '10%', xs: '30%' } }}
                                                        onClick={clearUserdata}
                                                    >
                                                        Clear
                                                    </Button> : null}
                                                &nbsp;
                                                <Button
                                                    variant="contained"
                                                    size='small'
                                                    sx={{ width: { md: '10%', xs: '30%' } }}
                                                    type='submit'
                                                >
                                                    {!isUpdate ? 'Submit' : 'Update'}
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Box>
                    <br />
                    <Box >
                        <Grid container spacing={1}>
                            <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TableContainer sx={{ width: { md: '80%', xs: '100%' }, maxHeight: '500px' }} component={Paper}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '12px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <SearchIcon sx={{ color: 'gray' }} />
                                        </div>&nbsp;
                                        <TextField
                                            id="outlined-basic"
                                            placeholder="Search"
                                            variant="standard"
                                            size='small'

                                            value={searchUsers}
                                            onChange={(e) => { setSearchUsers(e.target.value) }}
                                        />
                                    </Box>
                                    <Table aria-label="simple table" stickyHeader>
                                        <TableHead >
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Category ID</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Category Name</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Status</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {allCategoryDetails.filter((element) => {
                                                if (searchUsers === "") {
                                                    return element;
                                                } else if ((element.categoryName.toLowerCase()).includes(searchUsers.toLowerCase()) || (element.categoryID).includes(searchUsers)) {
                                                    return element;
                                                }
                                            }).map((category, id) => (
                                                <TableRow>
                                                    <TableCell sx={{ textAlign: 'center' }}>{category.categoryID}</TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>{category.categoryName}</TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>{category.isActive == true ? <Chip label="Active" size='small' color='success' />
                                                        : <Chip label="Inactive" size='small' color='primary' />}</TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>
                                                        <IconButton onClick={() => categortyUpdate(category)}>
                                                            <EditIcon sx={{ color: 'black' }} />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProductCategoryManagement