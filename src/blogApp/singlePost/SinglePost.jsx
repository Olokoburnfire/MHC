/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { HiShare, HiThumbUp, HiThumbDown } from "react-icons/hi";
import Navbar from "../../Components/Header-components/Nav-bar/secondNavBar";
import BlogImg from "../../Assets/blogAssets/blog images-2.png";

function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        `https://mayo-home.onrender.com/api/blog/${path}`
      );
      setPost(res.data.data);
    };
    getPost();
  }, [path]);

  return (
    <>
      <div className="max-w-[100vw] w-[100vw]  flex flex-col gap-5 overflow-x-hidden ">
        <div className=" w-[100vw] h-[355px] max-w-[100vw] flex justify-center items-center rounded-br-xl rounded-bl-xl ">
          <div className=" w-[90%] bg-post-header-texture bg-cover bg-no-repeat h-[355px] flex relative rounded-br-xl rounded-bl-xl ">
            <div className=" w-[100%] h-[100%] bg-[rgba(255,97,97,0.50)]  flex flex-col items-start justify-between rounded-br-xl rounded-bl-xl">
              <div className=" w-[100%] mt-[-50px]">
                <Navbar />
              </div>
              <div className="titleInfo pb-[80px] pl-[60px] text-[#fff]">
                <h1 className="text-[45px] font-bold leading-[57px] pb-[40px] ">
                  {post.title}
                </h1>
                <p className="font-normal text-[14px] leading-[18px] pb-[10px] ">
                  Publish:{" "}
                  <span className="">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                </p>
                <div className=" flex flex-row gap-[40px] text-[30px]">
                  <button className="drop-shadow-md">
                    <HiThumbUp />
                  </button>
                  <button className="drop-shadow-md">
                    <HiThumbDown />
                  </button>
                  <button className="drop-shadow-md">
                    <HiShare />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[100vw] flex justify-center items-center overflow-x-hidden ">
          <div className="flex items-start justify-start flex-wrap w-[90%]  ">
            <div className=" first-letter:text-[40px] first-letter:font-bold text-[20px] font-normal leading-[50px] ">
              <p className="  ">
                {post.content}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                quibusdam nulla facilis vel porro. Modi, suscipit illo, nam
                cumque similique praesentium autem natus perferendis aspernatur
                sapiente incidunt sequi iusto aut, fugit eum ullam iste! Aut
                deserunt corrupti expedita veritatis, tempore aliquam numquam
                iure est assumenda sint inventore exercitationem magnam in
                maiores iste dolorem alias molestiae? Laboriosam consequuntur
                voluptatibus praesentium ad possimus accusamus tempora quos.
                Nesciunt eum voluptatibus voluptatum optio sint ipsum quidem
                aliquam eveniet numquam accusamus atque dignissimos totam
                maiores illo error nemo nam, quaerat architecto ex dolore,
                molestias, eius similique rem? Corporis unde necessitatibus
                voluptate repudiandae iusto fugiat, molestiae dolor excepturi
                quis natus ullam reprehenderit, consequuntur eligendi culpa.
                Incidunt saepe libero modi molestias suscipit amet eveniet
                expedita, ipsa recusandae ducimus cum aspernatur repudiandae ea
                repellat beatae doloribus molestiae autem sed ut blanditiis quo
                enim mollitia similique omnis. Illo harum ratione quis,
                consectetur magnam autem officia, vel facere sint nihil atque
                debitis? Facere illum itaque natus placeat libero nemo beatae,
                vero aliquam sunt sint non ullam, ipsam architecto labore! Quod,
                soluta. Suscipit nemo maiores rem amet quis saepe neque eum
                animi adipisci similique, totam in nulla reiciendis quas omnis
                fugit voluptatem excepturi! Sapiente, debitis velit consectetur
                quo quaerat omnis eveniet nihil odit repellat minima minus
                aliquam impedit perferendis soluta, veritatis reiciendis facilis
                perspiciatis fugit. Ullam pariatur qui id nostrum quidem
                quisquam cum explicabo natus inventore nobis ratione dicta rerum
                fugiat aut, consequatur aliquam sed dolore minima illo molestiae
                cumque autem! Aliquid delectus, fugiat autem consectetur
                provident, qui assumenda vel repellendus facere, expedita
                laudantium. Sed, cumque, nam nesciunt voluptate dignissimos,
                dolorem voluptatibus similique tenetur non recusandae accusamus
                iure quo itaque soluta iusto adipisci cum culpa perferendis! Cum
                aliquid nam quae praesentium quisquam ex. Velit fugit, quidem ea
                molestiae et qui odit ut neque sapiente est veniam, labore
                inventore fuga hic dolor, error natus sit voluptas unde nisi.
                Minus, facilis! Ullam doloribus exercitationem eaque, similique
                sit iste incidunt nemo labore accusantium neque voluptatibus
                dignissimos magni voluptas temporibus, odit voluptate, iusto
                deleniti debitis fuga quis odio. Fuga quos, cum sunt temporibus,
                suscipit eveniet voluptatum nemo nobis ea nulla, itaque aliquam.
                A vitae deleniti obcaecati recusandae error laborum quod numquam
                reprehenderit velit aliquam est molestias perferendis ea tempora
                ad, debitis perspiciatis ipsam voluptatum saepe dolore
                provident! Ducimus aperiam commodi nisi voluptatum reiciendis
                nesciunt mollitia alias a. Quidem iusto molestias placeat minima
                quibusdam similique ex repellendus voluptate aliquid minus?
                Recusandae corrupti odit nostrum possimus! Cumque eum accusamus
                tenetur velit cupiditate deserunt pariatur repudiandae
                consequatur, magnam aspernatur esse odit. Cum veniam sequi quasi
                deserunt cupiditate, voluptas recusandae. Doloremque ut delectus
                distinctio amet praesentium neque nisi. Perferendis, eligendi
                aspernatur culpa corporis cumque aut eius, atque minima,
                repellat architecto numquam odit excepturi consectetur est
                praesentium labore voluptatum itaque iure dolorum omnis soluta
                eos vero unde? Magnam veniam adipisci distinctio nulla
                repellendus ducimus consequatur libero ad accusantium deleniti
                quis laborum officia, deserunt pariatur. Architecto sunt maxime
                aliquam eligendi, doloribus quos! Recusandae tempore nam
                consequuntur deleniti dolore nesciunt maiores, veniam repellat
                provident ab, harum ullam voluptate repellendus? Aliquid
                cupiditate, assumenda corporis iusto error animi magnam nemo,
                accusantium atque quas, officiis nihil expedita porro eligendi
                distinctio maiores! Provident expedita cum voluptatum quibusdam
                officia id molestias repellendus deleniti accusamus iste vero
                ipsum enim veritatis, dolore amet magni cupiditate repellat ab
                vel nostrum recusandae. Tenetur minima iusto, doloremque porro
                pariatur tempora aliquid repellat temporibus, quos atque ut
                perspiciatis voluptatibus in est doloribus molestias suscipit
                enim illum voluptatum magni asperiores velit! Dicta accusamus
                sunt aspernatur commodi blanditiis architecto, optio voluptate
                culpa eum porro nisi. Dignissimos porro soluta nesciunt aperiam
                assumenda voluptate deleniti id doloribus consequuntur inventore
                amet eligendi beatae expedita quisquam, quae earum nobis,
                <img
                  src={post.image}
                  alt="food Portrait"
                  className=" float-left py-[20px]  pr-[15px] "
                />
                commodi minus, ducimus aspernatur. Quasi reiciendis officia
                veritatis explicabo, distinctio, excepturi labore repellat ea
                hic ducimus nobis tempore voluptatum magni illum, suscipit quia!
                Soluta ut ad hic doloribus illo repudiandae vero veritatis vitae
                harum tenetur enim dolorem, neque ipsum. Repudiandae dolorum,
                omnis doloremque saepe cum, placeat consectetur, porro rem modi
                tempore qui molestias laudantium quod commodi eligendi
                voluptatem maiores. Fuga officia porro in voluptatibus ducimus
                ab tempora animi, illo ea quo, et modi dicta accusamus molestiae
                obcaecati tenetur velit consequuntur asperiores laboriosam
                facere similique maiores non iure voluptates. Maiores animi
                optio aspernatur illum, sapiente vel nesciunt asperiores dicta
                odio, provident eligendi esse ipsum non doloremque aliquid
                velit? Est perspiciatis dignissimos suscipit iure non qui odio
                error, ratione illo corrupti atque, officia hic earum ullam
                doloremque dolorum quo expedita rerum ducimus. Libero, nihil.
                Saepe debitis accusantium velit enim eos quis, nulla recusandae
                sunt explicabo eveniet culpa ut architecto possimus dignissimos.
                Quae iusto saepe debitis expedita quo, nesciunt odio minus
                quidem ad facilis! Explicabo assumenda temporibus non, hic
                eligendi asperiores expedita nesciunt? Officia eos
                necessitatibus accusamus nemo totam numquam vitae saepe illum
                natus eaque esse quis fugit ex, debitis cupiditate sit! Ab
                molestias asperiores animi voluptatum error delectus dolor
                cumque quisquam sunt, et culpa expedita hic possimus dolore
                quibusdam tenetur assumenda eos illo porro. Maxime laboriosam
                ipsa in corporis, id mollitia quaerat recusandae soluta non
                rerum aliquid quibusdam ab assumenda error eum ipsam eos. Veniam
                cum architecto soluta laudantium nam. Mollitia ducimus quidem
                doloremque sit velit adipisci quia quasi nam nemo, nisi
                reprehenderit rem dolor vel libero? Tempore dolores delectus et
                aliquid reiciendis dolorem. Debitis deserunt asperiores
                exercitationem, amet omnis dolores eos ullam cum maiores
                provident saepe quos sequi consequuntur temporibus, animi labore
                reiciendis itaque, vitae ratione quam? Assumenda ex, similique
                nostrum repellat ipsum dolorum accusantium obcaecati maiores
                libero tempora quas, enim placeat molestiae in odit iusto.
                Consequuntur ratione officia, dolor, ex pariatur eum aut
                voluptatem eaque earum, at accusamus. Excepturi rerum quis magni
                similique nulla, harum sit quam velit nihil dolore eius impedit
                ea officia placeat commodi eos ducimus. Eaque quod nesciunt,
                facilis aspernatur exercitationem non cum saepe quis nihil
                cumque doloremque ipsa laboriosam deserunt itaque vel explicabo
                ad illum animi, possimus qui tenetur consequatur fuga inventore.
                Asperiores voluptas consequuntur saepe porro quas, ipsum quo
                velit quidem aut, cumque libero quasi minima nostrum! Quidem
                modi, vel reiciendis nihil sunt dolorum dolores enim ad soluta
                perferendis ullam necessitatibus deserunt. Maxime, omnis ipsa.
              </p>
            </div>
            <div className=" flex items-center flex-col w-full justify-center text-[#A7A7A7] text-[14px] leading-[40px]  font-normal mt-[90px] mb-[50px] ">
              <p className=" text-center ">
                Aliquet lectus proin nibh nisl. Rutrum quisque non tellus orci
                ac auctor augue mauris augue. Tellus rutrum
              </p>
              <p className=" text-center leading-[25px] ">
                Publish:{" "}
                <span className="">
                  {new Date(post.createdAt).toDateString()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
