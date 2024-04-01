import "./Pricing.css";
import { Span } from "next/dist/trace";
import PricingBox from "./PricingBox";
import PricingBox2 from "./PricingBox2";
import PricingBox3 from "./code/pricingBox3";

export default function Pricing() {
  return (
    <div className="PricingMainCont">
      {/* <div className="backPricing"></div> */}
      <div className="mainPricing">
        <div className="head flex flex-col uppercase ml-[50px] text-whites text-2xl sm:text-3xl lg:text-4xl mt-4 mb-[40px] sm:ml-[100px] md:ml-[150px] ">
          <div>
            PLANS & PRICING
          </div>
          <div>
            <img className="w-[220px] sm:w-[270px] lg:w-[340px] mt-2" src="/pricingLine.png" alt="pricing line" />
          </div>
          
        </div>

        {/* <PricingBox/> */}
        <PricingBox3/>
        {/* <PricingBox2/> */}

          <div className="mt-[40px] md:mt-[80px]">
            <div className="w-full text-center text-whites text-xl sm:text-3xl md:text-4xl font-white capitalize">
              propose a  <span className=" text-pink">custom</span> Pricing ?
            </div>
            <div className="pricingBtnCont my-6 ">
                <div className="m-auto w-[330px] cursor-pointer">
                  <img src="/btnContact.Png" alt="contact btn" />
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}
