import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import { Col, Container, Image, Row } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
interface Obj {
  detail: IArticle;
}
const Detail = () => {
  const [articleDetail, setArticleDetail] = useState({});
  const params = useParams();

  const fetchArticleDetail = async () => {
    try {
      const resp = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.articleId}`);
      if (resp.ok) {
        const articleObj = await resp.json();
        console.log(articleObj);

        setArticleDetail(articleObj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticleDetail();
  }, []);

  return (
    <>
      <TopBar />
      <Container className="border mt-5 p-2">
        <Row>
          <Col md={6}>
            <Image className="w-100" src={articleDetail.image_url} />
          </Col>

          <Col>
            <h1>{articleDetail.title}</h1>
            <p>{articleDetail.summary}</p>
            <span className="badge">{articleDetail.published_at}</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
