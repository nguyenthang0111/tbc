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
  
  export default function Themestep2() {
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
                
              
                <VerticalStack gap="3">
                  <Text as="h1" variant="headingXs">
                        Table of Contents
                  </Text>
                  <Text as="h1" variant="headingXs">
                    Heading1
                  </Text>
                  <Divider borderColor="border-inverse" />
  

  
                  <Text as="h1" variant="headingXs">
                    Heading2
                  </Text>
                  <Divider borderColor="border-inverse" />
                  <Text as="h1" variant="headingXs">
                    Heading3
                  </Text>
                  <Divider borderColor="border-inverse" />
                  <Text as="h1" variant="headingXs">
                    Heading4
                  </Text>
                  <Divider borderColor="border-inverse" />
                  <Text as="h1" variant="headingXs">
                    Heading1
                  </Text>
                  <Divider borderColor="border-inverse" />
                  <Text as="h1" variant="headingXs">
                    Heading2
                  </Text>
                  <Divider borderColor="border-inverse" />
                  <Text as="h1" variant="headingXs">
                    Heading3
                  </Text>
                  <Divider borderColor="border-inverse" />
                  <Text as="h1" variant="headingXs">
                    Heading4
                  </Text>
                  <Divider borderColor="border-inverse" />

  
                </VerticalStack>
            
                
            </TextContainer>
                </Stack.Item>
          
  
  
              </Stack>
            </Card>
          
          </Layout.Section>
        </Layout>
    </Page> 
    );
  }
  