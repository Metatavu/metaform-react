import React from "react";

export interface IProps {
    id: string;
    label?: string;
    options?: string[];
    value?: any;
}

export const CheckBox: React.SFC<IProps> = ({
    id,
    label,
    options,
    value
}) => {

    return (
        <div className="form-group">
            {label && <label htmlFor={id}>{label}</label>}

            <input 
                id={id}
                value={value}
                onChange={
                    (e: React.FormEvent<HTMLInputElement>) =>
                        console.log(e) /* TODO: push change to form values */
                }
                checked={false}
                type="checkbox"
                className="form-control"
            >
                <option value="" disabled />
                {options && 
                    options.map(option => (
                        <option key={option} value={option} label={option}>
                            {option}
                        </option>
                    ))}
            </input>
        </div>
    );
};