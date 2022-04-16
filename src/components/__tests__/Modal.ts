import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Modal from "../Modal.vue";
import { setActivePinia, createPinia } from "pinia";

describe("Modal closed in the begining", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should show closed modal with no text", () => {
    const wrapper = mount(Modal);
    expect(wrapper.text()).toContain("");
  });
});
