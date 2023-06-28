import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Page narrowWidth>
      <Layout>
        <Layout.Section>
          <Link url={"/step1screen"} external={false}>
              <Text>Step 1 Screen</Text>
            </Link>
            <Link url={"/step2screen"} external={false}>
              <Text>Step 2 Screen</Text>
            </Link>
            <Link url={"/mainscreen"} external={false}>
              <Text>Main Screen</Text>
            </Link>
            <Link url={"/customizescreen"} external={false}>
              <Text>Customize Screen</Text>
            </Link>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
