import { text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./schemas/users";

export function createdType() {
  return text()
    .notNull()
    .$default(() => new Date().toISOString());
}

export function lastModifiedType() {
  return text()
    .notNull()
    .$default(() => new Date().toISOString())
    .$onUpdateFn(() => new Date().toISOString());
}

export function idTypePk() {
  return text()
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID());
}

export function idType() {
  return text().notNull();
}

export function userIDReference() {
  return idType().references(() => usersTable.id, { onDelete: "cascade" });
}
