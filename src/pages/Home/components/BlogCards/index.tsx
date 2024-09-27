import { BlogCardsContainer } from "./styles";

interface BlogCardsProps {
  title: string;
  image: string;
  postId?: string;
}

export function BlogCards({ title, image, postId }: BlogCardsProps) {
  return (
    <BlogCardsContainer to={`/blog/${postId}`}>

      <img src={image} alt={title} />
      <p>{title}</p>
      
    </BlogCardsContainer>
  );
}
