import { AgChartsReact } from 'ag-charts-react';

export  const PieChart = (props) => {
  const protein = "Protein";
  const fat = "Fat";
  const carbohydrate = "Carbohydrate";
  const calroies = "Calroies";
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

  return <AgChartsReact options={options} />;
}

export default PieChart;