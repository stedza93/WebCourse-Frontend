class AuthService {
    isAuthenticated = false;
    getAuthStatus() {return this.isAuthenticated; }
    login() {
      this.isAuthenticated = true;
    }
    logout() {
      this.isAuthenticated = false;
      window.location.href="/"
    }
  }
   export const auth = new AuthService();