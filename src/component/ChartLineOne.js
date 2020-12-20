import React from 'react';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush,ResponsiveContainer
} from 'recharts';

import data from "../data";

function ChartLineOne() {

    return (
        <div className="container" style={{height: "400px"}}>
            <ResponsiveContainer>
                <LineChart

                data={data}
                syncId="anyId"
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Aylar" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="Değişim" stroke="#8884d8" fill="#8884d8" />
                    <Brush />
                </LineChart>
            </ResponsiveContainer>
      </div>
    )
}

export default ChartLineOne;