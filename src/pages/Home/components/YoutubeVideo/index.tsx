import { YoutubeVideoContent } from "./styles";

export function YoutubeVideo() {
    return (
        <YoutubeVideoContent>
            <iframe
                src="https://www.youtube.com/embed/xNRJwmlRBNU"
                title="Vídeo do YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </YoutubeVideoContent>
    )
}