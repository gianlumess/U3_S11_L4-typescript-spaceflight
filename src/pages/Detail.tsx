import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const [articleDetail, setArticleDetail] = useState([]);
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
  return <></>;
};

export default Detail;
