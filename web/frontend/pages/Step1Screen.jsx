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
  LegacyCard,
  HorizontalGrid
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import {Divider, VerticalStack} from '@shopify/polaris';
import { Theme1 } from "../components/Theme1";
import { Theme2 } from "../components/Theme2";


export default function Step1Screen() {
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
    

  ];

  return (
<Page
  title="3/4 inch Leather pet collar"
  >
  <Layout>
    <HorizontalGrid gap='4' columns={3}>
      <Layout.Section>
        <Theme1 data={headings}/>
      </Layout.Section>
      <Layout.Section>
        <Theme2 data={headings}/>
      </Layout.Section>
      <Layout.Section>
        <Theme1 data={headings}/>
      </Layout.Section>
    </HorizontalGrid>
  </Layout>
</Page>
  );
}

