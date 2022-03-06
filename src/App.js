import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { GirdLayout } from './components/GirdLayout';

const url = 'https://api.unsplash.com/photos/'

function App() {

  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchImageHandler = async () => {
    const { data } = await axios.get(url + `?page=${pageNumber}&per_page=12&client_id=Jz2IYFhsEZwYdZYokd6anofNLX5F5xpVfXj4oqSY8uU`);
    setImages([...images, ...data]);
  }

  const setPageNumberHandler = () => {
    setPageNumber(pageNumber + 1);
    fetchImageHandler();
  }

  useEffect(() => {
    fetchImageHandler();
  }, []);

  return (
    <div className="App">
      <h1 className=' mt-4 mb-5'>Lazy Load-Image 🖼️</h1>

      <div className='container'>
        <div className="row">

          {
            images.length === 0 ? <h3 className='text-center mt-5'>Data Not Found! 🥺</h3> :
              images.map((item, key) => (
                <GirdLayout images={item} key={key} />
              ))
          }

          {
            images.length && <span className='text-center'>
              <button type="button" className="btn btn-primary my-5" onClick={setPageNumberHandler}>Load More</button>
            </span>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
