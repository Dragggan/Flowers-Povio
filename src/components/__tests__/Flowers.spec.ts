import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Flowers from "../../views/Flowers.vue";
import { setActivePinia, createPinia } from "pinia";

describe("Modal closed in the begining", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Should render text", () => {
    const wrapper = mount(Flowers);
    expect(wrapper.text()).toContain("Discover flowers around you");
    expect(wrapper.text()).toContain(
      "Explore between more than 8.427 sightings"
    );
  });
});
