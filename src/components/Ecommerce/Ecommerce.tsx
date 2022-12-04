import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import Button1 from "../Button/Button";
import { earningData, data, lineOptions } from "../../data/dummy";
import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Button } from "@mui/material";

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
import "../../index.css";
import Pie from "../Pie/Pie";
import Bar from "../Bar/Bar";

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
    <section className="pt-1 flex justify-center items-center flex-col px-5 md:block ">
      <div className="flex gap-4 md:flex-col pb-8 flex-wrap">
        <div className="bg-white w-72 p-4 rounded md:w-full">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-gray text-sm">Earnings</h2>
              <span className="font-semibold text-xl">$63,448.78</span>
              <GoPrimitiveDot color="#03C9D7" />
              <Button
                style={{
                  backgroundColor: "#03C9D7",
                }}
                variant="contained"
              >
                Download
              </Button>
            </div>
            <div className="rounded-full bg-midBlue h-12 w-12 flex justify-center items-center">
              <BsCurrencyDollar color="#fff" size={20} />
            </div>
          </div>
        </div>
        <div className="flex gap-1 md:flex-col flex-wrap">
          {earningData.map((data, index) => {
            return (
              <div
                className="bg-white rounded pl-4 py-4 pr-20 flex flex-col gap-4"
                key={index}
              >
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

      <div className="flex gap-2 flex-wrap md:flex-col mb-6">
        <div className="bg-white p-4 rounded flex md:flex-col">
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
            <div className="py-10 md:hidden w-72">
              <Line data={data} options={lineOptions} />
            </div>
            <div className="flex justify-center items-center">
              {/* <Button text="Download Report" /> */}
            </div>
          </div>

          <div
            className="m-4"
            style={{ borderLeft: "2px solid rgb(209 213 219)" }}
          ></div>

          <div className="flex flex-col justify-between">
            <div className="flex justify-end gap-2">
              <div className="flex gap-1">
                <GoPrimitiveDot className="mt-1" />
                <span>Expense</span>
              </div>
              <div className="flex gap-1">
                <GoPrimitiveDot className="mt-1" color="rgb(74 222 128)" />
                <span>Budget</span>
              </div>
            </div>
            <div className="px-4 py-10">
              {/* <Bar isOpen={false} /> */}
              <div className="p-4 flex justify-center rotate-180 gap-2 ">
                <div className="bg-green w-10 h-96 md:w-8">
                  <div className="bg-black w-10 h-20 md:w-8"></div>
                </div>
                <div className="bg-green w-10 h-72 md:w-8">
                  <div className="bg-black w-10 h-20 md:w-8"></div>
                </div>
                <div className="bg-green w-10 h-40 md:w-8">
                  <div className="bg-black w-10 h-10 md:w-8"></div>
                </div>
                <div className="bg-green w-10 h-60 md:w-8">
                  <div className="bg-black w-10 h-28 md:w-8"></div>
                </div>
                <div className="bg-green w-10 h-80 md:w-8">
                  <div className="bg-black w-10 h-32 md:w-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2">
          <div className="bg-midBlue rounded px-2.5">
            <div
              className=" text-white py-12 px-6 w-96 rounded md:w-full"
              // style={{ width: "405px" }}
            >
              <div className="flex justify-between">
                <h2 className="font-semibold">Earnings</h2>
                <div className="flex flex-col">
                  <span className="font-semibold">$63,448.78</span>
                  <span>Monthly revenue</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-center rotate-180 gap-2 ">
              <div className="bg-white w-16 h-6 md:w-10"></div>
              <div className="bg-white w-16 h-12 md:w-10"></div>
              <div className="bg-white w-16 h-16 md:w-10"></div>
              <div className="bg-white w-16 h-12 md:w-10"></div>
              <div className="bg-white w-16 h-28 md:w-10"></div>
            </div>
          </div>

          <Pie height="40vh" />
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
