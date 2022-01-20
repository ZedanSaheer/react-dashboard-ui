import { VictoryContainer, VictoryPie } from "victory"
import "./charts.css"


const PieChart = () => {
    return (
        <div className="pie">
            <VictoryPie
                data={[
                    1,2,3,4,5,6,7
                ]} height={300}
                containerComponent={<VictoryContainer responsive={false}/>}
            />
        </div>
    )
}

export default PieChart
