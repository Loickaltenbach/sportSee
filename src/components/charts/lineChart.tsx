import { ChartProps } from "./chartProps";
import * as Recharts from "recharts";

const CustomLineToolTip = ({active, payload}: any) => {
    if (active && payload && payload.length) {
        return (
            <div style={{width: 50, height: 30, backgroundColor: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{fontSize: 12}}>{`${payload[0].value}min`}</p>
            </div>
        );
    }

    return null;
}

const LineChart = (props: ChartProps) => {
    const weekdays = ["L","M","M","J","V","S","D"];
            return (
                <div style={{backgroundColor: "red", borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p style={{fontSize: 12, color: 'white', opacity: 0.6, textAlign: 'left'}}>Duree moyenne des sessions</p>
                    <Recharts.LineChart width={260} height={220} data={props.data}>
                        <Recharts.XAxis 
                            dataKey={"day"}
                            tickSize={1}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(day) => weekdays[day - 1]}
                            style={{fontSize: 14, color: 'white'}}
                        />
                        <Recharts.YAxis dataKey={'sessionLength'} unit={'min'} hide domain={['dataMin - 5', 'dataMax + 5']} />
                        <Recharts.Tooltip content={<CustomLineToolTip />} />
                        <Recharts.Line 
                            type="monotone" 
                            dataKey="sessionLength" 
                            stroke="white" 
                            opacity={0.6} 
                            strokeWidth={2} 
                            dot={false} 
                            activeDot
                        />
                    </Recharts.LineChart>
                </div>
                
            )
}

export default LineChart;