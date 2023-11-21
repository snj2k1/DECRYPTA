type DataChartType = {
  labels: string[];
  datasets: {
    data: number[];
    label: string;
    borderColor: string;
  }[];
};

export const dataChart = (
  data: Array<[number, number]>,
  days: number,
  currency: string,
): DataChartType => {
  const labels = data.map(coin => {
    const date = new Date(coin[0]);
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString();
  });
  const datasets = [
    {
      data: data.map(coin => coin[1]),
      label: `Price ( Past ${days} Days ) in ${currency.toUpperCase()}`,
      borderColor: "#1677ff",
    },
  ];

  return {
    labels,
    datasets,
  };
};
