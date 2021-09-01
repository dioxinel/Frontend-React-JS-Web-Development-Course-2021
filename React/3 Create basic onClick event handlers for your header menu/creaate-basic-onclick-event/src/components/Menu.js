import { menuItems } from "../constants";
import "./Menu.css"
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="Menu">
     {menuItems.map(item => {
       return <MenuItem key={item.link} title={item.title} link={item.link} />
     })}
    </div>
  );
}

export default Menu;
