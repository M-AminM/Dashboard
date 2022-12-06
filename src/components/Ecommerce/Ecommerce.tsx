import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import Button1 from "../Button/Button";
import { earningData, data, lineOptions } from "../../data/dummy";
// import { Line } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Button } from "@mui/material";
import Line from "../../components/Line/Line";
import "../../index.css";
import Pie from "../Pie/Pie";
import Bar from "../Bar/Bar";

interface Props {
  isOpen: boolean;
}

const Ecommerce: React.FC<Props> = ({ isOpen }) => {
  return (
    <section className="px-8 py-6">
      <div className="flex items-start gap-4 md:flex-col">
        <div className="bg-white p-2 rounded flex justify-between mb-6 w-full ">
          <div>
            <h2 className="font-bold">Earnings</h2>
            <span>$63,448.78</span>
            <GoPrimitiveDot color="#03C9D7" className="mb-3" />
            <Button style={{ backgroundColor: "#03C9D7" }} variant="contained">
              Download
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-midBlue w-10 h-10 rounded-full flex justify-center items-center">
              <BsCurrencyDollar color="#fff" />
            </div>
          </div>
        </div>
        {earningData.map((data, index) => {
          return (
            <div
              className="bg-white rounded flex flex-col p-4 w-full "
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
      <div className="flex gap-6 md:flex-col mb-4">
        <div className="bg-white rounded w-full">
          <Line isOpen={false} />
        </div>
        <div className="bg-white rounded w-full">
          <h2 className="font-semibold p-4">Recent Transactions</h2>

          <div className=" border-y-4 border-mainBg">
            <div className="flex justify-between  px-4 py-2">
              <div className="flex flex-col ">
                <span className="text-midBlue">01e4dsa</span>
                <span>johndoe</span>
              </div>
              <div className="flex justify-center items-center">
                <span>2021-09-01</span>
              </div>
              <div className="bg-midBlue px-2 py-1 rounded flex justidy-center items-center text-white">
                <p>$43.95</p>
              </div>
            </div>
          </div>

          <div className=" border-b-4 border-mainBg">
            <div className="flex justify-between  px-4 py-2">
              <div className="flex flex-col ">
                <span className="text-midBlue">01e4dsa</span>
                <span>johndoe</span>
              </div>
              <div className="flex justify-center items-center">
                <span>2021-09-01</span>
              </div>
              <div className="bg-midBlue px-2 py-1 rounded flex justidy-center items-center text-white">
                <p>$43.95</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between  px-4 py-2">
              <div className="flex flex-col ">
                <span className="text-midBlue">01e4dsa</span>
                <span>johndoe</span>
              </div>
              <div className="flex justify-center items-center">
                <span>2021-09-01</span>
              </div>
              <div className="bg-midBlue px-2 py-1 rounded flex justidy-center items-center text-white">
                <p>$43.95</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 w-full md:flex-col">
        <div className="bg-white p-2 ">
          <h2 className="font-semibold text-lg pb-4">Revenue Updates</h2>
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex gap-2">
                <h2 className="text-lg font-semibold">$93,438</h2>
                <div className="bg-green rounded-full w-10 h-10 flex justify-center items-center">
                  <span className="font-semibold text-sm text-white">23%</span>
                </div>
              </div>
              <span className="text-gray">Budget</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-lg font-semibold">$48,487</h2>
              <span className="text-gray">Expense</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded px-2.5 w-1/2 md:w-full">
          <Bar isOpen={isOpen} />
          {/* <div
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
          </div> */}
        </div>
        <div className="bg-white p-4 w-1/2 md:w-full">
          <Pie height="40vh" />
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
