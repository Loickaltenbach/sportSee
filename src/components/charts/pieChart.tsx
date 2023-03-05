import { ChartProps } from "./chartProps";
import * as Recharts from "recharts";

const PieChart = (props: ChartProps) => {

    const circleSize = 260;
    const x = 0;
    const y = 5;
    const styles = { 
        transform: `translate(${x}px, ${y}px)`,
        fontSize: 12,
    };
    const styles2 = { 
        transform: `translate(${x}px, ${y + 12}px)`,
        fontSize: 12,
    };

    return (
        <div style={{backgroundColor: "#FBFBFB", borderRadius: 5}}>
            <Recharts.PieChart
                width={circleSize}
                height={circleSize}
            >
                <Recharts.Pie 
                    fill="white"
                    dataKey={'value'} 
                    data={props.data}
                    innerRadius="68%"
                    startAngle={160}
                    endAngle={-340}
                    cornerRadius={50}
                >
                    <Recharts.Label style={{fontSize: 14, textAlign: 'center', fontWeight: 'bold'}} value={`${JSON.stringify(props.data[0].value * 100)}%`} position={'centerBottom'} />
                    <Recharts.Label style={styles} value={`de votre`} position={'centerTop'} />
                    <Recharts.Label style={styles2} value={`objectif`} position={'centerTop'} />
                </Recharts.Pie>
            </Recharts.PieChart>
        </div>
    )
}

export default PieChart;