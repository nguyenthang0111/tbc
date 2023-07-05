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
  HorizontalGrid,
  Button
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import {Divider, VerticalStack} from '@shopify/polaris';
import { Theme1 } from "../components/Theme1";
import { Theme2 } from "../components/Theme2";
import { Theme3 } from "../components/Theme3";


export default function Step1Screen() {
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
    

  ];

  return (
<Page
  title="Step 1: Select theme Table of Contents"
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
        <Theme3 data={headings}/>
      </Layout.Section>
    </HorizontalGrid>
    <Layout.Section>
    <div style={{textAlign:'center', paddingTop:'10px'}}>
      <Button primary url="/step2screen">Next</Button>
    </div>
    </Layout.Section>
  </Layout>
</Page>
  );
}

