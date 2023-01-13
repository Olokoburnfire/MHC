import Aside from "./item-components/aside-item/aside";
import Footer from "./item-components/footer-item/footer";
import Main from "./item-components/main-item/main";

const Item = () => {
  return (
    <>
      <div className="min-h-[100vh] box-border px-10 py-10 flex flex-col max-w-[100vw] w-full h-full">
        <header className=""></header>
        <main className="">
          <article className="">
            <Main />
          </article>
          <aside className="">
            <Aside />
          </aside>
        </main>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Item;
