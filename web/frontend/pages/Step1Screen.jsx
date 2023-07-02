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
import {Grid, LegacyCard} from '@shopify/polaris';

//import { Theme1 } from "../components";
import { ProductsCard } from "../components";
export default function Step1Screen() {
  return (
   
    <Page fullWidth>
    <Grid>
      <Grid.Cell columnSpan={{xs: 3, sm: 3, md: 2, lg: 6, xl: 6}}>
        <LegacyCard title="Table of contents" sectioned>

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
        </LegacyCard>
      </Grid.Cell>
      <Grid.Cell columnSpan={{xs: 3, sm: 3, md: 2, lg: 6, xl: 6}}>
        <LegacyCard title="table of Contents" sectioned>

          <p>Heading1</p>
          <Divider borderColor="border-inverse" />
          <p>Heading2</p>
          <Divider borderColor="border-inverse" />
          <p>Heading3</p>
          <Divider borderColor="border-inverse" />
          <p>Heading4</p>
          <Divider borderColor="border-inverse" />
          <p>Heading1</p>
          <Divider borderColor="border-inverse" />
          <p>Heading2</p>
          <Divider borderColor="border-inverse" />
          <p>Heading3</p>
          <Divider borderColor="border-inverse" />
          <p>Heading4</p>
          <Divider borderColor="border-inverse" />
        </LegacyCard>
      </Grid.Cell>
      <Grid.Cell columnSpan={{xs: 3, sm: 3, md: 2, lg: 6, xl: 6}}>
        <LegacyCard title="Sales" sectioned>
          <p>View a summary of your online store’s sales.</p>
          <p>View a summary of your online store’s sales.</p>
          <p>View a summary of your online store’s sales.</p>
          <p>View a summary of your online store’s sales.</p>
          <p>View a summary of your online store’s sales.</p>
        </LegacyCard>
      </Grid.Cell>

    </Grid>
  </Page>
 
  );
}
