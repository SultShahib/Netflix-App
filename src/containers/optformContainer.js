import React from "react";
import OptForm from "../components/optform/optform";

export function OptFormContainer({ children, ...restProps }) {
  return (
    <OptForm>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
      <OptForm.Break />
      <OptForm.Input />
      <OptForm.Button>Get Started</OptForm.Button>
    </OptForm>
  );
}
