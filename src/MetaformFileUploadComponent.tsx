import React from 'react';
import { MetaformField } from './models/api';
import { FieldValue } from './types';

/**
 * Component props
 */
interface Props {
  field: MetaformField,
  fieldId: string,
  fieldLabelId: string,
  formReadOnly: boolean,
  value: FieldValue,
  onValueChange: (value: FieldValue) => void,
  onFocus: () => void,
  uploadFiles: (files: FileList) => string | null
}

/**
 * Component state
 */
interface State {
  filesArray: string[];
}

/**
 * Component for Metaform text field
 */
export class MetaformFileUploadComponent extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
        filesArray: []
    };
  }

  /**
   * Component render method
   */
  public render() {
    if (!this.props.field.name) {
      return null;
    }
    
    return (
        <div>
            <input type="file" name="file" onChange={this.onFileUpload} multiple={true}/>
            {(this.state.filesArray || []).map((filename, index) => <footer key={index}>{filename}</footer>)}
        </div>
    );
  }
  
  /**
   * Event handler for field input change
   * 
   * @param event event
   */
  private onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files != null) {
        this.props.onValueChange(this.props.uploadFiles(event.target.files));
      }
  }
}