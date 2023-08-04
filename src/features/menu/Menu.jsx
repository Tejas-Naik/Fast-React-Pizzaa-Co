import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

// 1) create a loader
export async function loader() {
  const menu = await getMenu();
  return menu;
}

function Menu() {
  // 3) get data using useLoaderData();
  const menu = useLoaderData();
  return (
    <>
      <h1>Menu</h1>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </>
  );
}

export default Menu;
