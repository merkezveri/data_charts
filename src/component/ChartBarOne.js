import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer,Brush
  } from 'recharts';

import data from "../data1";


function ChartBarOne() {
    return (
        <div className="container" style={{height: "20uv"}}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Aylar" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Oran" fill="#413ea0" background={{ fill: '#eee' }} />
                    <Brush />

                </BarChart>
            </ResponsiveContainer>          
        </div>
    )
}

export default ChartBarOne
