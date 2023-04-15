/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
const ONE_LINE_TEST_KEY = 'ONE_LINE_TEST_KEY';
const ONE_LINE_TEST_VALUE = 'ONE_LINE_TEST_VALUE';

interface Storage {
  get(key: string, remove?: boolean): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

class MapStorage implements Storage {
  private map = new Map<string, string>();

  public get(key: string, remove: boolean = false) {
    const item = this.map.get(key) ?? null;
    if (remove) {
      this.remove(key);
    }
    return item;
  }

  public set(key: string, value: string) {
    this.map.set(key, value);
  }

  public remove(key: string) {
    this.map.delete(key);
  }
}

class LocalStorage implements Storage {
  public get(key: string, remove: boolean = false) {
    const item = localStorage.getItem(key);
    if (remove) {
      this.remove(key);
    }
    return item;
  }

  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}

const canAccessLocalStorage = () => {
  try {
    localStorage.setItem(ONE_LINE_TEST_KEY, ONE_LINE_TEST_VALUE);
    localStorage.removeItem(ONE_LINE_TEST_KEY);
    return true;
  } catch (err) {
    return false;
  }
};

const createLocalStorage = () => {
  if (canAccessLocalStorage()) {
    return new LocalStorage();
  }
  return new MapStorage();
};

export const safeLocalStorage = createLocalStorage();
