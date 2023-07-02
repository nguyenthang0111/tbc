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
  import {HorizontalGrid} from '@shopify/polaris';
  
  export default function Themestep3() {
    return (
        <SpacingBackground>
        <HorizontalGrid gap="4" columns={3}>
          <Placeholder height="320px" />
          <Placeholder height="320px" />
          <Placeholder height="320px" />
        </HorizontalGrid>
      </SpacingBackground>
    );
    };
    const SpacingBackground = ({
      children,
      width = '100%',
    }) => {
      return (
        <div
          style={{
            background: 'var(--p-color-bg-success-subdued)',
            width,
            height: 'auto',
          }}
        >
          {children}
        </div>
      );
    };
    
    const Placeholder = ({height = 'auto', width = 'auto'}) => {
      return (
        <div
          style={{
            display: 'inherit',
            background: 'var(--p-color-text-info)',
            height: height ?? undefined,
            width: width ?? undefined,
          }}
        />
      );
     
    
  }
  