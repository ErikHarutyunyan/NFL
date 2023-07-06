class SessionStorageService {
  static setItem(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting item in session storage:", error);
    }
  }

  static getItem(key) {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error getting item from session storage:", error);
      return null;
    }
  }

  static removeItem(key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from session storage:", error);
    }
  }
}
export default SessionStorageService