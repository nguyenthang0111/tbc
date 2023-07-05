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
        status: 'off'
      },
      {
        id: '2',
        name: 'Article Name 2',
        status: 'on'
      },
      {
        id: '3',
        name: 'Article Name 3',
        status: 'off'
      },
      {
        id: '4',
        name: 'Article Name 4',
        status: 'on'
      },
      {
        id: '5',
        name: 'Article Name 5',
        status: 'off'
      },
      {
        id: '6',
        name: 'Article Name 6',
        status: 'on'
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
              <Search />
              <ListItem data={articles}/>
              <div style={{textAlign:'center', paddingTop:'10px'}}>
                <Button primary url="/mainscreen">Next</Button>
              </div>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page> 
    );
  }
  
