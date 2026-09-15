export type TransactionType = "expense" | "income";

export interface Category {
  id: number;
  name: string;
  type: TransactionType;
  created_at: string;
}

export interface Expense {
  id: number;
  category_id: number;
  amount: number; // stored in paise
  description: string | null;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface Income {
  id: number;
  category_id: number;
  amount: number; // stored in paise
  description: string | null;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Reminder {
  id: number;
  title: string;
  description: string | null;
  reminder_date: string;
  is_completed: number;
  notification_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateExpenseInput {
  category_id: number;
  amount: number; // paise
  description?: string;
  date: string;
}

export interface UpdateExpenseInput {
  category_id?: number;
  amount?: number; // paise
  description?: string;
  date?: string;
}



