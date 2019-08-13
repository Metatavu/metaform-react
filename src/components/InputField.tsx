import React from "react";
import { IFormContext, FormContext } from "..//Form";

export interface IProps {
    id: string;
    label?: string;
    options?: string[];
    value?: any;
}

export const InputField: React.SFC<IProps> = ({
    id,
    label,
    options,
    value,
}) => {

    return (
        <FormContext.Consumer>
            {(context: IFormContext | any) => (
                <div className="form-group">
                    {label && <label htmlFor={id}>{label}</label>}

                    <input
                        id={id}
                        value={value}
                        onChange={
                            (e: React.FormEvent<HTMLInputElement>) =>
                              context.setValues({ [id]: e.currentTarget.value })
                        }
                        className="form-control"
                    />
                </div>  
            )}
        </FormContext.Consumer>
    );
};