import moment from 'moment';
import * as Recharts from 'recharts';

interface ChartProps {
    type: "bar" | "radar" | "line" | "doughnut",
    data: any
}

export const Chart = (props: ChartProps) => {
    const margin = {top: 10, right: 30, bottom: 20, left: 50};
    const width = 460 - margin.left - margin.right;

    const drawChart = () => {
        if(props.type === 'bar') {
            return (
                <div style={{backgroundColor: '#FBFBFB', borderRadius: 15, width: '100%', height: '100%'}}>
                    <Recharts.BarChart
                        width={width}
                        height={250}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <Recharts.Legend />
                        <Recharts.CartesianGrid strokeDasharray="3 3" />
                        <Recharts.XAxis 
                            dataKey="day" 
                            name="date" 
                            tickFormatter = {(time: string) => moment(time).format('DD/MM/YYYY').split('/')[0].split('0')[1]} 
                        />
                        <Recharts.YAxis dataKey={"kilogram"} />
                        <Recharts.Bar dataKey="kilogram" fill="black" minPointSize={69} />
                        <Recharts.Bar dataKey="calories" fill="red" />
                    </Recharts.BarChart>
                </div>
                
            )
        } else if(props.type === 'radar') {
            return (
                <div style={{backgroundColor: "#282D30", width: 150, height: 150, borderRadius: 15}}>
                    <Recharts.RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
                        <Recharts.PolarGrid />
                        <Recharts.PolarAngleAxis dataKey="kind" />
                        <Recharts.PolarRadiusAxis />
                        <Recharts.Radar dataKey="value" stroke="white" fill="red" fillOpacity={0.4} />
                    </Recharts.RadarChart>
                </div>
                
            )
        } else if(props.type === 'line') {
            return (
                <div style={{backgroundColor: "red", width: 150, height: 150, borderRadius: 15}}>
                    <Recharts.LineChart width={100} height={100} data={props.data}>
                        <Recharts.Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} />
                        <Recharts.YAxis dataKey={"day"} />
                    </Recharts.LineChart>
                </div>
                
            )
        } else {
            return (
                <div style={{backgroundColor: "#FBFBFB", width: 150, height: 150, borderRadius: 15}}>
                    <Recharts.PieChart width={100} height={100}>
                        <Recharts.Pie data={props.data} dataKey="score" cx="50%" cy="50%" outerRadius={60} fill="red" />
                    </Recharts.PieChart>
                </div>
            )
        }
    }

    return (
        <div>
            {drawChart()}
        </div>
    )
}