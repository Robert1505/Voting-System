import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getLatestQuestion } from "../../actions";

const useStyles = makeStyles({
  chartContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Chart = (props) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  console.log("data", data);

  useEffect(() => {
    props.getLatestQuestion();
    generateData();
  }, []);

  useEffect(() => {
    generateData();
  }, [props.options]);

  // const data = [
  //     {name: "Facebook", value: 10000},
  //     {name: "Instagram", value: 100020},
  //     {name: "Milmoi", value: 100100},
  // ]

  const generateData = () => {
    const tempData = [];
    props.options.forEach((option) => {
      tempData.push({
        name: option.name,
        value: option.votes,
      });
    });
    setData(tempData);
  };
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{fontSize: "18px"}}
      >
        {percent > 0 && `${data[index].name}`} <br></br>
        {percent > 0 && `${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className={classes.chartContainer}>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={true}
          label={renderCustomizedLabel}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
        >
            
          {data.map((entry, index) => {
              
              return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            })}
          
            
         
        </Pie>
      </PieChart>
  
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    options: state.options.options,
    question: state.options.question,
  };
};

export default connect(mapStateToProps, {
  getLatestQuestion,
})(Chart);
