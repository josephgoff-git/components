import './Display2.css'; 

const Display2 = () => {
  return (
    <div className="display2-container">
      <div className="display2-text">
        <h2 className="display2-title">Impressive Display</h2>
        <p className="display2-subtext">Experience the beauty and sophistication in every detail.</p>
        <button className="display2-button">Shop Now</button>
      </div>

      <div className="display2-image">
        <img src="https://images.unsplash.com/photo-1516970898726-16f077cf78d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" alt="Impressive Display" />
      </div>
    </div>
  );
};

export default Display2;
