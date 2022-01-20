import {VictoryChart,VictoryTheme,VictoryBar, VictoryContainer} from 'victory'
import "./charts.css"

const BarChart = () => {
    return (
        <div className='bar'>
            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    alignment="start"
                    data={[1,2,3,4,5,6,7]}
                    containerComponent={<VictoryContainer responsive={false}/>}
                    height={200}
                />
            </VictoryChart>
        </div>
    )
}

export default BarChart
