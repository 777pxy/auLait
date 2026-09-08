import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import {
  createdType,
  idTypePk,
  lastModifiedType,
  userIDReference,
} from "../column-types";

export const foodsTable = sqliteTable("foods", {
  id: idTypePk(),
  userID: userIDReference(),
  name: text().notNull(),
  created: createdType(),
  lastModified: lastModifiedType(),
});
