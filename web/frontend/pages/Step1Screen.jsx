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
import { Botton1, ProductsCard } from "../components";
export default function Step1Screen() {
  return (
   
    <Page fullWidth>
    <Grid>
      <Grid.Cell columnSpan={{xs: 3, sm: 3, md: 2, lg: 6, xl: 6}}>
        <LegacyCard title="Table of contents" sectioned>

        <ol>
          <li style={{ paddingLeft: '10px' }}>heading1</li>

          <li style={{ paddingLeft: '20px' }}>heading2</li>
          <li style={{ paddingLeft: '30px' }}>Heading3</li>
          <li style={{ paddingLeft: '40px' }}>heading4</li>
        </ol>
        <ol>
          <li style={{ paddingLeft: '10px' }}>heading1</li>

          <li style={{ paddingLeft: '20px' }}>heading2</li>
          <li style={{ paddingLeft: '30px' }}>Heading3</li>
          <li style={{ paddingLeft: '40px' }}>heading4</li>
        </ol>
          
         
        </LegacyCard>
      </Grid.Cell>
      <Grid.Cell columnSpan={{xs: 3, sm: 3, md: 2, lg: 6, xl: 6}}>
        <LegacyCard title="table of Contents" sectioned>
        <ul>
            <li>heading1</li>
            <Divider borderColor="border-inverse" />
            <li>heading2</li>
            <Divider borderColor="border-inverse" />
            <li>Heading3</li>
            <Divider borderColor="border-inverse" />
            <li>heading4</li>
            <Divider borderColor="border-inverse" />
          </ul>
          <ul >
            <li>heading1</li>
            <Divider borderColor="border-inverse" />
            <li>heading2</li>
            <Divider borderColor="border-inverse" />
            <li>Heading3</li>
            <Divider borderColor="border-inverse" />
            <li>heading4</li>
            <Divider borderColor="border-inverse" />
          </ul>

          
        </LegacyCard>
      </Grid.Cell>
      <Grid.Cell columnSpan={{xs: 3, sm: 3, md: 2, lg: 6, xl: 6}}>
        <LegacyCard title="Table of contents" sectioned>
        <ul>
            <li>heading1</li>
            <li>heading2</li>
            <li>Heading3</li>
            <li>heading4</li>
          </ul>
          <ul >
            <li>heading1</li>
            <li>heading2</li>
            <li>Heading3</li>
            <li>heading4</li>
          </ul>
        </LegacyCard>
      </Grid.Cell>

    </Grid>
    <Botton1/>
  </Page>
 
  );
}