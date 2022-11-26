import React from 'react'
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

export default function Pie() {
  return (
    <Box m="20px">
    <Header title="Pie Chart" subtitle="饼状分析表" />
    <Box height="75vh">
      <PieChart />
    </Box>
  </Box>
  )
}
