import logo from "./assets/Udemy_Vector_Logo.png";
import "./style.css"
function Navbar(){
  return (
    <>
      <header>
        <div className="navbar">
          <img src={logo} alt="Logo" className="logo" />
          <h2><b>Get The Skills With Udemy Business</b></h2>
          <input type="search" placeholder="Search for courses" />
          <ul className="nav-links">
            <li><a href="#">Categories</a></li>
            <li><a href="#">My Courses</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </header>

      <nav className="nav1">
        <ul className="menu-bar">
          <li><a href="#">Development</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Design</a></li>
          <li><a href="#">Marketing</a></li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar