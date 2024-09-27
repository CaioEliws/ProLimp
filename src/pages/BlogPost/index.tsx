import { BackgroundContactWallpaper, BackgroundWrapper, BlogPostContainer, BlogPostContent, PostContent } from "./styles";

import { Header } from "../../components/Header";
import { ContactInfo } from "../../components/ContactInfo";
import { useEffect } from "react";

interface BlogPostContent {
  subtitle: string;
  text: string;
  imageText: string;
}

interface BlogPostProps {
  title: string;
  content: BlogPostContent[];
  image: string;
}

export function BlogPost({ title, content, image }: BlogPostProps) {
  useEffect(() => {
    // Faz o scroll para o topo quando o componente é montado
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackgroundContactWallpaper />
      <BackgroundWrapper />

      <BlogPostContainer>
        <Header />

        <BlogPostContent>
          <h1>{title}</h1>
          
          <img src={image} alt={title} />

          {
            content.map((content, index) => 
            (
              <PostContent key={index}>
                <h2>{content.subtitle}</h2>

                {
                  content.imageText && (
                    <img src={content.imageText} alt={content.subtitle} />
                  )
                }

                <p>{content.text}</p>
              </PostContent>
            ))
          }
        </BlogPostContent>

        <ContactInfo bgColor="white" />
      </BlogPostContainer>
    </>
  );
}
