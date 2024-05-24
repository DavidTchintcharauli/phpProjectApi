import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/phpProjectApi/api.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      {data ? (
        <div>
          <p>{data.message}</p>
          <ul>
            {data.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;