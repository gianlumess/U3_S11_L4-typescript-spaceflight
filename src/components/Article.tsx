import { Button, Card } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";

interface ArticleProps {
  article: IArticle;
}
const Article = (props: ArticleProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.article.image_url} />
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>{props.article.summary}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Article;
