import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import {
  createdType,
  idType,
  idTypePk,
  lastModifiedType,
  userIDReference,
} from "./column-types";
import { usersTable } from "./users";

export const foodsTable = sqliteTable("foods", {
  id: idTypePk(),
  userID: userIDReference(),
  name: text().notNull(),
  created: createdType(),
  lastModified: lastModifiedType(),
});
