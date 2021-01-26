import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import loader from './images/spinner.gif';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effect to get data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loader">
          <img src={loader} alt="loader" />
        </div>
      </>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <div className="post-container">
        {posts && posts.map((post) => <Post post={post} key={post.id} />)}
      </div>
    </div>
  );
};

export default App;
