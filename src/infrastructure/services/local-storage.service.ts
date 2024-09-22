export class LocalStorageService {
  static setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getValue<ValueType>(key: string): ValueType | undefined {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return undefined;
  }


  static setLang(value: any) {
    localStorage.setItem('lng', JSON.stringify(value));
  }

  static getLang<ValueType>(): ValueType | undefined {
    const value = localStorage.getItem('lng');
    if (value) return JSON.parse(value);
    return undefined;
  }
}
