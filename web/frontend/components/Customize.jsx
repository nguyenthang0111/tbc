
import { ColorPicker, Checkbox, VerticalStack, Icon, Select, Card, Text, TextField } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";
import { useState, useCallback } from 'react';
import {TextAlignmentRightMajor} from '@shopify/polaris-icons';
import { Size } from "@shopify/app-bridge/actions/Modal";

export function Customize() {
  //TextField
  const [textFieldValue, setTextFieldValue] = useState('Table of contents');
  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );
  //Select Indentation
  const [selected1, setSelected1] = useState('today');
  const handleSelectChange1 = useCallback(
    (value) => setSelected1(value),
    [],
  );
  const options1 = [
    {label: 'On', value: 'On'},
    {label: 'Off', value: 'Off'},
  ];
  const [selected2, setSelected2] = useState('today');
  const handleSelectChange2 = useCallback(
    (value) => setSelected2(value),
    [],
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
    return (
          <Card>
          <VerticalStack >
          <div style={{ padding:'15px'}}>
          <TextField
            label="Table Of Contents Title"
            type="text"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            helpText="If you do not need a Header, leave it blank."
            autoComplete="off"
          />
          <Select
            prefix={<Icon source={TextAlignmentRightMajor} />}
            label="Indentation"
            options={options1}
            onChange={handleSelectChange1}
            value={selected1}
          />

          <Select
            label="Selection Line"
            options={options2}
            onChange={handleSelectChange2}
            value={selected2}
          />
          <VerticalStack>
            <Text> Headings </Text>
            <Checkbox
              label="H1"
              checked={checked1}
              onChange={handleChange1}
            />
            <Checkbox
              label="H2"
              checked={checked2}
              onChange={handleChange2}
            />
            <Checkbox
              label="H3"
              checked={checked3}
              onChange={handleChange3}
            />
            <Checkbox
              label="H4"
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
          </Card>

    );
  }

