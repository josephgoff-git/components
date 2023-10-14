import './Navbar2.css';

const Navbar2 = () => {
  return (
    <nav className="navbar2">
      <div className="logo-container2">
        <img
          src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60" alt="Logo" className="logo2" />

      </div>
      <ul className="nav-list2">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar2;
