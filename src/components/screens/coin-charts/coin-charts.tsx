import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { COIN_CHART } from "../../../config/api";
import { dataChart } from "../../../utils/data-chart";
import { chartDays } from "../../../config/data";

Chart.register(...registerables);

const CoinCharts = ({ id, currency }: { id: string; currency: string }) => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(COIN_CHART(id, days, currency))
      .then(res => {
        setHistoricData(res.data.prices);
        setLoading(false);
      })
      .catch(e => {
        setError(true);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return error ? (
    <span>Charts loading failed...</span>
  ) : (
    <div>
      {loading && (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 64,
                position: "static",
                margin: "30px 50%",
              }}
              spin
            />
          }
        />
      )}
      {historicData.length && (
        <>
          <Line
            data={dataChart(historicData, days, currency)}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map(day => (
              <Button
                type={day.value === days ? "primary" : "default"}
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                }}
              >
                {day.label}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { CoinCharts };
