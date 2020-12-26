import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,Brush
  } from 'recharts';



function ChartBarOne(props) {
    return (
        <div className="container" style={{height: "50vh"}}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={props.xaxis} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={props.yaxis} fill="#413ea0" background={{ fill: '#eee' }} />
                    <Brush />

                </BarChart>
            </ResponsiveContainer>          
        </div>
    )
}

export default ChartBarOne
