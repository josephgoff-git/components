import './Display1.css';

const Display1 = () => {
  return (
    <div className="display1-container">
      <div className="display1-text">
        <h2 className="display1-title">Discover the Elegance</h2>
        <p className="display1-description">Experience the beauty and sophistication in every detail.</p>
      </div>
      <div className="display1-image">
        <img src="https://images.unsplash.com/photo-1458538977777-0549b2370168?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdCUyMGVsZWdhbnR8ZW58MHx8MHx8fDA%3D" alt="Elegant Display" />
      </div>
    </div>
  );
};

export default Display1;
