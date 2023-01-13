/* eslint-disable no-unused-vars */
import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/HomePage"));
const Category = lazy(() => import("./Pages/categories"));
const Blog = lazy(() => import("./Pages/Blog"));
const Faqs = lazy(() => import("./Pages/Faqs"));
const Search = lazy(() => import("./Pages/Search"));
const Cart = lazy(() => import("./Pages/Cart"));
const Single = lazy(() => import("./blogApp/single/Single"));
const Singles = lazy(() =>
  import("./Components/category components/single/Single")
);
const Items = lazy(() =>
  import("./Components/category components/category-items/Items/items")
);
// Correction is to be made here
const Login = lazy(() => import("./Components/Login and Registration/login"));
const signup = lazy(() => import("./Components/Login and Registration/signup"));
const ForgotPassword = lazy(() =>
  import("./Components/Login and Registration/ForgotPassword")
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<Single />} />

            <Route path="/category" element={<Category />} />
            <Route path="/category/:catId" element={<Singles />} />
            <Route path="/category/:catId/:subId" element={<Items />} />

            <Route path="/faq" element={<Faqs />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
