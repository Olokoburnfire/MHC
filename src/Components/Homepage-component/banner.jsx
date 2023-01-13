import React from "react";
import { Link } from "react-router-dom";


const Banner = () => {
	
    return ( 
			<>
			<div className="max-w-[100vw] h-fit mb-20 ">
				<div className="max-w-[100vw] w-[100vw] h-[306px] bg-banner-texture bg-no-repeat bg-contain flex flex-col items-center justify-center gap-[40px] ">
					<p className=" font-medium text-[22px] text-[#fff] leading-[39px] " >
              Want your favorite soup tailored to your taste? -Let's Have the details
            </p>

            {/* Start your order button */}
            <Link
            className=" w-fit font-bold text-[16px] border-b-[3px] border-[#fff] leading-[26px] text-[#fff] text-center opacity-100 "
            >
            	START YOUR ORDER
            </Link>
				</div>
			</div>
			</>

     );
}
 
export default Banner;