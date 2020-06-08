import apiCall from "../services/apiCall";
class AuthService {
    getAuthStatus() {
      let token = localStorage.getItem("token");
      if(!!token)this.setJwt(token)
      return !!token ? true : false;
    }
    setJwt(token) {
      apiCall.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
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