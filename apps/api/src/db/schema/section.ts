import { timestamps } from "@utils/timestamps";
import { varchar } from "drizzle-orm/pg-core";
import { pgTable, boolean, uuid } from "drizzle-orm/pg-core";

export const sectionTable = pgTable("sections", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  isMain: boolean("is_main").notNull().default(false),
  ...timestamps,
});

export type insertSection = typeof sectionTable.$inferInsert;
export type selectSection = typeof sectionTable.$inferSelect;
