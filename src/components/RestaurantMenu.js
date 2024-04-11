import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=28405&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>
        
      </h1>
      <h2>Menu</h2>
      <ul>
        <li>Sandwich</li>
        <li>Pav bhaji</li>
        <li>Dosa</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
