import { ButtonGroup, Button, Text } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { useState, useCallback } from 'react';

export function Item({ item, isOnButtonActive, onClick }) {
  return (
    <div style={{ padding: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
      <Text>{item.name}</Text>
      <ButtonGroup>
        <Button pressed={isOnButtonActive} onClick={onClick}>
          On
        </Button>
        <Button pressed={!isOnButtonActive} onClick={onClick}>
          Off
        </Button>
      </ButtonGroup>
    </div>
  );
}