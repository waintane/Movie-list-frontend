import secureLocalStorage from "react-secure-storage";

export default function getLocalStorage(key: string) {
  const item = secureLocalStorage.getItem(key);
  if (!item) return null;

  try {
    const { value, expiresAt } = JSON.parse(item as string);
    if (Date.now() > expiresAt) {
      secureLocalStorage.removeItem(key);
      return null;
    }
    return value;
  } catch (error) {
    console.error("Erreur de parsing des données sécurisées", error);
    return null;
  }
}
