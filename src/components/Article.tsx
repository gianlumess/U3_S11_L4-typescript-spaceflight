import { Button, Card } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";

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
        <Link className="btn btn-primary" to={"/article/" + props.article.id}>
          Go somewhere
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Article;
