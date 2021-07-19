import React, { useState, useEffect } from 'react'
import api from '../Services/api'
import Chart from "react-apexcharts";

const Chart7Days = ({ id }) => {
    const [array, setArray] = useState([])

    // useEffect(() => {
    //     api
    //         .get(`${id}/market_chart?vs_currency=usd&days=7&interval=daily`)
    //         .then(res => {
    //             setArray(res.data.prices)
    //         })
    // }, [id])

    const state = {
        options: {
            chart: {
                id: "basic-line"
            }
        },
        series: [
            {
                name: "series-1",
                data: array
            }
        ]
    };

    return (
        <div>
            {/* <Chart
                options={state.options}
                series={state.series}
                type="line"
            /> */}
        </div>
    )
}

export default Chart7Days;
