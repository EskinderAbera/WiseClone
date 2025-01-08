import * as Storage from "expo-secure-store";

export function getItem<T>(key: string): T | null {
  const value = Storage.getItem(key);
  try {
    return value ? JSON.parse(value) || null : null;
  } catch (error) {
    // Handle the error here
    console.error("Error parsing JSON:", error);
    return null;
  }
}

export function setItem<T>(key: string, value: T) {
  Storage.setItem(key, JSON.stringify(value));
}
