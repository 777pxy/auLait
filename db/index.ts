import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { usersTable } from "@/db/schemas/users";
import { eq } from "drizzle-orm";

const client = createClient({ url: process.env.DB_FILE_NAME! });
const db = drizzle({ client });

async function main() {}

main();
