import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import Button from "../Button/Button";
import { earningData } from "../../data/dummy";

const Ecommerce = () => {
  return (
    <section className="p-10 flex justify-center items-center">
      <div className="flex gap-4">
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
        <div className="flex gap-1">
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
    </section>
  );
};

export default Ecommerce;
