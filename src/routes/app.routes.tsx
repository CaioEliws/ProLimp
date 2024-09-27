import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { Blog } from "../pages/Blog";
import { BlogPost } from "../pages/BlogPost";

import { blogPosts } from "../data/blogData";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />

            {blogPosts.map((post) => (
                <Route
                    key={post.id}
                    path={`/blog/${post.id}`}  // Caminho dinâmico baseado no ID do post
                    element={<BlogPost {...post} />}  // Passa os dados do post como props
                />
            ))}
        </Routes>
    )

}