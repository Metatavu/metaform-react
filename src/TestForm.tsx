import * as React from "react";
import { Form } from "./Form";
import { InputField } from "./components/InputField";
import { TextBox } from "./components/TextBox";
import { Select } from "./components/Select";
import "./App.css";

export const ContactUsForm: React.SFC = () => {

  return (
    <Form
      action="http://localhost:8080/test"
      render={() => (
        <React.Fragment>
          <div className="form-group" >
            Henkilötiedot
          </div>
          <InputField id="firstname" label="Firstmane" />
          <InputField id="surname" label="Secondname" />
          <InputField id="email" label="E-mail" />
          <TextBox id="notes" label="Notes"  />
          <Select
            id="language"
            label="Language"
            options={["", "Finnish", "Other..."]}
          />
        </React.Fragment>
      )}
    />
  );
};