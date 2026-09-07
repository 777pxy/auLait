import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()), // uuid workaround cuz sqlite doesnt have uuid?
  name: text().unique().notNull(),
  biography: text().default("").notNull(),
  email: text().unique().notNull(),
});
