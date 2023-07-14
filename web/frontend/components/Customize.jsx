
import { ColorPicker, Checkbox, VerticalStack, Icon, Select, Form, Text, TextField, LegacyCard, FormLayout } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { useState, useCallback, useEffect } from 'react';
import {TextAlignmentRightMajor} from '@shopify/polaris-icons';
import { Size } from "@shopify/app-bridge/actions/Modal";

export function Customize({ setSetting }) {
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
  // const handleChange = (event) => {
  //   console.log(event);
  // };

  // Table of content title
  const [title, setTitle] = useState('');
  const [indentation, setIndentation] = useState('Off');
  const [section, setSection] = useState('On');

  const [formValues, setFormValues] = useState({
    title: '',
    indentation: '',
    section: ''
  });

  const handleTitleChange = useCallback(
    (value) => {
      setTitle(value); 
    },
    [title],
  );

  //Select Indentation
  const handleIndentationChange = useCallback(
    (value) => {
      setIndentation(value);
    },
    [indentation],
  );

  const options1 = [
    {label: 'On', value: 'On'},
    {label: 'Off', value: 'Off'},
  ];

  // Select Section Line
  const handleSectionChange = useCallback(
    (value) => {
      setSection(value);
    },
    [section],
  );
  const options2 = [
    {label: 'On', value: 'On'},
    {label: 'Off', value: 'Off'},
  ];

//Headings
const [checked1, setChecked1] = useState(false);
const handleChange1 = useCallback(
  (newChecked) => setChecked1(newChecked),
  [],
);
const [checked2, setChecked2] = useState(false);
const handleChange2 = useCallback(
  (newChecked) => setChecked2(newChecked),
  [],
);
const [checked3, setChecked3] = useState(false);
const handleChange3 = useCallback(
  (newChecked) => setChecked3(newChecked),
  [],
);
const [checked4, setChecked4] = useState(false);
const handleChange4 = useCallback(
  (newChecked) => setChecked4(newChecked),
  [],
);
//Color
const [color1, setColor1] = useState({
  hue: 120,
  brightness: 1,
  saturation: 1,
});
const [color2, setColor2] = useState({
  hue: 120,
  brightness: 1,
  saturation: 1,
});
const [color3, setColor3] = useState({
  hue: 120,
  brightness: 1,
  saturation: 1,
});


    const handleSubmit = useCallback((_event) => {
      formValues.title = title;
      formValues.indentation = indentation;
      formValues.section = section;
      console.log(formValues); 
      setSetting(formValues);
   }, [title, indentation, section]);

    return (
      <Form onSubmit={handleSubmit}>
          <Text as="span">
            <button type="submit" aria-hidden='true' tabIndex={-1}>Submit</button>
          </Text>
         <FormLayout>
          <LegacyCard>
            <VerticalStack >
              <div style={{ padding:'15px'}}>
              <TextField
                label="Table Of Contents Title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                helpText="If you do not need a Header, leave it blank."
                autoComplete="off"
              />
              <Select
                prefix={<Icon source={TextAlignmentRightMajor} />}
                label="Indentation"
                options={options1}
                onChange={handleIndentationChange}
                value={indentation}
              />

              <Select
                label="Section Line"
                options={options2}
                onChange={handleSectionChange}
                value={section}
              />
              <VerticalStack>
                <Text> Headings </Text>
                <Checkbox
                  label="h1"
                  checked={checked1}
                  onChange={handleChange1}
                />
                <Checkbox
                  label="h2"
                  checked={checked2}
                  onChange={handleChange2}
                />
                <Checkbox
                  label="h3"
                  checked={checked3}
                  onChange={handleChange3}
                />
                <Checkbox
                  label="h4"
                  checked={checked4}
                  onChange={handleChange4}
                />
              </VerticalStack>
            <VerticalStack>
          
              <Text>Color of background</Text>
              <ColorPicker onChange={setColor1} color={color1} />
              <Text>Color of line</Text>
              <ColorPicker onChange={setColor2} color={color2} />
              <Text>Color of text</Text>
              <ColorPicker onChange={setColor3} color={color3} />
              
            </VerticalStack>
          </div>
        </VerticalStack>
      </LegacyCard>
      </FormLayout>
      </Form>
    );
  }
