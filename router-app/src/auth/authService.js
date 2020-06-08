class AuthService {
    isAuthenticated = false;
    getAuthStatus() {return this.isAuthenticated; }
    login() {
      this.isAuthenticated = true;
      alert('Ulogovan')
    }
    logout() {
      this.isAuthenticated = false;
      window.location.href="/"
    }
  }
   export const auth = new AuthService();