import {Listbox, Combobox, Icon} from '@shopify/polaris';
import {SearchMinor} from '@shopify/polaris-icons';
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

export function Search() {
  return (
    <div style={{padding: '15px 0'}}>
      <Combobox
        activator={
          <Combobox.TextField
            prefix={<Icon source={SearchMinor} />}
            label="Search"
            labelHidden
            placeholder="Search"
            autoComplete="off"
          />
        }
      >
      </Combobox>
    </div>
  );
}
