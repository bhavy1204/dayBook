export const DATABASE_SCHEMA = `
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL CHECK (type IN ('expense', 'income')),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    amount INTEGER NOT NULL CHECK (amount > 0),
    description TEXT,
    date TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (category_id)
      REFERENCES categories(id)
      ON DELETE RESTRICT
  );

  CREATE TABLE IF NOT EXISTS income (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    amount INTEGER NOT NULL CHECK (amount > 0),
    description TEXT,
    date TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (category_id)
      REFERENCES categories(id)
      ON DELETE RESTRICT
  );

  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS reminders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    reminder_date TEXT NOT NULL,
    is_completed INTEGER NOT NULL DEFAULT 0 CHECK (is_completed IN (0, 1)),
    notification_id TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_expenses_date
    ON expenses(date);

  CREATE INDEX IF NOT EXISTS idx_expenses_category
    ON expenses(category_id);

  CREATE INDEX IF NOT EXISTS idx_income_date
    ON income(date);

  CREATE INDEX IF NOT EXISTS idx_income_category
    ON income(category_id);

  CREATE INDEX IF NOT EXISTS idx_reminders_date
    ON reminders(reminder_date);
`;
