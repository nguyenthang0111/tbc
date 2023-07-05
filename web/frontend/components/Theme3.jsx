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
import { Item } from "./Item";
  
  
  export function Theme3({ data }) {
    return (
      <LegacyCard
        title='Table of Contents'
      >
        <div style={{width: '275px', height:'250px'}}>
            <div style={{margin: 'auto',paddingLeft: '20px'}}>
              <ul style={{ listStyle: 'number', margin:'0px', padding: '0px'}}>
              {data.map((heading, index) => (
                <div key={index}>
      
                  <li style={{ display:'list-item',padding:'4px 0px ', listStyleType:'none', borderBottom: '1px solid black' }}>
                    <a href="/" style={{display:'flex', alignItems:'center', width:'100%', margin:'0px', padding:'0px', lineHeight:'1.5', color:'rgb(111, 115, 114)', fontSize:'14px',textDecoration:'none',cursor: 'pointer' }}> {heading.h1}</a>
                  </li>
                  <li style={{ display:'list-item',margin:'0px 0px 0px 0px ',padding:'4px 0px', listStyleType:'none',  borderBottom: '1px solid black' }}>
                  <a href="/" style={{display:'flex', alignItems:'center', width:'100%', margin:'0px', padding:'0px', lineHeight:'1.5', color:'rgb(111, 115, 114)', fontSize:'14px',textDecoration:'none',cursor: 'pointer' }}> {heading.h2}</a>
                  </li>
                  <li style={{ display:'list-item',margin:'0px 0px 0px 0px ',padding:'4px 0px', listStyleType:'none', borderBottom: '1px solid black' }}>
                    <a href=""style={{display:'flex', alignItems:'center', width:'100%', margin:'0px', padding:'0px', lineHeight:'1.5', color:'rgb(111, 115, 114)', fontSize:'14px',textDecoration:'none',cursor: 'pointer'  }}> {heading.h3}</a>
                  </li >
                  <li style={{ display:'list-item',margin:'0px 0px 0px 0px ',padding:'4px 0px', listStyleType:'none' , borderBottom: '1px solid black'}}>
                  <a href=""style={{display:'flex', alignItems:'center', width:'100%', margin:'0px', padding:'0px', lineHeight:'1.5', color:'rgb(111, 115, 114)', fontSize:'14px',textDecoration:'none',cursor: 'pointer'  }}> {heading.h4}</a>
                  </li>

                </div>
    
              ))}
              </ul>
            </div>
          </div>
          
      </LegacyCard>
    );
          
    
  
    
  }
