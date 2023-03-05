import * as Recharts from "recharts";
import { ChartProps } from './chartProps';

const CustomBarToolTip = ({active, payload}: any) => {
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

const BarChart = (props: ChartProps) => {

    return (
        <div style={{backgroundColor: '#FBFBFB', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <p style={{fontSize: 12, marginLeft: 25, fontWeight: 'bold'}}>Activite quotidienne</p>
                <div style={{display: 'flex', justifyContent: 'space-between', width: 200, marginRight: 25}}>
                    <p style={{fontSize: 12}}>• Poids (kg)</p>
                    <p style={{fontSize: 12, color: 'red'}}>• Calories brulees (kcal)</p>
                </div>
            </div>
            <Recharts.BarChart
                title='Activite quotidienne'
                width={800}
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
                    dataKey={"calories"}
                    orientation={'right'} 
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
}

export default BarChart;