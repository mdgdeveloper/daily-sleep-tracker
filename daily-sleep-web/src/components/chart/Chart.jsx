import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./chart.css";

const Chart = ({ data }) => {

  return (
    <div className="chart-main">
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          className="big-chart"
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 3" />
          <XAxis dataKey="day" className="chart-legend" />
          <Tooltip className="chart-legend" />
          <Legend className="chart-legend"/>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth="3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
