import secureLocalStorage from "react-secure-storage";

export default function setLocalStorage(key: string, value: any, ttl: number) {
  const expiresAt = Date.now() + ttl;
  const data = { value, expiresAt };
  secureLocalStorage.setItem(key, JSON.stringify(data));
}
