import * as SQLite from "expo-sqlite"

import { DATABASE_SCHEMA } from "./schema"

export async function initDatabase() {
    const db = await SQLite.openDatabaseAsync("test.db");

    await db.execAsync(DATABASE_SCHEMA);

    return db;
}















