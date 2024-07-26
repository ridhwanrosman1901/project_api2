import React, { useEffect, useState } from 'react';

function App() {
  // Hook for getting API data
  const [data, setData] = useState([]);

  // Hook for running API call instantly
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log("There is something wrong");
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Product List</h1>
      <div className="row">
        {data.map((ecom) => (
          <div className="col-md-4" key={ecom.id}>
            <div className="card mb-4" style={{ width: '18rem' }}>
              <img src={ecom.image} className="card-img-top" alt={ecom.title} />
              <div className="card-body">
                <h5 className="card-title">{ecom.title}</h5>
                <p className="card-text">{ecom.description}</p>
                <p className="card-text"><strong>Price:</strong> ${ecom.price}</p>
                <p className="card-text"><strong>Category:</strong> {ecom.category}</p>
                <p className="card-text"><strong>Rating:</strong> {ecom.rating.rate} ({ecom.rating.count} reviews)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

