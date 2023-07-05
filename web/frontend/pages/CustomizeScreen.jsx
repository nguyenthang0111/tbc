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
    HorizontalGrid,
    VerticalStack,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import { useTranslation, Trans } from "react-i18next";
  import {Customize} from "../components/Customize";
  import { TableofContent } from "../components/TableofContent";

  export default function MainScreen() {
    const headings = [
      {
        id: '1',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
      },
      {
        id: '2',
        h1: 'heading 1',
        h2: 'heading 2',
        h3: 'heading 3',
        h4: 'heading 4',
      },
    ]
    return (
      <Page
          backAction={{content: 'Orders', url: '/mainscreen'}}
          title="Customize the table of contents">
        <Layout>
            <Layout.Section>
              <HorizontalGrid gap="4" columns={2}>
                <VerticalStack>
                  <Customize/>
                </VerticalStack>
                <VerticalStack>
                  <LegacyCard>
                    <div style={{ padding:'20px'}} >
                    <Text> Priview </Text>
                    <div style={{ paddingTop:'15px'}} >
                    <p> A table of contents in the style below will be inserted into the template. </p>
                    </div>
                    </div>
                    <Layout.Section>
                    <div style={{ paddingBottom: '30px'}} >
                    <TableofContent data={headings}/> 
                    </div>
                    </Layout.Section>
                    
                  </LegacyCard>
                </VerticalStack>
              </HorizontalGrid>
            </Layout.Section>
        </Layout>
      </Page>

    );
  }
  