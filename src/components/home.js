import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
        <div>
            <div>Privateer Home</div>
            <div>
                <Link to="/login" className="btn btn-default">Login</Link>
            </div>
        </div>
  );
}

export default Home;