import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./users";
import {
  createdType,
  idType,
  idTypePk,
  lastModifiedType,
  userIDReference,
} from "./column-types";

export const activitiesTable = sqliteTable("activities", {
  id: idTypePk(),
  userID: userIDReference(),
  name: text().notNull(),
  description: text(),
  created: createdType(),
  lastModified: lastModifiedType(),
});
