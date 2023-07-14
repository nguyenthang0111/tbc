import {
    Card,
    Page,
    Layout,
    TextContainer,
    Button,
    LegacyCard,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  import { useTranslation, Trans } from "react-i18next";
  import {Divider, VerticalStack} from '@shopify/polaris';
  import { useAppQuery, useAuthenticatedFetch } from "../hooks";
  import { useState, useCallback } from 'react';

  export function TableofContent({data, setting}) {
    console.log(setting)
    return (
      <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <div style={{width:'100%', maxWidth:'none', margin: '0px', padding: '16px', backgroundColor:'rgb(247,249,249)', border: '1px solid rgb(228,228,228)'}}>
          <div style={{ display: 'flex', flexDirection:'row', alignItems:'center', margin: '0', padding: '0'}}>
            {setting.title &&
              <h2 style={{ margin: '0 8px 0 0', padding: '0px', lineHeight: '1.5', fontSize:'14px', fontWeight:'700', letterSpacing: '0.04em'}}>
                {setting.title}
              </h2>
            }
          </div>

          <ul style={{ listStyle: 'none', margin:'0px', padding: '0px'}}>
            {data.map((heading, index) => (
              <div key={index}>
                {/* Heading 1 */}
                <li style={{ 
                  display:'list-item',
                  padding:'8px 0px ',
                  borderBottom: setting.section == 'Off' ? 'none': '1px solid rgb(111, 115, 114)', 
                  listStyleType:'none' 
                }}>
                  <a href="/" style={{
                    display:'flex', 
                    alignItems:'center', 
                    width:'100%', 
                    margin: '0px', 
                    padding:'0px', 
                    lineHeight:'1.5', 
                    color:'rgb(111, 115, 114)', 
                    fontSize:'14px',
                    textDecoration:'none',
                    cursor: 'pointer' }}> 
                      {heading.h1}
                  </a>
                </li>
                
                {/* Heading 2 */}
                <li style={{ 
                  display:'list-item',
                  margin: setting.indentation == 'Off'? '0px' : '0 0 0 16px',
                  padding:'8px 0px' ,
                  borderBottom: setting.section == 'Off' ? 'none': '1px solid rgb(111, 115, 114)', 
                  listStyleType:'none' 
                }}>
                  <a href="/" style={{
                    display:'flex', 
                    alignItems:'center', 
                    width:'100%', 
                    margin: '0px', 
                    padding:'0px', 
                    lineHeight:'1.5', 
                    color:'rgb(111, 115, 114)', 
                    fontSize:'14px',
                    textDecoration:'none',
                    cursor: 'pointer' }}> 
                    {heading.h2}
                  </a>
                </li>
                
                {/* Heading 3 */}
                <li style={{ 
                  display:'list-item',
                  margin: setting.indentation == 'Off'? '0px' : '0 0 0 32px',
                  padding:'8px 0px' ,
                  borderBottom: setting.section == 'Off' ? 'none': '1px solid rgb(111, 115, 114)', 
                  listStyleType:'none' 
                }}>
                  <a href=""style={{
                    display:'flex', 
                    alignItems:'center', 
                    width:'100%', 
                    margin: '0px', 
                    padding:'0px', 
                    lineHeight:'1.5', 
                    color:'rgb(111, 115, 114)', 
                    fontSize:'14px',
                    textDecoration:'none',
                    cursor: 'pointer'  
                  }}> 
                    {heading.h3}
                  </a>
                </li >

                {/* Heading 4 */}
                <li style={{ 
                  display:'list-item',
                  margin: setting.indentation == 'Off'? '0px' : '0 0 0 48px',
                  padding:'8px 0px' ,
                  borderBottom: setting.section == 'Off' ? 'none': '1px solid rgb(111, 115, 114)', 
                  listStyleType:'none' 
                }}>
                  <a href=""style={{
                    display:'flex', 
                    alignItems:'center', 
                    width:'100%', 
                    margin:'0px', 
                    padding:'0px', 
                    lineHeight:'1.5', 
                    color:'rgb(111, 115, 114)', 
                    fontSize:'14px',
                    textDecoration:'none',
                    cursor: 'pointer'  
                  }}> 
                    {heading.h4}
                  </a>
                </li>
              </div>
    
            ))}
          </ul>
        </div>
      </div>
    );
  }
  