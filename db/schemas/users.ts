import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createdType, idTypePk, lastModifiedType } from "./column-types";

export const usersTable = sqliteTable("users", {
  id: idTypePk(),
  username: text().notNull().unique(),
  biography: text().notNull().default(""),
  email: text().notNull().unique(),
  created: createdType(),
  lastModified: lastModifiedType(),
});
