import { Button, Text, Scrollable, LegacyCard } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { Item } from "./Item";
import { useState, useEffect } from "react";

export function ListItem({ data }) {
  const [isAllButtonActive, setIsAllButtonActive] = useState(false);
  const [isOnButtonActiveMap, setIsOnButtonActiveMap] = useState({});

  const handleAddAllClick = () => {
    setIsAllButtonActive(true);
    const newIsOnButtonActiveMap = {};
    data.forEach((article) => {
      newIsOnButtonActiveMap[article.id] = true;
    });
    setIsOnButtonActiveMap(newIsOnButtonActiveMap);
  };

  const handleButtonClick = (articleId) => {
    const newIsOnButtonActiveMap = {
      ...isOnButtonActiveMap,
      [articleId]: !isOnButtonActiveMap[articleId],
    };
    setIsOnButtonActiveMap(newIsOnButtonActiveMap);
  };

  useEffect(() => {
    if (isAllButtonActive) {
      const newIsOnButtonActiveMap = {};
      data.forEach((article) => {
        newIsOnButtonActiveMap[article.id] = true;
      });
      setIsOnButtonActiveMap(newIsOnButtonActiveMap);
    }
  }, [isAllButtonActive, data]);

  return (
    <div>
      <Scrollable shadow style={{ height: '200px' }} focusable>
        <LegacyCard>
          {data.map((article, index) => (
            <LegacyCard.Section key={index}>
              <Item
                item={article}
                isOnButtonActive={isOnButtonActiveMap[article.id]}
                onClick={() => handleButtonClick(article.id)}
              />
            </LegacyCard.Section>
          ))}
        </LegacyCard>
      </Scrollable>
      <div style={{ textAlign: 'right', paddingTop: '10px' }}>
        <Button onClick={handleAddAllClick}>Add all article</Button>
      </div>
    </div>
  );
}
