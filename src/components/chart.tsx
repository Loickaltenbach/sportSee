import * as Recharts from 'recharts';

interface ChartProps {
    type: "bar" | "radar" | "line" | "doughnut",
    data: any
}

const CustomLineToolTip = ({active, payload, label}: any) => {
    if (active && payload && payload.length) {
        return (
            <div style={{width: 50, height: 30, backgroundColor: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{fontSize: 12}}>{`${payload[0].value}min`}</p>
            </div>
        );
    }

    return null;
}

const CustomBarToolTip = ({active, payload, label}: any) => {
    if (active && payload && payload.length) {
        return (
            <div style={{width: 50, height: 60, backgroundColor: 'red', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                <p style={{fontSize: 12, color: 'white'}}>{`${payload[0].value}kg`}</p>
                <p style={{fontSize: 12, color: 'white'}}>{`${payload[1].value}kCal`}</p>
            </div>
        );
    }

    return null;
}

export const Chart = (props: ChartProps) => {
    const margin = {top: 10, right: 30, bottom: 20, left: 50};
    const width = 460 - margin.left - margin.right;


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

    const drawChart = () => {
        if(props.type === 'bar') {
            return (
                <div style={{backgroundColor: '#FBFBFB', borderRadius: 15, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <p style={{fontSize: 12, marginLeft: 25, fontWeight: 'bold'}}>Activite quotidienne</p>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: 200, marginRight: 25}}>
                            <p style={{fontSize: 12}}>• Poids (kg)</p>
                            <p style={{fontSize: 12, color: 'red'}}>• Calories brulees (kcal)</p>
                        </div>
                    </div>
                    <Recharts.BarChart
                        title='Activite quotidienne'
                        width={width * 1.3}
                        height={220}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barGap={8}
                    >
                        <Recharts.CartesianGrid strokeDasharray="3 1" />
                        <Recharts.XAxis 
                            dataKey="day" 
                            name="date"
                            tickFormatter={(time: number) => new Date(time).getDate().toString()}
                            tickLine={false}
                            tickCount={7}
                        />
                        <Recharts.Tooltip 
                            content={<CustomBarToolTip />}
                        />
                        <Recharts.YAxis 
                            dataKey={"kilogram"}
                            orientation={'right'} 
                            domain={['dataMin - 1', 'dataMax + 1']} 
                            allowDataOverflow={true}
                            allowDecimals={false}
                        />
                        <Recharts.Bar 
                            dataKey="kilogram" 
                            fill="black" 
                            radius={[10, 10, 0, 0]} 
                            legendType={'circle'} 
                            unit={'kg'} 
                            barSize={6} 
                            minPointSize={5}
                        />
                        <Recharts.Bar 
                            dataKey="calories" 
                            fill="red" 
                            radius={[10, 10, 0, 0]} 
                            legendType={'circle'} 
                            unit={'Kcal'} 
                            barSize={6}
                            minPointSize={5}
                        />
                    </Recharts.BarChart>
                </div>
                
            )
        } else if(props.type === 'radar') {
            const kinds = ["cardio", "energy", "endurance", "strength", "speed", "intensity"]
            return (
                <div style={{backgroundColor: "#282D30", width: 150, height: '100%', borderRadius: 15, display: 'flex', alignItems: 'center'}}>
                    <Recharts.RadarChart style={{fontSize: 6, fontWeight: 'bold'}} width={150} height={120} data={props.data}>
                        <Recharts.PolarGrid />
                        <Recharts.PolarAngleAxis tickFormatter={(kind) => kinds[kind - 1]} dataKey="kind" />
                        <Recharts.Radar label={(entry: any) => entry.value} dataKey="value" stroke="none" fill="red" fillOpacity={0.4} />
                    </Recharts.RadarChart>
                </div>
                
            )
        } else if(props.type === 'line') {
            const weekdays = ["L","M","M","J","V","S","D"];
            return (
                <div style={{backgroundColor: "red", width: '100%', height: '100%', borderRadius: 15, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <p style={{fontSize: 12, color: 'white', opacity: 0.6, textAlign: 'left', marginLeft: 15, width: 100}}>Duree moyenne des sessions</p>
                    <Recharts.LineChart width={150} height={100} data={props.data}>
                        <Recharts.XAxis 
                            dataKey={"day"}
                            tickSize={1}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(day) => weekdays[day - 1]}
                            style={{fontSize: 14, color: 'white'}}
                        />
                        <Recharts.YAxis dataKey={'sessionLength'} unit={'min'} hide />
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
        } else {
            const circleSize = 150;
            console.log(props.data)
            return (
                <div style={{backgroundColor: "#FBFBFB", width: '100%', height: '100%', borderRadius: 15}}>
                    <Recharts.PieChart
                        width={circleSize}
                        height={circleSize}
                    >
                        <Recharts.Pie 
                            fill='white' 
                            dataKey={'value'} 
                            data={props.data}
                            innerRadius="68%"
                            startAngle={180}
                            endAngle={-360}
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
    }

    return (
        <div>
            {drawChart()}
        </div>
    )
}