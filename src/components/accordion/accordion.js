import { React, useState, useContext, createContext } from "react";
import {
  Container,
  Frame,
  Item,
  Header,
  Body,
  Title,
  Inner,
} from "./styles/accordionStyles";

import CloseButton from "../../images/icons/close.png";
import AddButton from "../../images/icons/add.png";

const ToggleContext = createContext();

// Accordion Components (Frequently asked questions sections)

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow((togg) => !togg)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src={CloseButton} alt="Close" />
      ) : (
        <img src={AddButton} alt="open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
