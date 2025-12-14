import { supabase } from './supabase';
import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  email: string;
  name: string | null;
  is_admin: boolean;
  created_at: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  user_id?: string;
}

/**
 * Register a new admin user
 */
export async function signUp(
  email: string,
  password: string,
  name: string,
  isAdmin: boolean = false
): Promise<AuthResponse> {
  try {
    if (!supabase) {
      return {
        success: false,
        error: 'Supabase not configured',
      };
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Insert user into database
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          email,
          password_hash: passwordHash,
          name,
          is_admin: isAdmin,
        },
      ])
      .select()
      .single();

    if (error) {
      return {
        success: false,
        error: error.message || 'Failed to create user',
      };
    }

    return {
      success: true,
      user: data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Registration failed',
    };
  }
}

/**
 * Authenticate user with email and password
 */
export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    if (!supabase) {
      return {
        success: false,
        error: 'Supabase not configured',
      };
    }

    // Fetch user by email
    const { data: users, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError || !users) {
      return {
        success: false,
        error: 'Invalid email or password',
      };
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(password, users.password_hash);

    if (!passwordMatch) {
      return {
        success: false,
        error: 'Invalid email or password',
      };
    }

    // Store user session in localStorage
    if (typeof window !== 'undefined') {
      const userSession = {
        id: users.id,
        email: users.email,
        name: users.name,
        is_admin: users.is_admin,
        logged_in_at: new Date().toISOString(),
      };
      localStorage.setItem('auth_user', JSON.stringify(userSession));
      localStorage.setItem(
        'auth_token',
        Buffer.from(`${users.id}:${Date.now()}`).toString('base64')
      );
    }

    return {
      success: true,
      user: {
        id: users.id,
        email: users.email,
        name: users.name,
        is_admin: users.is_admin,
        created_at: users.created_at,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Login failed',
    };
  }
}

/**
 * Get current authenticated user from session
 */
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const userStr = localStorage.getItem('auth_user');
  if (!userStr) {
    return null;
  }

  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return !!localStorage.getItem('auth_token');
}

/**
 * Sign out user and clear session
 */
export function signOut(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_token');
  }
}

/**
 * Fetch all contact messages (admin only)
 */
export async function getAllContactMessages(): Promise<ContactMessage[]> {
  try {
    if (!supabase) {
      console.error('Supabase not configured');
      return [];
    }

    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching messages:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching messages:', error);
    return [];
  }
}

/**
 * Fetch paginated contact messages
 */
export async function getContactMessagesPage(
  page: number = 1,
  pageSize: number = 10
): Promise<{
  messages: ContactMessage[];
  total: number;
  pages: number;
}> {
  try {
    if (!supabase) {
      return { messages: [], total: 0, pages: 0 };
    }

    const offset = (page - 1) * pageSize;

    // Get total count
    const { count, error: countError } = await supabase
      .from('contact_messages')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      return { messages: [], total: 0, pages: 0 };
    }

    // Get paginated data
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      return { messages: [], total: 0, pages: 0 };
    }

    const total = count || 0;
    const pages = Math.ceil(total / pageSize);

    return {
      messages: data || [],
      total,
      pages,
    };
  } catch (error) {
    console.error('Error fetching paginated messages:', error);
    return { messages: [], total: 0, pages: 0 };
  }
}

/**
 * Delete a contact message
 */
export async function deleteContactMessage(id: number): Promise<boolean> {
  try {
    if (!supabase) {
      return false;
    }

    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting message:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting message:', error);
    return false;
  }
}

/**
 * Search contact messages by name, email, or subject
 */
export async function searchContactMessages(
  query: string
): Promise<ContactMessage[]> {
  try {
    if (!supabase) {
      return [];
    }

    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .or(
        `name.ilike.%${query}%,email.ilike.%${query}%,subject.ilike.%${query}%`
      )
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching messages:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error searching messages:', error);
    return [];
  }
}

/**
 * Get contact messages from specific date range
 */
export async function getContactMessagesDateRange(
  startDate: string,
  endDate: string
): Promise<ContactMessage[]> {
  try {
    if (!supabase) {
      return [];
    }

    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .gte('created_at', startDate)
      .lte('created_at', endDate)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching messages by date:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching messages by date:', error);
    return [];
  }
}
