import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
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

export default function Step2Screen() {
  const articles = [
    {
      id: '1',
      name: 'Article Name 1',
    },
    {
      id: '2',
      name: 'Article Name 2',
    },
    {
      id: '3',
      name: 'Article Name 3',
    },
    {
      id: '4',
      name: 'Article Name 4',
    },
    {
      id: '5',
      name: 'Article Name 5',
    },
    {
      id: '6',
      name: 'Article Name 6',
    },
  ];

  return (
    <Page narrowWidth>
      <Layout>
        <Layout.Section>
          <Text variant="heading2xl" as="h3">Step 2: Add app to your blog</Text>
        </Layout.Section>
        <Layout.Section>
          <LegacyCard sectioned>
            <p>
              Add table of contents generation to your blog using the App Block or 
              App Embed feature provided by Shopify.
            </p>
            <Search />
            <Scrollable shadow style={{height: '200px'}} focusable>
              <ListItem data={articles}/>
            </Scrollable>
            <div style={{textAlign:'center', paddingTop:'10px'}}>
              <Button primary >Next</Button>
            </div>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page> 
  );
}
