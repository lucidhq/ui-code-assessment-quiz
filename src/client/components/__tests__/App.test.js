import React from "react";
import { render } from "@testing-library/react";
import { App } from "../App";

describe('App Component test suite', () => {
  test('it should render', () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot();
  })
})
