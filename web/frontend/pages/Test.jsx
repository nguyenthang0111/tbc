import { useState } from "react";
import { Card, TextContainer, Text, Page } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

export default function Customize() {
    return (
      <Page FullWidth>
        <Card>
        <Layout>
          <Layout.Section>
            <Text variant="heading" as="h1"> Customize Of Table Title</Text>
          </Layout.Section>
        </Layout>
        </Card>
      </Page>

    );
  }