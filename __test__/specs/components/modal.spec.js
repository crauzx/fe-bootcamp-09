import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "../../../src/components/modal";

describe("Modal component", () => {
  test("render success modal", () => {
    render(
      <Modal
        title="Success testing"
        message="This is success testing"
        status="SUCCESS"
        onClose={() => {}}
      />
    );

    expect(screen.getByText("Success testing")).toBeInTheDocument();
    expect(screen.getByText("This is success testing")).toBeInTheDocument();
    expect(screen.getByText("✔")).toBeInTheDocument();
  });

  test("on close button works", () => {
    const handleOnClose = jest.fn();
    render(
      <Modal
        title="Success testing"
        message="This is success testing"
        status="SUCCESS"
        onClose={handleOnClose}
      />
    );
    
    fireEvent.click(screen.getByText("Close"));
    expect(handleOnClose).toHaveBeenCalled();
    expect(handleOnClose).toHaveBeenCalledTimes(1);
  });
});
