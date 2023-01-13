import { React, useState } from "react";
import FaqHeader from "../Components/Header-components/faqHeader";
import List_Item from "../Assets/miscellaneous/list-item.png";
import JoinBlog from "../Components/Footer-components/joinBlog";
import Footer from "../Components/Footer-components/Footer";
// an array of the questions and answers
const faqs = [
  {
    id: 1,
    question: "How do I order a Meal?",

    answer1: `Step 1: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,

    answer2: `Step 2: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui is iste natus error sit voluptatem eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,

    answer3: ` Step 3:Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
       quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui  quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui`,
  },
  {
    id: 1,
    question: "How do I Pay?",

    answer1: `Step 1: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,

    answer2: `Step 2: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui is iste natus error sit voluptatem eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,

    answer3: ` Step 3:Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
       quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui  quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui`,
  },
  {
    id: 1,
    question: "Is there a minimum order amount?",

    answer1: `Step 1: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,

    answer2: `Step 2: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui is iste natus error sit voluptatem eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
  {
    id: 1,
    question: "Can I pay Cash on Delivery?",

    answer1: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,
  },
  {
    id: 1,
    question: "Can I send my Special Cooking Instructions?",

    answer1: `Step 1: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,

    answer2: `Step 2: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui is iste natus error sit voluptatem eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
  {
    id: 1,
    question: "What Payment options are accepted?",

    answer1: `Step 1: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,
  },
  {
    id: 1,
    question: "What area do you deliver to?",

    answer1: `Step 1: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem`,

    answer2: `Step 2: quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui is iste natus error sit voluptatem eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
];

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toogle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className=" max-w-[100vw]  ">
      {/* header section */}
      <header className="">
        <FaqHeader />
      </header>
      <main>
        {/* the faqs */}
        <div className="accordion w-[100vw] ">
          <div className="w-full h-full px-[40px] pt-[25px] bg-transparent">
            {faqs.map((item, i) => (
              <div className="item h-full w-full pb-[1px] mb-7 border-b-[1px] bg-gradient-to-r from-white via-[#d71818] via-[#d30606] via-[#d71818] to-white">
                <div className="w-full h-full bg-white px-10 py-5">
                  {/* question */}
                  <div
                    className="question flex justify-between items-center flex-row hover:cursor-pointer h-[80px] w-full "
                    onClick={() => toogle(i)}
                  >
                    <h1 className="font-display font-normal text-2xl leading-10 flex flex-row gap-10 item-center justify-center">
                      <img
                        src={List_Item}
                        alt="faq question"
                        className=" w-[6px] h-[6px] m-auto "
                      />
                      {item.question}
                    </h1>
                    <span
                      className={
                        selected === i
                          ? "flex border-2 border-[rgba(211,6,6,1)] w-[40px] h-[29.75px] text-lg justify-center items-center  text-[rgba(211,6,1,1)] font-display font-normal "
                          : " hidden"
                      }
                    >
                      x
                    </span>
                  </div>
                  {/* answer */}
                  <div
                    className={selected === i ? "answer show w-full" : "answer"}
                  >
                    <div className="w-full flex flex-col items-center justify-center  pt-10 pb-5 px-10">
                      <p className="ans font-display font-normal text-base text-black leading-7 pb-5">
                        {item.answer1}
                      </p>
                      <p className="ans font-display font-normal text-base text-black leading-7 pb-5">
                        {item.answer2}
                      </p>
                      <p className="ans font-display font-normal text-base text-black leading-7 pb-5">
                        {item.answer3}
                      </p>
                    </div>
                  </div>
                  {/* <div className="gradient h-px w-full"></div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* join blog section */}
        <section>
          <JoinBlog />
        </section>
      </main>
      {/* footer section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Faqs;
