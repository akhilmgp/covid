import React from 'react'
import { Line } from 'react-chartjs-2'

 function Chart() {
    const data = {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[
            {
                label:'Active cases 2021',
                data:[100, 200, 300, 500, 600, 850, 850, 620]
            }
           
        ]
      
    }
    return (
       
            <Line data={data}/>
       
    )
}
export default Chart