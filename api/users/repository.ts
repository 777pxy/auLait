import { db } from "@/db";
import { usersTable } from "@/db/schemas/users";
import { eq, Name } from "drizzle-orm";
import { CreateUserInput } from "./models";

export const repository = {
  async findByID(id: string) {
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id))
      .limit(1);

    return result[0] ?? null;
  },
  async create(user: CreateUserInput) {
    const result = await db.insert(usersTable).values(user).returning();

    return result;
  },
};
