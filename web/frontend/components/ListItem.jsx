import { Button, Text, Scrollable, LegacyCard } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { Item } from "./Item";
import { useState } from "react";


export function ListItem({ data }) {
  const addAll = () => {
    alert("click button add all")
  }
  return (
    <div>
      <Scrollable shadow style={{height: '200px'}} focusable>
        <LegacyCard>
          {data.map((article, index) => (
            <LegacyCard.Section>
              <Item key={index} item={ article }/>
            </LegacyCard.Section>
          ))}
        </LegacyCard>
      </Scrollable>
      <div style={{textAlign:'right', paddingTop:'10px'}}>
        <Button onClick={() => addAll()}>Add all article</Button>
      </div>
    </div>
  );
}

