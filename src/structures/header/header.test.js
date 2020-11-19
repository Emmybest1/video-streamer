import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";

import Header from "./header.component";

import { dataAttLocator } from "../../../test/utils/data-attr-locator";

describe("header component test", () => {
    it("should check the existence header logo", () => {
        const component = shallow(<Header />);

        const logo = dataAttLocator(component, "logo");

        expect(logo.contains("MOVIES ABLOY")).toBe(true);
    });
});
