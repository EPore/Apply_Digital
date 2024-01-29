
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
    },
  },
});
