import { usersTable } from "@/db/schemas/users";

export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;

export type CreateUserInput = Pick<NewUser, "username" | "email" | "biography">;
