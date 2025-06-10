import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const AddedGraphView = ({ dataa, history,fantacy,poetry}) => {


    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',];

    const data = [
        {
            name: 'Fantacy',
            uv: fantacy.length,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Fiction',
            uv: dataa.length,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'History',
            uv: history.length,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Poetry',
            uv: poetry.length,
            pv: 3908,
            amt: 2000,
        }
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`}

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <>
            <div className="w-full h-80">
                <ResponsiveContainer >
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill='red' shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default AddedGraphView;