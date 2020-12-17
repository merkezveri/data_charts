import React, { PureComponent } from 'react';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
  AreaChart, Area,ResponsiveContainer
} from 'recharts';

const data = [
    {
      Aylar: "2019 01",
      Değişim: 0.5
    },
    {
      Aylar: "2019 02",
      Değişim: -1.6
    },
    {
      Aylar: "2019 03",
      Değişim: 26
    },
    {
      Aylar: "2019 04",
      Değişim: 28
    },
    {
      Aylar: "2019 05",
      Değişim: -8
    },
    {
      Aylar: "2019 06",
      Değişim: 3.7
    },
    {
      Aylar: "2019 07",
      Değişim: -19
    },
    {
      Aylar: "2019 08",
      Değişim: 1.1
    },
    {
      Aylar: "2019 09",
      Değişim: -1.9
    },
    {
      Aylar: "2019 10",
      Değişim: 1
    },
    {
      Aylar: "2019 11",
      Değişim: 3.6
    },
    {
      Aylar: "2019 12",
      Değişim: -0.7
    },
    {
      Aylar: "2020 01",
      Değişim: 0.8
    },
    {
      Aylar: "2020 02",
      Değişim: -2.1
    },
    {
      Aylar: "2020 03",
      Değişim: 1.9
    },
    {
      Aylar: "2020 04",
      Değişim: -3.7
    },
    {
      Aylar: "2020 05",
      Değişim: 5.8
    },
    {
      Aylar: "2020 06",
      Değişim: 0
    },
    {
      Aylar: "2020 07",
      Değişim: -0.5
    },
    {
      Aylar: "2020 08",
      Değişim: -3.5
    },
    {
      Aylar: "2020 09",
      Değişim: 3.2
    },
    {
      Aylar: "2020 10",
      Değişim: -0.1
    }
  ];

function Chart() {

    return (
        <div className="container">
            <h4>Tüketici Güven Endeksi</h4>
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

export default Chart