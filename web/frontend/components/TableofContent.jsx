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
    Button,
    LegacyCard,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import { useTranslation, Trans } from "react-i18next";
  import {Divider, VerticalStack} from '@shopify/polaris';
  import { useAppQuery, useAuthenticatedFetch } from "../hooks";
  import { useState, useCallback } from 'react';

  export function TableofContent({data}) {
    return (

        <Layout>
        <LegacyCard>
          <div style={{width: '350px', height:'250px'}}>
            <div style={{margin: 'auto',paddingLeft: '15px',paddingTop:'7px'}}>
              <ul style={{ listStyle: 'none', margin:'0px', padding: '0px'}}>
              {data.map((heading, index) => (
                <div key={index}>
                  <li style={{ display:'list-item',padding:'4px 0px ',borderBottom:'none', listStyleType:'none' }}>
                    <a href="/" style={{display:'flex', alignItems:'center', width:'100%', margin:'0px', padding:'0px', lineHeight:'1.5', color:'rgb(111, 115, 114)', fontSize:'14px',textDecoration:'none',cursor: 'pointer' }}> {heading.h1}</a>
                  </li>
                  <li style={{ display:'list-item',margin:'0px 0px 0px 16px ',padding:'4px 0px' ,borderBottom:'none', listStyleType:'none' }}>
                    <a href="/" style={{display:'flex', alignItems:'center', width:'100%', margin:'0px', padding:'0px', lineHeight:'1.5', color:'rgb(111, 115, 114)', fontSize:'14px',textDecoration:'none',cursor: 'pointer' }}> {heading.h2}</a>
                  </li>
                  <li style={{ display:'list-item',margin:'0px 0px 0px 32px ',padding:'4px 0px' ,borderBottom:'none', listStyleType:'none' }}>
                    <a href=""style={{display:'flex', alignItems:'center', width:'100%', margin:'0px', padding:'0px', lineHeight:'1.5', color:'rgb(111, 115, 114)', fontSize:'14px',textDecoration:'none',cursor: 'pointer'  }}> {heading.h3}</a>
                  </li >
                  <li style={{ display:'list-item',margin:'0px 0px 0px 48px ',padding:'4px 0px' ,borderBottom:'none', listStyleType:'none' }}>
                  <a href=""style={{display:'flex', alignItems:'center', width:'100%', margin:'0px', padding:'0px', lineHeight:'1.5', color:'rgb(111, 115, 114)', fontSize:'14px',textDecoration:'none',cursor: 'pointer'  }}> {heading.h4}</a>
                  </li>
                </div>
    
              ))}
              </ul>
            </div>
          </div>
        </LegacyCard>
      </Layout>
   
    );
  }
  