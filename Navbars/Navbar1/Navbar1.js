import "./navbar1.css"

function Navbar1() {
  return (
    <div style={{backgroundColor: "white", color: "black", borderBottom: "1px solid black", height: "60px", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", gap: "15px"}}>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
      <p>Products</p>
    </div>
  );
}

export default Navbar1;
