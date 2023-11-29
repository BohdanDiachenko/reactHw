import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/UserProfile/UserProfile";
import About from "./pages/About";

import "./App.scss";

function App(): JSX.Element {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />}>
                        <Route path=":userId" element={<UserProfile />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
