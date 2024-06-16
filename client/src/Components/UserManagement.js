import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function UserManagement() {
    const [allUsers, setAllUsers] = useState([]);
    const [searchUsers, setSearchUsers] = useState("");

    useEffect(() => {
        GetUserDetails();
    }, [])

    const GetUserDetails = () => {
        axios.get("http://localhost:8000/api/user/getUser").then((res) => {
            if (res.data.UserDetail.length > 0) {
                setAllUsers(res.data.UserDetail);
            } else {
                alert("No records to display")
            }
        })
    }

    return (
        <>
            <Box>
                <Box>
                    <h1>User Management</h1>
                    <br />
                    <Box >
                        <Grid container spacing={1}>
                            <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TableContainer sx={{ width: '80%' }} component={Paper}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>#</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Name</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Phone Number</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Email Address</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {allUsers.filter((element) => {
                                                if (searchUsers === "") {
                                                    return element;
                                                } else if ((element.userName.toLowerCase()).includes(searchUsers.toLowerCase()) || (element.pNumber.toLowerCase()).includes(searchUsers.toLowerCase()) || (element.email.toLowerCase()).includes(searchUsers.toLowerCase())) {
                                                    return element;
                                                }
                                            }).map((users, id) => (
                                                <TableRow>
                                                    <TableCell sx={{ textAlign: 'center' }}>{id + 1}</TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>{users.userName}</TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>{users.pNumber}</TableCell>
                                                    <TableCell sx={{ textAlign: 'center' }}>{users.email}</TableCell>
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

export default UserManagement