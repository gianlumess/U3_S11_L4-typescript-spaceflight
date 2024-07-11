import { Col, Container, Row } from "react-bootstrap";
import TopBar from "../components/TopBar";
import Article from "../components/Article";
import { useEffect } from "react";

interface HomeProps {
  articles: [];
  setArticles: [];
}

const Home = (props: HomeProps) => {
  const fetchArticles = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const obj = await resp.json();
        props.setArticles(obj.results);
        console.log(obj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <TopBar />

      <Container className="mt-5">
        <Row>
          {props.articles.map((article) => (
            <Col key={article.id} md={6}>
              <Article article={article} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
