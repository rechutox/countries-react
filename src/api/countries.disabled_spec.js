/* global describe, it, expect */
import api from "./countries";

describe("API::Get", () => {
  it("Should resolve", async () => {
    const r = await api.getAvailableCountries();
    expect(typeof r).toBe("object");
  });
});
