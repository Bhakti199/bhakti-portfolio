import "./App.css";
import { Navbar } from "./Components";
import { Route, Routes } from "react-router-dom";
import { BlogPage, ProjectPage, HomePage } from "./Pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          Home
        </Route>
        <Route path="/projects" element={<ProjectPage />}>
          Projects
        </Route>
        <Route path="/blogs" element={<BlogPage />}>
          Blogs
        </Route>
      </Routes>
    </div>
  );
}

export default App;
