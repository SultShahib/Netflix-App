import React from "react";
import Chevron from "../../images/icons/chevron-right.png";
import {
  Input,
  Button,
  Text,
  Container,
  Break,
} from "./styles/optformStyles.js";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return <Input placeholder="Email Adress" />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src={Chevron} alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
  return <Break {...restProps} />;
};
