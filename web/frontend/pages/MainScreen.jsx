import {
    Card,
    Page,
    Box,
    Text,
    Button,
    LegacyCard,
    VerticalStack
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import { useTranslation, Trans } from "react-i18next";
import { ListItem } from "../components/ListItem";
import { Search } from "../components/Search";
  
  export default function MainScreen() {
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
        title="Table of contents"
        primaryAction={
          <Button
            outline
          >
            Disable App
          </Button>
        }
      >
        <VerticalStack gap='5'>
          <div>
            <LegacyCard
              secondaryFooterActions={[{content: 'Customize', url: '/customizescreen'}]}
            >
              <LegacyCard.Header
                title="Customize Table of contents"
              >
              </LegacyCard.Header>
              <LegacyCard.Section>
                <p>Customize the title, indentation, numbering design, section line, color etc</p>
              </LegacyCard.Section>
            </LegacyCard>
          </div>
          <div>
            <LegacyCard>
              <LegacyCard.Header
                title='Add app to your article'
              >
              </LegacyCard.Header>
              <LegacyCard.Section>
                <p>Add table of contents generation to your article by pressing on/off button.</p>
              </LegacyCard.Section>
              <LegacyCard.Section>
                <div style={{padding: '0 20px 20px'}}>
                  <Search />
                  <ListItem  data={articles}/>
                </div>
              </LegacyCard.Section>
            </LegacyCard>
          </div>
        </VerticalStack>
      </Page>
    );

  
  }
  