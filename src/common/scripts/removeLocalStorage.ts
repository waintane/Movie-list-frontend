import secureLocalStorage from "react-secure-storage";

export default function removeLocalStorage(key: string) {
  secureLocalStorage.removeItem(key);
}
