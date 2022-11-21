import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import Button from "../Button/Button";
import { earningData, data, lineOptions } from "../../data/dummy";
import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

const Ecommerce = () => {
  Chart.register(ArcElement);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  return (
    <section className="p-10 flex justify-center items-center flex-col">
      <div className="flex gap-4 md:flex-col pb-8">
        <div className="bg-white w-72 p-4 rounded">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-gray text-sm">Earnings</h2>
              <span className="font-semibold text-xl">$63,448.78</span>
              <GoPrimitiveDot color="#03C9D7" />
              <Button text="Download" />
            </div>
            <div className="rounded-full bg-midBlue h-12 w-12 flex justify-center items-center">
              <BsCurrencyDollar color="#fff" size={20} />
            </div>
          </div>
        </div>
        <div className="flex gap-1 md:flex-col">
          {earningData.map((data) => {
            return (
              <div className="bg-white rounded pl-4 py-4 pr-20 flex flex-col gap-4">
                <div
                  className="rounded-full h-12 w-12 flex justify-center items-center"
                  style={{ background: data.iconBg }}
                >
                  {data.icon}
                </div>

                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <span className="font-bold">{data.amount}</span>
                    <span className="text-red">{data.percentage}</span>
                  </div>
                  <span className="text-gray">{data.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white p-4 rounded flex">
        <div>
          <h1 className="font-bold text-xl pb-4">Revenue Updates</h1>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex gap-2">
                <h2 className="text-xl font-bold">$93,438</h2>
                <div className="bg-green rounded-full w-10 h-10 flex justify-center items-center">
                  <span className="font-bold text-white">23%</span>
                </div>
              </div>
              <span className="text-gray">Budget</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-bold">$48,487</h2>
              <span className="text-gray">Expense</span>
            </div>
          </div>
          <div className="py-10">
            <Line data={data} options={lineOptions} />
          </div>
          <Button text="Download Report" />
        </div>

        <div className="m-4" style={{borderLeft: "2px solid rgb(209 213 219)"}}></div>

        
      </div>
    </section>
  );
};

export default Ecommerce;
