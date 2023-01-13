import mockImg1 from "../../../../../../Assets/blogAssets/blog images-1.png";
import mockImg2 from "../../../../../../Assets/blogAssets/blog images-2.png";
import mockImg3 from "../../../../../../Assets/blogAssets/blog images-3.png";
import mockImg4 from "../../../../../../Assets/Header-Slider/slide 4.png";
import HeroCarousel from "./HeroCarousel";

const Main = () => {
  return (
    <>
      <div className="">
        {/* basic info */}
        <main className="flex flex-row min-h-[100vh] h-[100%] gap-[10px]">
          {/* image */}
          <section className="w-[542px] h-[720px]">
            <HeroCarousel>
              {/* First slide */}
              <div className=" w-[532px] h-[700px]] flex flex-row ">
                {/* Image slider */}
                <div className=" w-[532px] h-[700px] ">
                  <img
                    className=" w-[532px] h-[700px] object-cover "
                    src={mockImg1}
                    alt="img1"
                  />
                </div>
              </div>
              {/* second slide */}
              <div className=" w-[523px] h-[700px] flex flex-row">
                {/* Image slider */}
                <div className=" w-[532px] h-[700px] ">
                  <img
                    className="w-[532px] h-[700px] object-cover"
                    src={mockImg2}
                    alt="img1"
                  />
                </div>
              </div>
              {/* third slide */}
              <div className=" w-[532px] h-[700px] flex flex-row gap-[50px]">
                {/* Image slider */}
                <div className=" w-[532px] h-[700px] ">
                  <img
                    className=" w-[532px] h-[700px] object-cover"
                    src={mockImg3}
                    alt="img1"
                  />
                </div>
              </div>
              {/* fourth slide */}
              <div className=" w-[532px] h-[700px] flex flex-row gap-[50px]">
                {/* Image slider */}
                <div className=" w-[532px] h-[700px] ">
                  <img
                    className=" w-[532px] h-[700px] object-cover "
                    src={mockImg4}
                    alt="img1"
                  />
                </div>
              </div>
            </HeroCarousel>
          </section>

          {/* description */}
          <section className="max-w-[530px] w-[530px] h-[700px] max-h-[700px]">
            {/* heading */}
            <h1 className=" text-[#D71818EC] leading-[46px] font-medium text-[25px] ">
              Asaro - <span className=" font-normal">Yam Pottage</span>
            </h1>
            {/* details */}
            <div className="">
              <p className=" font-normal leading-[30px] text-[16px] text-[#000] w-[516px] text-justify">
                Asaro which is also known as Yam pottage or Yam porridge is a
                very delicious Yam recipe though it’s eaten by most tribes in
                Nigeria however, it is more common in the Yoruba-speaking parts
                of Nigeria. Made From:
              </p>
              <ul className="pt-[30px] flex flex-col gap-[20px] list-none">
                <li className=" flex flex-row gap-[16px] items-center justify-start text-justify">
                  <span className="w-[5px] h-[15px] bg-[#000]"></span>
                  <span className="text-[#000] leading-[26px] text-[18px] font-normal">
                    Yam
                  </span>
                </li>
                <li className=" flex flex-row gap-[16px] items-center justify-start text-justify">
                  <span className="w-[5px] h-[15px] bg-[#000]"></span>
                  <span className="text-[#000] leading-[26px] text-[18px] font-normal">
                    Palm oil
                  </span>
                </li>
                <li className=" flex flex-row gap-[16px] items-center justify-start text-justify">
                  <span className="w-[5px] h-[15px] bg-[#000]"></span>
                  <span className="text-[#000] leading-[26px] text-[18px] font-normal">
                    Mackerel fish
                  </span>
                </li>
              </ul>
            </div>
            {/* order food */}
            <div className=" pt-[41px] ">
              <form>
                {/* size */}
                <div className="flex flex-row pl-[55px] gap-[80px] h-[61px] items-center">
                  <label
                    htmlFor="size"
                    className=" font-bold text-[18px] leading-[25px]"
                  >
                    Size
                  </label>
                  <select
                    name="size"
                    id="size"
                    className="w-[236px] h-[61px] bg-[#000] text-[16px] text-[#fff] leading-[25px] font-normal text-start px-[20px]"
                  >
                    <option
                      value=""
                      className="w-[236px] !h-[51px] bg-[#fff] text-[16px] text-[#000] leading-[25px] font-normal text-start pl-[5px] "
                    >
                      Choose an option
                    </option>
                    <option
                      value="5 Litres"
                      className="w-[236px] !h-[51px] bg-[#fff] text-[16px] text-[#000] leading-[25px] font-normal text-start pl-[5px] "
                    >
                      5 Litres
                    </option>
                    <option
                      value="7 Litres"
                      className="w-[236px] !h-[51px] bg-[#fff] text-[16px] text-[#000] leading-[25px] font-normal text-start pl-[5px] "
                    >
                      7 Litres
                    </option>
                    <option
                      value="10 Litres"
                      className="w-[236px] !h-[51px] bg-[#fff] text-[16px] text-[#000] leading-[25px] font-normal text-start pl-[5px] "
                    >
                      10 Litres
                    </option>
                  </select>
                </div>
                {/* quantity */}
                <div className="flex flex-row pl-[55px] gap-[37px] h-[61px] items-center pt-[58px]">
                  <label
                    htmlFor="size"
                    className=" font-bold text-[18px] leading-[25px]"
                  >
                    Quantity
                  </label>
                  <select
                    name="quantity"
                    id="quantity"
                    className="w-[236px] h-[61px] bg-[#000] text-[16px] text-[#fff] leading-[25px] font-normal text-start px-[20px]"
                  >
                    <option
                      value=""
                      className="w-[236px] !h-[51px] bg-[#fff] text-[16px] text-[#000] leading-[25px] font-normal text-start pl-[5px] "
                    >
                      Choose an option
                    </option>
                    <option
                      value="1"
                      className="w-[236px] !h-[51px] bg-[#fff] text-[16px] text-[#000] leading-[25px] font-normal text-start pl-[5px] "
                    >
                      1
                    </option>
                    <option
                      value="2"
                      className="w-[236px] !h-[51px] bg-[#fff] text-[16px] text-[#000] leading-[25px] font-normal text-start pl-[5px] "
                    >
                      2
                    </option>
                    <option
                      value="3"
                      className="w-[236px] !h-[51px] bg-[#fff] text-[16px] text-[#000] leading-[25px] font-normal text-start pl-[5px] "
                    >
                      3
                    </option>
                  </select>
                </div>
                <input
                  type="submit"
                  value="ADD TO CART"
                  className="w-[236px] h-[61px] text-center shadow-[2px_5px_2px_0_#be0404] text-[#000] text-[18px] font-normal leading-[25px] mt-[50px]"
                />
              </form>
            </div>
          </section>
        </main>
        {/* detailed info */}
        <aside className="flex flex-row w-[100%] pt-[150px] min-h-[100vh] h-[100%] ">
          <section className="flex basis-1/3 justify-center">
            <h1 className="text-[20px] font-normal text-center leading-[26px]  text-[#000]">
              <button className=" hover:border-b transition w-[453px] h-[99px] hover:text-[#DBFF00] hover:border-b-[#DBFF00] hover:font-bold ">
                Description
              </button>
            </h1>
          </section>
          <section className="flex basis-1/3 justify-center">
            <h1 className="text-[20px] font-normal text-center leading-[26px]  text-[#000]">
              <button className=" hover:border-b transition w-[453px] h-[99px] hover:text-[#DBFF00] hover:border-b-[#DBFF00] hover:font-bold ">
                Additional Information
              </button>
            </h1>
          </section>
          <section className="flex basis-1/3 justify-center">
            <h1 className="text-[20px] font-normal text-center leading-[26px]  text-[#000]">
              <button className=" hover:border-b transition w-[453px] h-[99px] hover:text-[#DBFF00] hover:border-b-[#DBFF00] hover:font-bold ">
                Review
              </button>
            </h1>
          </section>
        </aside>
      </div>
    </>
  );
};

export default Main;
