import React, { useState } from "react";
import Navbar from "../../components/Navbar";

import {
Container,
Typography,
Tabs,
Tab,
Box
} from "@mui/material";

/* Components for each tab */
import HodDailyAttendance from "./HodDailyAttendance";
import HodAttendanceRegister from "./HodAttendanceRegister";
import HodStudentReport from "./HodStudentReport";

function HodDashboard(){

const [tabValue,setTabValue] = useState(0);

const handleChange = (event,newValue)=>{
setTabValue(newValue);
};

return(

<>
<Navbar/>

<Container maxWidth="lg" sx={{mt:4}}>

<Typography variant="h4" gutterBottom>
HOD Dashboard
</Typography>

{/* TABS */}

<Box sx={{borderBottom:1,borderColor:"divider",mb:3}}>

<Tabs
value={tabValue}
onChange={handleChange}
textColor="primary"
indicatorColor="primary"
variant="scrollable"
scrollButtons="auto"
>

<Tab label="Daily Attendance"/>

<Tab label="Attendance Register"/>

<Tab label="Student Attendance Report"/>

</Tabs>

</Box>

{/* TAB CONTENT */}

<Box>

{tabValue === 0 && (
<HodDailyAttendance/>
)}

{tabValue === 1 && (
<HodAttendanceRegister/>
)}

{tabValue === 2 && (
<HodStudentReport/>
)}

</Box>

</Container>
</>

);

}

export default HodDashboard;