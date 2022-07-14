import { render } from "@testing-library/vue";
import AiButton from "./AiButton.vue";

describe.concurrent("AiButton Test", async () => {
  // The render method returns a collection of utilities to query your component
  const { getByText } = render(AiButton, {
    props: {
      text: "component test",
    },
  });
  const button = getByText("component test");

  it("Component test", async () => {
    expect(button.classList.value.includes("bg-pink-400")).toBe(false);
  });
});
