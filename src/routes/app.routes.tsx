import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { Blog } from "../pages/Blog";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )

}