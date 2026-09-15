import * as SQLite from "expo-sqlite";

import { DATABASE_SCHEMA } from "./schema";

export async function initializeDatabase() {
    const db = await SQLite.openDatabaseAsync("daybook.db");

    await db.execAsync(DATABASE_SCHEMA);

    const result = await db.getAllAsync<{
        name: string;
    }>(
        "SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name"
    );

    console.log("SQLite tables:", result);

    return db;
}















