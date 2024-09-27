import { useEffect } from "react";

import { BlogCards } from "../Home/components/BlogCards";
import { BackgroundContactWallpaper, BlogContainer, BlogCardsContent } from "./styles";
import { ContactInfo } from "../../components/ContactInfo";
import { Header } from "../../components/Header";

import { blogPosts } from "../../data/blogData";

export function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackgroundContactWallpaper />
      <BlogContainer>
        <Header />

        <h1>Blog</h1>

        <BlogCardsContent>

          {blogPosts.map((post) => (
            <BlogCards 
              key={post.id} 
              title={post.title} 
              image={post.image} 
              postId={post.id} />
          ))}

        </BlogCardsContent>

        <ContactInfo bgColor="white-500" />
      </BlogContainer>
    </>
  );
}
