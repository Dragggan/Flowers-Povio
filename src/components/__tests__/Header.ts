import { describe, it, expect } from "vitest";

describe("import vue components", () => {
  it("Modal imports as expected", async () => {
    const Modal = await import("../Modal.vue");
    expect(Modal).toBeDefined();
  });
  it("Flowers imports as expected", async () => {
    const Flowers = await import("../../views/Flowers.vue");
    expect(Flowers).toBeDefined();
  });
  it("Latestsightings imports as expected", async () => {
    const Latestsightings = await import("../../views/Latestsightings.vue");
    expect(Latestsightings).toBeDefined();
  });
  it("Favorites imports as expected", async () => {
    const Favorites = await import("../../views/Favorites.vue");
    expect(Favorites).toBeDefined();
  });
  it("App component is defined", async () => {
    const App = await import("../../App.vue");
    expect(App).toBeDefined();
  });
});
localStorage.setItem("isLogedIn", "true");
