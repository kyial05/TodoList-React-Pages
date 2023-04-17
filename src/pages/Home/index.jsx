import { Link } from "react-router-dom";
import "./home.css"
import fl1 from "../../img/fl1.png"
import fl2 from "../../img/fl2.png"
import fl3 from "../../img/fl3.png"
import fl4 from "../../img/fl4.png"
import fl5 from "../../img/fl5.png"

export const Home = () => {
  return (
    <div className="main">
      <Link to="login">
        <h1 className="enter-text">Login</h1>
      </Link>
      <img src={fl1} alt="sun" className="sun1"/>
      <img src={fl2} alt="sun" className="sun2"/>
      <img src={fl3} alt="sun" className="sun3"/>
      <img src={fl4} alt="sun" className="sun4"/>
      <img src={fl5} alt="sun" className="sun5"/>
      {/* <Link to="Todos">
        <h1>todo</h1>
      </Link> */}
    </div>
  );
};

