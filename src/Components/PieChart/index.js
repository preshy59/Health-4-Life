import { AgChartsReact } from 'ag-charts-react';

export  const PieChart = (props) => {
  // creating of const variable with its value
  const protein = "Protein";
  const fat = "Fat";
  const carbohydrate = "Carbohydrate";
  const calroies = "Calroies";

  // create a const variable that store  objects of an arrays
  const options = {
    data: [
        { label:protein, value: props.protein},
        { label:fat, value: props.fat},
        { label:carbohydrate, value: props.carbs},
        { label:calroies,value: props.calroies },
    ],
    series: [
      {
        type: 'pie',
        angleKey: 'value',
        calloutLabelKey: 'label',
        sectorLabelKey: 'value',
        sectorLabel: {
          color: 'white',
          fontWeight: 'bold',
        }
      },
    ],
  };
    // assign the const variable option to the AgChartReact
  return <AgChartsReact options={options} />;
}

export default PieChart;