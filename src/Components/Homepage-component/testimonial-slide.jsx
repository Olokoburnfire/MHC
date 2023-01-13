import React from 'react';
import Carousel from "./testimonial-carousel";
import One from "../../Assets/testimonials/customer-one.png";
import Two from "../../Assets/testimonials/customer-two.png";
import Three from "../../Assets/testimonials/customer-3.png";
import Four from "../../Assets/testimonials/customer-four.png";
import {HiStar} from "react-icons/hi2"




const Slide = () => {
  return ( 
    <>
    <Carousel className=" mx-auto my-0" >
      {/* first slider */}
      <div className='flex flex-row gap-[30px] items-center justify-around' >
        {/* images */}
        <div className=" w-[293.56px] h-[294.04px] relative " >
          <div className="bg-portrait-texture bg-repeat-space bg-left-top w-[120px] h-[120px] bg-[27%]" ></div>

          <img src={One} 
          alt="John Doe's" 
          className=" rounded-full absolute top-0 left-0" />
        </div>
        {/* statement */}
        <div className=" flex flex-col items-start justify-center  " >
          <h1 className=" w-[301px] h-[36.5px] leading-[125%] font-bold text-[24px] text-[#d30606] text-start ">
            John Doe
          </h1>
          <p className=" text-start w-[450px] max-h-[148.5px] text-[#000] text-[18.25px] font-normal leading-[36.5px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa est veniam vitae qui, facilis dignissimos, quisquam reprehenderit sed minus corporis consectetur rerum accusantium enim voluptas sequi aliquam corrupti
          </p>
          <div className=" flex flex-row gp-[20px] ">
            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "transparent" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "transparent" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />
          </div>
        </div>
      </div>

      {/* second slider */}
      <div className='flex flex-row gap-[30px] items-center justify-around' >
        {/* images */}
        <div className=" w-[293.56px] h-[294.04px] relative " >
          <div className="bg-portrait-texture bg-repeat-space bg-left-top w-[120px] h-[120px] bg-[27%]" ></div>

          <img src={Two} 
          alt="Mary Sly" 
          className=" rounded-full absolute top-0 left-0" />
        </div>
        {/* statement */}
        <div className=" flex flex-col items-start justify-center  " >
          <h1 className=" w-[301px] h-[36.5px] leading-[125%] font-bold text-[24px] text-[#d30606] text-start ">
            Mary Sly
          </h1>
          <p className=" text-start w-[450px] max-h-[148.5px] text-[#000] text-[18.25px] font-normal leading-[36.5px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa est veniam vitae qui, facilis dignissimos, quisquam reprehenderit sed minus corporis consectetur rerum accusantium enim voluptas sequi aliquam corrupti
          </p>
          <div className=" flex flex-row gp-[20px] ">
            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "transparent" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "transparent" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />
          </div>
        </div>
      </div>

      {/* third slider */}
      <div className='flex flex-row gap-[30px] items-center justify-around' >
        {/* images */}
        <div className=" w-[293.56px] h-[294.04px] relative " >
          <div className="bg-portrait-texture bg-repeat-space bg-left-top w-[120px] h-[120px] bg-[27%]" ></div>

          <img src={Three} 
          alt="Jay Robson" 
          className=" rounded-full absolute top-0 left-0" />
        </div>
        {/* statement */}
        <div className=" flex flex-col items-start justify-center  " >
          <h1 className=" w-[301px] h-[36.5px] leading-[125%] font-bold text-[24px] text-[#d30606] text-start ">
            Jay Robson
          </h1>
          <p className=" text-start w-[450px] max-h-[148.5px] text-[#000] text-[18.25px] font-normal leading-[36.5px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa est veniam vitae qui, facilis dignissimos, quisquam reprehenderit sed minus corporis consectetur rerum accusantium enim voluptas sequi aliquam corrupti
          </p>
          <div className=" flex flex-row gp-[20px] ">
            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "transparent" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "transparent" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />
          </div>
        </div>
      </div>

      {/* Fourth slider */}
      <div className='flex flex-row gap-[30px] items-center justify-around' >
        {/* images */}
        <div className=" w-[293.56px] h-[294.04px] relative " >
          <div className="bg-portrait-texture bg-repeat-space bg-left-top w-[120px] h-[120px] bg-[27%]" ></div>

          <img src={Four} 
          alt="Ed Sheeran" 
          className=" rounded-full absolute top-0 left-0" />
        </div>
        {/* statement */}
        <div className=" flex flex-col items-start justify-center  " >
          <h1 className=" w-[301px] h-[36.5px] leading-[125%] font-bold text-[24px] text-[#d30606] text-start ">
            Ed Sheeran
          </h1>
          <p className=" text-start w-[450px] max-h-[148.5px] text-[#000] text-[18.25px] font-normal leading-[36.5px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa est veniam vitae qui, facilis dignissimos, quisquam reprehenderit sed minus corporis consectetur rerum accusantium enim voluptas sequi aliquam corrupti
          </p>
          <div className=" flex flex-row gp-[20px] ">
            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "#d30606" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "transparent" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />

            <HiStar 
            fill= "transparent" 
            stroke='#d30606' 
            strokeWidth= "1px"
            height="20px"
            width= "20px"  />
          </div>
        </div>
      </div>

      
    </Carousel>
    </>

   );
}
 
export default Slide;