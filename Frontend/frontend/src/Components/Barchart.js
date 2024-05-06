import React, { useEffect, useState } from 'react'
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis} from 'recharts'
import axios from 'axios'

const Barchart = () => {
  const [chartData,setChartData] = useState([])
  useEffect(() => {
    const fetchChartData = async() =>{
      const response = await axios.get("http://localhost:3000/bar-chart?month=1")
      console.log(response.data)
      setChartData(response.data)
    }
    fetchChartData();
  }, [])
  
  return (
    <div>
      <ResponsiveContainer>
        <BarChart chartData={chartData}>
          <XAxis />
          <Bar/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Barchart
