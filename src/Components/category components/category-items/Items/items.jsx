import CategoryNavigation from "../../categoriesHeader";
import Footer from "../../../Footer-components/Footer";
import JoinBlog from "../../../Footer-components/secondJoinBlog";

import Item from "../item/item";

const Items = () => {
  return (
    <>
      <header className="">
        <CategoryNavigation />
      </header>
      <main className="">
        <Item />
      </main>
      <footer className="">
        <JoinBlog />
        <Footer />
      </footer>
    </>
  );
};

export default Items;
