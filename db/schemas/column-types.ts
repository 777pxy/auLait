import { text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./users";

export const createdType = () =>
  text()
    .notNull()
    .$default(() => new Date().toISOString());

export const lastModifiedType = () =>
  text()
    .notNull()
    .$default(() => new Date().toISOString())
    .$onUpdateFn(() => new Date().toISOString());

export const idTypePk = () =>
  text()
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID());

export const idType = () => text().notNull();

export const userIDReference = () =>
  idType().references(() => usersTable.id, { onDelete: "cascade" });
