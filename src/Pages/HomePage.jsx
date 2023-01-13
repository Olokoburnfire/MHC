import React from 'react';
import Banner from '../Components/Homepage-component/banner';
import Footer from "../Components/Footer-components/Footer";
import JoinBlog from '../Components/Footer-components/joinBlog';
import Testimonial from '../Components/Homepage-component/testimonial';
import OurQualities from '../Components/Homepage-component/why-us';
import MiniCategories from "../Components/Homepage-component/miniCategory";
import Header from '../Components/Homepage-component/header';

const HomePage = () => {
    return ( 
        <>

          <div className=" bg-home-texture bg-no-repeat max-w-[100vw] min-h-[100vh] flex flex-col ">
            <div className="">
              {/* Header */}
              <div className="">
                <Header />
              </div>
              {/* Body */}
              <div className=" flex flex-col ">
                <Banner />
                <MiniCategories />
                <OurQualities />
                <Testimonial />
              </div>
              {/* Footer */}
              <div className=" ">
                <JoinBlog />
                <Footer />
              </div>
            </div>
					</div>
        </>
     );
}
 
export default HomePage;