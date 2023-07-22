import {
    Card,
    Page,
    Layout,
    Form,
    Link,
    Text,
    LegacyCard,
    Scrollable,
    Button
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import { useTranslation, Trans } from "react-i18next";
import { Search } from "../components/Search";
import { ListItem } from "../components/ListItem";
import { useAppQuery } from "../hooks";
import { useEffect, useState } from "react";
  
  export default function Step2Screen() {
    const {
      data,
      isLoading,
      isRefetching,
    } = useAppQuery({
      url: "/api/article",
      reactQueryOptions: {
      },
    });
   
    useEffect(async () => {
      console.log(data);
    }, [data])
    
    const articles = [
      {
        id: '605516431641',
        name: 'Article Name 1',
        status: 'off',
        handle: "article1"
      },
      {
        id: '605350986009',
        name: 'Article Name 2',
        status: 'on',
        handle: "article2"
      },
      {
        id: '3',
        name: 'Article Name 3',
        status: 'off',
        handle: "article3"
      },
      {
        id: '4',
        name: 'Article Name 4',
        status: 'on',
        handle: "article4"
      },
      {
        id: '5',
        name: 'Article Name 5',
        status: 'off',
        handle: "article5"
      },
      {
        id: '6',
        name: 'Article Name 6',
        status: 'on',
        handle: "article6"
      },
    ];

    return (
      <Page 
        narrowWidth
        title='Step 2: Add app to your article'
      >
        <Layout>
          <Layout.Section>
            <LegacyCard sectioned>
              <p>
                Add table of contents generation to your article by pressing on/off button.
              </p>
                <ListItem dataArticle={articles}/>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page> 
    );
  }
  
