import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_QUKbdCR61rhm@ep-summer-cell-a869a7sk-pooler.eastus2.azure.neon.tech/ai-study-material-generator?sslmode=require&channel_binding=require",
  },
});
