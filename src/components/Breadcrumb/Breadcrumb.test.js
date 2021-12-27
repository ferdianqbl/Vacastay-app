import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { container } = render(
    <BrowserRouter>
      <Breadcrumb data={breadcrumbList} />
    </BrowserRouter>
  );

  const breadcrumb = container.querySelector(".breadcrumb");

  return { breadcrumb };
};

test("Should have <ol> with className .breadcrumb and have text Home & House Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
