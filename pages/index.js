import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 从 API 获取数据
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/fetchData');
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
