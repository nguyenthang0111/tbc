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
    LegacyStack,
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
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
      },
      {
        id: '2',
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
      },
    ]
    const settings = [
      {
        id: '1',
        h1: 'Setting 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
      },
      {
        id: '2',
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
      },
    ]
    return (
      <Page
          backAction={{content: 'Back', url: '/mainscreen'}}
          title="Customize the table of contents">
        <Layout>
            <Layout.Section>
              <HorizontalGrid gap="4" columns={['twoThirds', 'oneThird']}>
                <VerticalStack gap='4'>
                  <Customize/>
                </VerticalStack>
                <VerticalStack>
                  <LegacyCard title='Preview'>

                    <LegacyCard.Section>
                      <LegacyStack spacing="tight" vertical>
                        <p>A table of contents in the style below will be inserted into the template.</p>
                        <TableofContent data={headings} settings={settings}/> 
                      </LegacyStack>
                    </LegacyCard.Section>
                    
                  </LegacyCard>
                </VerticalStack>
              </HorizontalGrid>
            </Layout.Section>
        </Layout>
      </Page>

    );
  }
  