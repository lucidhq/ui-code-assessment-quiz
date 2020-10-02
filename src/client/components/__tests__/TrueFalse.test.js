import React from 'react'
import { render } from "@testing-library/react";
import TrueFalse from "../TrueFalse";

describe("TrueFalse Answer Option", () => {
  test("it should render", () => {
    const { container } = render(<TrueFalse />);

    expect(container).toMatchSnapshot();
  });
});
