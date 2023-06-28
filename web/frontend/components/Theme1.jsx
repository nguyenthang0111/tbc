import {
    Card,
    Page,
    Layout,
    TextContainer,
    Image,
    Stack,
    Link,
    Text,
    List,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import { useTranslation, Trans } from "react-i18next";
  import {Divider, VerticalStack} from '@shopify/polaris';
  
  export default function Theme1() {
    return (
     
      <Page narrowWidth>
      <TitleBar title="Table of Content" primaryAction={null} />
      <Layout>
        <Layout.Section>
        <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">  
              
            <div>
              <VerticalStack gap="3">
                <Text as="h1" variant="headingXs">
                      Table of Contents
                </Text>
                <Text as="h1" variant="headingXs">
                  [Heading1]
                </Text>
                <Divider borderColor="border-inverse" />

                <List type="bullet">
                <List.Item>Heading2</List.Item>
                <List.Item>Heading3</List.Item>
                <List.Item>Heading4</List.Item>
                </List>

                <Text as="h1" variant="headingXs">
                  [Heading1]
                </Text>
                <Divider borderColor="border-inverse" />

                <List type="bullet">
                <List.Item>Heading2</List.Item>
                <List.Item>Heading3</List.Item>
                <List.Item>Heading4</List.Item>
                </List>

              </VerticalStack>
          </div>
              
          </TextContainer>
              </Stack.Item>
         


            </Stack>
          </Card>
         
        </Layout.Section>
      </Layout>
    </Page>         
    );
  }



