import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./chartBar.css";

const ChartBar = ({ data }) => {
  return (
    <div className="chart-main">
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
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
          <XAxis dataKey="day" />
          <Tooltip />
          <Legend />
          <Bar dataKey="sleepRating" fill="#8884d8" />
          <Bar dataKey="dayRating" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;
