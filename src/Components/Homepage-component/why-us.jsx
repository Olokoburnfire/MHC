import React from 'react';
import Headset from "../../Assets/vectors/Vector-why-headset.png";
import SafePayment from "../../Assets/vectors/Vector-why-payment.png";
import Van from "../../Assets/vectors/vector-why-delivery.png";
import "./qualities.css";


const OurQualities = () => {
    return ( 
        <div className=" max-w-[100vw] w-[100vw] h-fit flex items-center justify-center py-20">
            <div className="w-[100vw] h-[100%] flex flex-row items-center justify-around px-10">
                {/* column 1 */}
                <div className="flex flex-col  items-center justify-center px-4 py-6 why-card w-[286.89px] h-[376px]">
                    <img src={Van} alt="Delivery van" className="vector mb-14 w-[64px] h-auto" />
                    <h1 className="why-heading w-full text-2xl font-display mb-4">Delivery</h1>
                    <p className="why-words text-base text-center">
                    We currently offer delivery to western states of Nigeria. Delivery time are on the payment date and availability of ingredients
                    </p>
                </div>
                {/* column 2 */}
                <div className="flex flex-col  items-center justify-center px-4 py-6 why-card w-[286.89px] h-[376px]">
                    <img src={Headset} alt="Headset" className="vector mb-14 w-[64px] h-auto" />
                    <h1 className="why-heading w-full text-2xl font-display mb-4">Customer Service</h1>
                    <p className="why-words text-base text-center ">
                    We are available for all  inquiries - <br /> Contact us through our mediums on our contact page.
                    </p>
                </div>
                {/* column 3 */}
                <div className="flex flex-col  items-center justify-center px-4 py-6 why-card w-[286.89px] h-[376px]">
                    <img src={SafePayment} alt="safe payment" className="vector mb-14 w-[64px] h-auto"/>
                    <h1 className="why-heading w-full text-2xl font-display mb-4">Multi Payment Options</h1>
                    <p className="why-words text-base text-center">
                    We accept Bank Transfers, Card - Payments and Cash APP.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default OurQualities;