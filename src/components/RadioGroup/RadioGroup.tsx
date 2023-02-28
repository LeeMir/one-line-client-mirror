import React from 'react';

import { RadioGroupInput } from './RadioGroup.styled';

interface RadioGroupValue {
  name: string;
  children: React.ReactElement | React.ReactElement[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RadioGroup = ({ name, children, value, setValue }: RadioGroupValue) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        return (
          <label htmlFor={child.props.value}>
            <RadioGroupInput
              type='radio'
              name={name}
              id={child.props.value}
              value={child.props.value}
              onChange={() => setValue(child.props.value)}
              checked={value === child.props.value}
            />
            {React.cloneElement(child, { onClick: () => setValue(child.props.value) })}
          </label>
        );
      })}
    </>
  );
};

export default RadioGroup;
