import {
    Card,
    Page,
    Layout,
    TextContainer,
    Image,
    Stack,
    Link,
    Text,
    HorizontalGrid,
    VerticalStack,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import { useTranslation, Trans } from "react-i18next";
  import {Customize} from "../components/Customize";
  import { TableofContent } from "../components/TableofContent";

  export default function MainScreen() {
    return (
      <Page FullWidth>
        <Layout>
            <Layout.Section>
            <Text variant="heading2xl" as="h3">Customize the table of contents </Text>
            </Layout.Section>
            <HorizontalGrid columns={2} >
                <Customize/>
                <div style={{ padding:'15px'}} >
                <Text> Priview </Text>
                <p> A table of contents in the style below will be inserted into the template. </p>
                <TableofContent/>
                </div>

            </HorizontalGrid>
        </Layout>
      </Page>

    );
  }
  