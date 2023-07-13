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
import { useState } from "react";

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
    const [setting, setSetting] = useState({})

    // Get data from Component Setting
    // pass data frm child component to p
    const takeData = (setting) => {
      setSetting(setting);
      console.log(setting);
    };


    return (
      <Page
          backAction={{content: 'Back', url: '/mainscreen'}}
          title="Customize the table of contents">
        <Layout>
            <Layout.Section>
              <HorizontalGrid gap="4" columns={['twoThirds', 'oneThird']}>
                <VerticalStack gap='4'>
                  <Customize takeData={takeData}/>
                </VerticalStack>
                <VerticalStack>
                  <LegacyCard title='Preview'>

                    <LegacyCard.Section>
                      <LegacyStack spacing="tight" vertical>
                        <p>A table of contents in the style below will be inserted into the template.</p>
                        <TableofContent data={headings} setting={setting}/> 
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
  