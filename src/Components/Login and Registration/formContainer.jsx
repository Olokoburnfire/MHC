/* eslint-disable no-unused-vars */
import React from 'react';
import { Paper, Tab, Tabs, Box, Typography } from "@mui/material";
import { useState } from 'react';
import Login from './login';
import Signup from './signup';
import ForgotPassword from './ForgotPassword';



const FormContainer = () => {

    // mui styles
        // paper Style
    const paperStyle ={
        boxSizing: "border=box",
        padding: "20px",
        margin: '0 auto',
        height: 'fit-content',
        width:"410px",
        background: "transparent",
    }
        // tabs style
    const tabsStyle ={
        opacity: "0",
        margin: "0 auto",
    }
    

    // states
    const [value, setValue] = useState(0);

    // Functions
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

        // Tabpanel function
    function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
    }


    return ( 
        <>
        <Paper
        style ={paperStyle} 
        
        >
            {/* <Tabs 
            value={value} 
            onChange={handleChange}
             aria-label="basic tabs example"
             style ={tabsStyle} 
             >

                <Tab 
                label="SIGN IN"
                />

                <Tab 
                label="SIGN UP" 
                />

                <Tab 
                label="Item Three"  
                />

            </Tabs>  */}
            {/* login components */}
            <TabPanel value={value} index={0}>
                <Login handleChange = {handleChange} />
            </TabPanel>
            {/* signup component */}
            <TabPanel value={value} index={1}>
                <Signup handleChange = {handleChange} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ForgotPassword handleChange = {handleChange} />
            </TabPanel>
        </Paper>
        </>
     );
}
 
export default FormContainer;