import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import PropTypes from 'prop-types';
import UserManagement from '../Components/UserManagement';
import ProductCategoryManagement from '../Components/ProductCategoryManagement';
import ProductManagement from '../Components/ProductManagement';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function AdminManagement() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="scrollable force tabs example"
                        variant="scrollable"
                        allowScrollButtonsMobile
                        textColor='error'
                    >
                        <Tab sx={{ fontWeight: 'bold' }} label="User Management" {...a11yProps(0)} />
                        <Tab sx={{ fontWeight: 'bold' }} label="Product category Management" {...a11yProps(1)} />
                        <Tab sx={{ fontWeight: 'bold' }} label="Product Management" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <UserManagement />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <ProductCategoryManagement />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <ProductManagement />
                </CustomTabPanel>
            </Box>
        </>
    )
}

export default AdminManagement