import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
    labels?: string[];
    name: string;
    series?: number[];
}

const PieChart = ({ labels = [], name, series = []}: Props) => {
    return (
        <div className='pie-chart'>
            <ReactApexChart
                options={buildPieChartConfig(labels, name)}
                type="donut"
                width={"100%"}
                height={"300px"}
                series={series}
            />
        </div>
    );
}

export default PieChart;