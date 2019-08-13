import * as React from "react";
import "./App.css";
// import { IProps } from "./components/Select"

export interface IFormContext extends IFormState {
  /* Function that allows values in the values state to be set */
  setValues: (values: IValues) => void;
}
/* 
 * The context which allows state and functions to be shared with Field.
 * Note that we need to pass createContext a default value which is why undefined is unioned in the type
 */
export const FormContext = React.createContext<IFormContext | undefined>(
  undefined
);

interface IFormProps {
  /* The http path that the form will be posted to */
  action: string;

  /* A prop which allows content to be injected */
  render: () => React.ReactNode 
}

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}

export interface IErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string;
}

export interface IFormState {
  /* The field values */
  values: IValues;
  checkAgainst: string;



  /* Whether the form has been successfully submitted */
  submitSuccess?: boolean;
}

export class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    const values: IValues = {};
    this.state = {
      values,
      checkAgainst: "Other..."
    };
  }

  /**
   * Returns whether there are any errors in the errors object that is passed in
   * @param {IErrors} errors - The field errors
   */
  private haveErrors(errors: IErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  /**
  * Stores new field values in state
  * @param {IValues} values - The new field values
  */
  private setValues = (values: IValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };

  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    console.log(this.state.values);
  };

  // private valueCheck(values: IValues, id: IProps | any) {
  //   if (values === ({ [id]: "Other..."})) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  /**
   * Submits the form to the http api
   * @returns {boolean} - Whether the form submission was successful or not
   */
  private async submitForm(): Promise<boolean> {
    return true;
  }

  public render() {
    const { submitSuccess } = this.state;
    const context: IFormContext = {
      ...this.state,
      setValues: this.setValues
    };

    return (
      <FormContext.Provider value={context}>
      <form onSubmit={this.handleSubmit} noValidate={true}>
        <div className="container">
          {this.props.render()}
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              
            >
              Submit
            </button>
          </div>
          {submitSuccess && (
            <div className="alert alert-info" role="alert">
              The form was successfully submitted!
            </div>
          )}
          {submitSuccess === false && (
              <div className="alert alert-danger" role="alert">
                Sorry, an unexpected error has occurred
              </div>
            )}
          {submitSuccess === false && (
              <div className="alert alert-danger" role="alert">
                Sorry, the form is invalid. Please review, adjust and try again
              </div>
            )}
        </div>
      </form>
      </FormContext.Provider>
    );
  }
}