import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  {
    path: "/order/:orderID",
    element: <Order />,
  },
]);

function App() {
  const x = 12;
  return <RouterProvider router={router} />;
}

export default App;
