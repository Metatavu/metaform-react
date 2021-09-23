import React from 'react';
import { MetaformField } from './generated/client/models';
import { FieldValue } from './types';

/**
 * Component props
 */
interface Props {
  field: MetaformField;
  fieldId: string;
  fieldLabelId: string;
  formReadOnly: boolean; //TODO: implement
  value: FieldValue; //TODO: implement
  renderAutocomplete: (field: MetaformField) => JSX.Element;
  onFocus: () => void;
}

/**
 * Component state
 */
interface State {
}

/**
 * Component for Metaform autocomplete field
 */
export class MetaformAutocompleteFieldComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
    };
  }
  
  /**
   * Component render method
   */
  public render() {
    const { field, renderAutocomplete } = this.props;
    return renderAutocomplete(field);
  }

}
