import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
          name: "Assignment 1",
          quiz: 9,
          marks: 60,
          amt: 2400
        },
        {
          name: "Assignment 2",
          quiz: 10,
          marks: 50,
          amt: 2210
        },
        {
          name: "Assignment 3",
          quiz: 10,
          marks: 60,
          amt: 2290
        },
        {
          name: "Assignment 4",
          quiz: 8,
          marks: 48,
          amt: 2000
        },
        {
          name: "Assignment 5",
          quiz: 6,
          marks: 59,
          amt: 2181
        },
        {
          name: "Assignment 6",
          quiz: 4,
          marks: 60,
          amt: 2500
        },
        {
          name: "Assignment 7",
          quiz: 9,
          marks: 54,
          amt: 2100
        }
      ];
    return (
        <div className='flex justify-center py-10'>
            <LineChart width={1000} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
          <Tooltip />
            <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;