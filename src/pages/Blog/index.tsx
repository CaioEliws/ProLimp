import { useEffect } from "react";

import { BlogCards } from "../Home/components/BlogCards";
import { BlogContainer, BlogCardsContent } from "./styles";
import { ContactInfo } from "../../components/ContactInfo";
import { Header } from "../../components/Header";

import { blogPostsData } from "../../data/blogPostsData";

export function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>      
      <BlogContainer>
        <Header />

        <h1>Blog</h1>

        <BlogCardsContent>

          {blogPostsData.map((post) => (
            <BlogCards 
              key={post.id} 
              title={post.title} 
              image={post.image} 
              postId={post.id} />
          ))}

        </BlogCardsContent>

        <div className="content">
          <ContactInfo bgColor="white-500" />
        </div>
      </BlogContainer>
    </>
  );
}
