import { Card, TextContainer, Text } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { Item } from "./Item";


export function ListItem({ data }) {
  console.log(data)
  return (
    <div>
      {data.map((article, index) => (
        <Item key={index} item={ article }/>
      ))}
    </div>
  );
}

