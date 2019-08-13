import React from "react";
import { IFormContext, FormContext } from "..//Form";

export interface IProps {
    id: string;
    label?: string;
    options?: string[];
    value?: any;
}

export const Select: React.SFC<IProps> = ({
    id,
    label,
    options,
    value
}) => {

    return (
        <FormContext.Consumer>
            {(context: IFormContext | any) => (
                <div className="form-group">
                    {label && <label htmlFor={id}>{label}</label>}

                    <select
                        id={id}
                        value={value}
                        onChange={
                            (e: React.FormEvent<HTMLSelectElement>) =>
                                context.setValues({ [id]: e.currentTarget.value }) 
                        }
                        className="form-control"
                    >
                        <option value="" disabled />
                        {options &&
                            options.map(option => (
                                <option key={option} value={option} label={option}>
                                    {option}
                                </option>
                            ))}
                    </select>
                </div>
            )}
        </FormContext.Consumer>

    );
};