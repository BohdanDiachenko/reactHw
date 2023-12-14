import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
    return (
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-8 h-full ">
            <div className="container mx-auto h-full py-3">
                <nav className="flex gap-x-4 text-2xl">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
