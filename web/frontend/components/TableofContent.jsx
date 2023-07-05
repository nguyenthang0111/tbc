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
  import { useAppQuery, useAuthenticatedFetch } from "../hooks";
  import { useState, useCallback } from 'react';

  export function TableofContent() {
    return (
     

        <Layout>
          <Layout.Section>
              <Stack
                wrap={false}
                spacing="extraTight"
                distribution="trailing"
                alignment="center"
              >
                <Stack.Item fill>
                  <TextContainer spacing="loose">  
                <VerticalStack gap="3">
                    <Card sectioned> 
                    <Text as="h1" variant="headingXs"> Heading1 </Text>
                    <Divider borderColor="border-inverse" />
                    <Text as="h2" margin="15px" variant="headingXs"> Heading2 </Text>
                    <Divider borderColor="border-inverse" />
                    <Text as="h3" variant="headingXs"> Heading3 </Text>
                    <Divider borderColor="border-inverse" />
                    <Text as="h4" variant="headingXs"> Heading4 </Text>
                    <Divider borderColor="border-inverse" />
                    <Text as="h1" variant="headingXs"> Heading1 </Text>
                    <Divider borderColor="border-inverse" />
                    <Text as="h2" variant="headingXs"> Heading2 </Text>
                    <Divider borderColor="border-inverse" />
                    <Text as="h3" variant="headingXs"> Heading3 </Text>
                    <Divider borderColor="border-inverse" />
                    <Text as="h4" variant="headingXs"> Heading4 </Text>
                    <Divider borderColor="border-inverse" />
                    </Card>
                </VerticalStack>
                </TextContainer>
                </Stack.Item>
              </Stack>
          </Layout.Section>
        </Layout>

    );
  }
  