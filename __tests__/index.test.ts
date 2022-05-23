import * as plugin from "../src";

describe("VSCE plugin", () => {
    it("should export stages", () => {
        expect(plugin.init).toBeDefined();
        expect(plugin.publish).toBeDefined();
    });
});
