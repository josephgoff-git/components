import './Navbar1.css';

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="logo1">Logo</div>
      <ul className="nav1-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar1;
