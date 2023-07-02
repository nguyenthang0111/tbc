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
        <LegacyCard title="Sales" sectioned>
          <p>View a summary of your online store’s sales.</p>
          <p>View a summary of your online store’s sales.</p>
          <p>View a summary of your online store’s sales.</p>
          <p>View a summary of your online store’s sales.</p>
          <p>View a summary of your online store’s sales.</p>
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
