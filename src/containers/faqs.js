import React from "react";
import faqsData from "../fixtures/faq.json";
import Accordion from "../components/accordion/accordion";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Ask questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
