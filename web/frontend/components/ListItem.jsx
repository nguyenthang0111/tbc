import React, { useState, useEffect } from 'react';
import { Button, Scrollable, LegacyCard, Form, Link } from "@shopify/polaris";
import { Item } from "./Item";
import { Search } from "./Search"; 
import { useMutation } from "react-query";
import axios from "axios";
import { useAppQuery } from '../hooks';

export function ListItem({ dataArticle }) {
  const {
    data,
    isLoading,
    isRefetching,
  } = useAppQuery({
    url: "/api/domain",
    reactQueryOptions: {
    },
  });
 
  useEffect(async () => {
    console.log(data);
  }, [data])

  const [isAllButtonActive, setIsAllButtonActive] = useState(false);
  const [isOnButtonActiveMap, setIsOnButtonActiveMap] = useState({});
  const [searchText, setSearchText] = useState('');
  const [article_handles, setArticleHandles] = useState([]);

  const handleAddAllClick = () => {
    setIsAllButtonActive(true);
    const newIsOnButtonActiveMap = {};
    dataArticle.forEach((article) => {
      newIsOnButtonActiveMap[article.handle] = true;
    });
    setIsOnButtonActiveMap(newIsOnButtonActiveMap);
  };

  const handleButtonClick = (articleHandle) => {
    const newIsOnButtonActiveMap = {
      ...isOnButtonActiveMap,
      [articleHandle]: !isOnButtonActiveMap[articleHandle],
    };
    setIsOnButtonActiveMap(newIsOnButtonActiveMap);
  };

  useEffect(() => {
    const newArticleHandles = Object.keys(isOnButtonActiveMap).filter(
      (articleHandle) => isOnButtonActiveMap[articleHandle]
    );
    setArticleHandles(newArticleHandles);
  }, [isOnButtonActiveMap]);

  useEffect(() => {
    if (isAllButtonActive) {
      const newIsOnButtonActiveMap = {};
      dataArticle.forEach((article) => {
        newIsOnButtonActiveMap[article.handle] = true;
      });
      setIsOnButtonActiveMap(newIsOnButtonActiveMap);
    }
  }, [isAllButtonActive, dataArticle]);

  const filteredData = dataArticle.filter((article) =>
    article.name.toLowerCase().includes(searchText.toLowerCase())
  );

   // POST METHOD
   const mutation = useMutation((value) => {
    return axios.put("/setting/handle/update", value);
  });

  const handleSubmit = () => {
    mutation.mutate({
      domain: data.domain,
      article_handles: article_handles
    });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Search searchText={searchText} onChangeSearchText={setSearchText} /> 
      <Scrollable shadow style={{ height: '200px' }}>
        <LegacyCard>
          {filteredData.map((article) => (
            <LegacyCard.Section key={article.handle}>
              <Item
                item={article}
                isOnButtonActive={isOnButtonActiveMap[article.handle]}
                onClick={() => handleButtonClick(article.handle)}
              />
            </LegacyCard.Section>
          ))}
        </LegacyCard>
      </Scrollable>
      <div style={{ textAlign: 'right', paddingTop: '10px' }}>
        <Button onClick={handleAddAllClick}>Add all article</Button>
      </div>
      <div style={{textAlign:'center', paddingTop:'10px'}}>
        <Button primary submit>
          <Link onClick={handleSubmit} url="/mainscreen">
              <div style={{color: "white"}}>Next</div>
          </Link>
        </Button>
      </div>
      </Form>
    </div>
  );
}