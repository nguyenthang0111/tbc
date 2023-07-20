import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Page,
  Layout,
  Link,
  Text,
  Button,
  Select,
  Form
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { Theme1 } from "../components/Theme1";
import { Theme2 } from "../components/Theme2";
import { Theme3 } from "../components/Theme3";
import { useMutation } from "react-query";
import axios from "axios";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";


export default function Step1Screen() {
  // GET DATA
  const {
    data,
    isLoading,
    isRefetching,
  } = useAppQuery({
    url: "/api/shop",
    reactQueryOptions: {
    },
  });
 
  useEffect(async () => {
    console.log(data);
  }, [data])


  const [selectedTheme, setSelectedTheme] = useState("theme1");
  const navigate = useNavigate();
  const handleThemeChange = useCallback(
    (value) => {
      setSelectedTheme(value);
    },
    []
  );

  const [formValues, setFormValues] = useState({
    title: "",
    indentation: "",
    section: "",
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false
  });

  const headings = [
    {
      id: "1",
      h1: "Heading 1",
      h2: "Heading 2",
      h3: "Heading 3",
      h4: "Heading 4"
    },
    {
      id: "2",
      h1: "Heading 1",
      h2: "Heading 2",
      h3: "Heading 3",
      h4: "Heading 4"
    }
  ];

  const renderThemeComponent = () => {
    switch (selectedTheme) {
      case "theme1":
        return <Theme1 data={headings} />;
      case "theme2":
        return <Theme2 data={headings} />;
      case "theme3":
        return <Theme3 data={headings} />;
      default:
        return null;
    }
  };

  // POST METHOD
  const mutation = useMutation((value) => {
    return axios.post("/setting/create", value);
  });

  const handleSubmit = useCallback(
    (_event) => {
      switch (selectedTheme) {
        case "theme1":
          formValues.title = "Table of Contents";
          formValues.indentation = "On";
          formValues.section = "Off";
          formValues.checked1 = true;
          formValues.checked2 = true;
          formValues.checked3 = true;
          formValues.checked4 = true;
          break;
        case "theme2":
          formValues.title = "Table of Contents";
          formValues.indentation = "On";
          formValues.section = "On";
          formValues.checked1 = true;
          formValues.checked2 = true;
          formValues.checked3 = true;
          formValues.checked4 = true;
          break;
        case "theme3":
          formValues.title = "Table of Contents";
          formValues.indentation = "Off";
          formValues.section = "Off";
          formValues.checked1 = true;
          formValues.checked2 = true;
          formValues.checked3 = true;
          formValues.checked4 = true;
          break;
        default:
          break;
      }

      mutation.mutate({
        title: formValues.title,
        indentation: formValues.indentation,
        section: formValues.section,
        checked1: formValues.checked1,
        checked2: formValues.checked2,
        checked3: formValues.checked3,
        checked4: formValues.checked4,
        shopid: data.shopid,
        email: data.email,
        name: data.name,
        store_name: data.store_name,
        shop_plan: data.shop_plan,
        domain: data.domain
      });

      navigate("/step2screen");
    },
    [selectedTheme]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Page narrowWidth title="Step 1: Select theme Table of Contents">
        <Layout>
          <Layout.Section>
          <div style={{ display: "flex", justifyContent: "center", textAlign: "center"}}>
          <div style={{ width: "250px" }}>
            <Select
              options={[
                { label: "Theme 1", value: "theme1" },
                { label: "Theme 2", value: "theme2" },
                { label: "Theme 3", value: "theme3" }
              ]}
              value={selectedTheme}
              onChange={handleThemeChange}
            />
          </div>
          </div>
          </Layout.Section>
          <Layout.Section>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {renderThemeComponent()}
            </div>
          </Layout.Section>
          <Layout.Section>
            <div style={{ textAlign: "center", paddingTop: "10px" }}>
              <Text as="span">
                <Button primary submit>
                <Link onClick={handleSubmit} url="/step2screen">
                    <div style={{color: "white"}}>Next</div>
                </Link>
                </Button>
              </Text>
            </div>
          </Layout.Section>
        </Layout>
      </Page>
    </Form>
  );
}
