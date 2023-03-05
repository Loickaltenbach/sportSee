import { ChartProps } from "./chartProps";
import * as Recharts from "recharts";

const RadarChart = (props: ChartProps) => {
    const kinds = ["cardio", "energy", "endurance", "strength", "speed", "intensity"]
    return (
        <div style={{backgroundColor: "#282D30", borderRadius: 5, display: 'flex', alignItems: 'center'}}>
            <Recharts.RadarChart style={{fontSize: 6, fontWeight: 'bold'}} width={260} height={260} data={props.data}>
                <Recharts.PolarGrid />
                <Recharts.PolarAngleAxis tickFormatter={(kind) => kinds[kind - 1]} dataKey="kind" />
                <Recharts.Radar label={(entry: any) => entry.value} dataKey="value" stroke="none" fill="red" fillOpacity={0.4} />
            </Recharts.RadarChart>
        </div>
        
    )
}

export default RadarChart;