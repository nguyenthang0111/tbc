import { ButtonGroup, Button, Text } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import {useState, useCallback} from 'react';

export function Item({ item, message }) {
  // Change state on/off button

  const [isFirstButtonActive, setIsFirstButtonActive] = useState(item.status == 'on' ? true : false);

  const handleFirstButtonClick = useCallback(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);

  const handleSecondButtonClick = useCallback(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]);
  
  return (
    <div style={{padding: '5px 0', display:'flex', justifyContent:'space-between'}}>
      <Text>{item.name}</Text>
      <ButtonGroup>
        <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
          On
        </Button>
        <Button pressed={!isFirstButtonActive} onClick={handleSecondButtonClick}>
          Off
        </Button>
      </ButtonGroup>
    </div>
  );
}
