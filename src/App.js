import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" exact={true} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
