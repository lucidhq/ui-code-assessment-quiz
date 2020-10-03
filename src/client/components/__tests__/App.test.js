import React from "react";
import { render } from "@testing-library/react";
import { App } from "../App";

describe('Main App Component', () => {
  test('it should render', () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot();
  })
})
