import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartWrapper, CustomToolTip } from "./CustomChart.styled";
import data from "../../api/holdingsGET.json";

// const data = [
//   { name: "Page A", uv: 400 },
//   { name: "Page B", uv: 300 },
//   { name: "Page C", uv: 200 },
//   { name: "Page D", uv: 250 },
// ];

const CustomTooltip = (props: any) => {
  const { active, payload, label } = props;

  if (active && payload && payload.length) {
    return (
      <CustomToolTip>
        <p className="label">{`Date: ${label}`}</p>
        <p className="label">{`Value: ${payload[0].value}`}</p>
      </CustomToolTip>
    );
  }

  return null;
};

const CustomChart = () => {
  const { holdings } = data;
  console.log({ holdings });

  const formatData = () => {
    const formattedData = holdings.map((data) => {
      return {
        name: data.institution_price_as_of,
        uv: data.institution_value,
      };
    });
    return formattedData;
  };

  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          width={600}
          height={300}
          data={formatData()}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#FAB322" dot={false} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};
export default CustomChart;
