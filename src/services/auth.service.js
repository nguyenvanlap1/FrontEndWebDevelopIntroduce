import createApiClient from "./api.service";

class AuthService {
    constructor(baseUrl = "http://localhost:3000/api/auth") {
        // Pass 'true' to enable credentials
        this.api = createApiClient(baseUrl, true);
    }

    async logout() {
        return (await this.api.post("/logout")).data;
    }

    async checkLogin() {
        return (await this.api.post("/checklogin")).data;
    }

    async login(data) {
    try {
        const response = await this.api.post("/login", data, { withCredentials: true });
        return response.data;
    } catch (error) {
        // Kiểm tra nếu lỗi đến từ phản hồi của server
        if (error.response && error.response.data && error.response.data.message) {
            console.error("Error logging in user:", error.response.data.message);
            throw new Error(error.response.data.message); // Ném ra thông điệp lỗi từ server
        } else {
            console.error("Error logging in user:", error.message || "Unknown error occurred");
            throw new Error(error.message || "Unknown error occurred"); // Ném ra thông điệp lỗi chung
        }
    }
}

}

export default new AuthService();
