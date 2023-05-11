import React from "react";
import Button from '@material-ui/core/Button';

export interface ButtonProps {
  label: string;
}

const Buttons = (props: ButtonProps) => {
  return (
    <Button variant="contained" color="primary">
      {props.label}
    </Button>
  );
};

export default Buttons;