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
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import { useTranslation, Trans } from "react-i18next";
  import {Divider, VerticalStack} from '@shopify/polaris';
  
  
  export function Theme2({ data }) {
    return (
      <LegacyCard>
        <div style={{width: '350px', height:'250px'}}>
            <div style={{margin: 'auto',paddingLeft: '15px',paddingTop:'25px'}}>
              <ul style={{ listStyle: 'none'}}>
              {data.map((heading, index) => (
                <div key={index}>
      
                  <li style={{ fontSize: '15px' }}>
                    <a href="/" style={{textDecoration: 'none',pointerEvents:'none'}}> {heading.h1}</a>
                  </li>
                  <li >
                    <a href="" style={{pointerEvents:'none'}}> {heading.h2}</a>
                  </li>
                  <li>
                    <a href="" style={{pointerEvents:'none'}}> {heading.h3}</a>
                  </li>
                  <li>
                    <a href="" style={{pointerEvents:'none'}}> {heading.h4}</a>
                  </li>

                </div>
    
              ))}
              </ul>
            </div>
          </div>
      </LegacyCard>
    );
          
    
  
    
  }
