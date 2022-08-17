import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import {
    Bar,
    getElementAtEvent
  } from 'react-chartjs-2'
import {useRef} from 'react'
import {useInternalRouter} from '../../pages/routing';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export default function Chart({wages,company_id}) {
    const {push} = useInternalRouter();
    const chartRef = useRef(null);
    const labels = ['1년차', '2년차', '3년차', '4년차', '5년차'];
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio : false
    }
    let customWage = []
    if(wages.length>0){
      customWage = wages.map((item)=>[item.min/10000,item.max/10000]);
    } else {
      customWage = [[0,0],[0,0],[0,0],[0,0],[0,0]]
    }
    const data = {
        labels,
        datasets : [    {
            type: 'bar',
            backgroundColor: '#FC0',
            data: customWage,
            borderColor: 'white',
            borderWidth: 1,
          },]
    }
    const printElementAtEvent = (element) => {
      if (!element.length) return;
  
      const { datasetIndex, index } = element[0];
      push(`/company/${company_id}/salary/${index+1}`)
    };

    const onClick = (e)=>{
      const {current : chart} = chartRef
      if(!chart){
        return
      }
      printElementAtEvent(getElementAtEvent(chart,e))
    }
    return (
      <Bar style={{
        height : '720px'
      }}  
      ref={chartRef}
      onClick = {onClick}
      options={options} data={data} />
    )
  }
  