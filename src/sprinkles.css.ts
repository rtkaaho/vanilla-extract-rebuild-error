import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const colors = defineProperties({
  properties: {
    backgroundColor: {
      red: "red"
    }
  }
});

export const atoms = createSprinkles(colors);

export type Atoms = Parameters<typeof atoms>[0];