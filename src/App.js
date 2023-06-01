import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/products" element={<Shop/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contacts" element={<Contacts/>}></Route>
      
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
