import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { Blog } from "../pages/Blog";
import { BlogPostPage } from "../pages/BlogPostPage";
import { SimulationPage } from "../pages/Simulation";

import { blogPostsData } from "../data/blogPostsData";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/simulation/:serviceType" element={<SimulationPage />} />
            <Route path="/blog" element={<Blog />} />

            {blogPostsData.map((post) => (
                <Route
                    key={post.id}
                    path={`/blog/${post.id}`}
                    element={<BlogPostPage {...post} />}
                />
            ))}
        </Routes>
    )

}