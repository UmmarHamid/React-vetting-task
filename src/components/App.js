import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BlogList from "./BlogList/BlogList";
import Blog from "./Blog/Blog";
import useFetchData from "../utils/useFetchData";

export const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

function App() {
  const { error, isPending, data: blogs } = useFetchData(API_URL);
  return (
    <Router>
      <div className="App">
        <header className="App-header">Blog Listing Demo</header>
        <div className="app-content">
          <Routes>
            <Route
              path="/"
              element={
                <BlogList error={error} blogs={blogs} isPending={isPending} />
              }
            ></Route>
            <Route
              path="/blog/:id"
              element={
                <Blog error={error} blogs={blogs} isPending={isPending} />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
