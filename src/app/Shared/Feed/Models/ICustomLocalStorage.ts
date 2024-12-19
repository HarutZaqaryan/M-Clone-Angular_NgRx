export interface ICustomLocalStorage extends Storage {
    getItem(key: any): string | null;
    setItem(key: any, value: string): void;
  }