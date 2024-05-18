import { useEffect, useState } from "react";
import Header from './Header/Header';
import Posts from './Posts/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getFilterdItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter(item => item.title.includes(query) || item.text.includes(query))
  }

  const filterdItems = getFilterdItems(query, posts);
  const getPosts = async () => {
    try {
      const response = await fetch("https://cloud.codesupply.co/endpoint/react/data.json");
      const posts = await response.json();
      setPosts(posts)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header setQuery={value => setQuery(value)} scrollTop={scrollTop} />
      <Posts posts={filterdItems} />
    </>
  );
}

export default App;
