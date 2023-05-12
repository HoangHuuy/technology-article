import InputText from "components/Input/InputText";
import "./Sidebar.scss";
import sidebarList from "constants/sideBarList";
import InputRadiusBorder from "components/Input/InputRadiusBorder";
import imgURL from "constants/imgURL";

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="s-category">
        <div className="head">Category</div>
        <ul>
          {sidebarList.map((item) => (
            <li key={item.name}>
              <span>{item.name}</span> ({item.article})
            </li>
          ))}
        </ul>
      </div>

      <div className="s-category">
        <div className="head">Subscribe</div>
        <InputText placeholder={"Email address"} className={"mb-4"} />
        <InputRadiusBorder value={"Subscribe"} className={"w-auto ps-4 pe-4"} />
      </div>

      <div className="s-category">
        <div className="ad">
          <img src={imgURL.ad} alt="ad" />
        </div>
      </div>
    </aside>
  );
}
