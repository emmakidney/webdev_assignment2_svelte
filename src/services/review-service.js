import axios from "axios";
import {user} from "../stores";

export class ReviewService {
    locationList = [];
    reviewList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.review) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.review);
        }
    }

    async getLocations() {
        try {
            const response = await axios.get(this.baseUrl + "/api/locations");
            this.locationList = response.data;
            return this.locationList;
        } catch (error) {
            return [];
        }
    }

    async getReviews() {
        try {
            const response = await axios.get(this.baseUrl + "/api/reviews");
            this.reviewList = response.data;
            return this.reviewList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.review = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async review(review, method, location) {
        try {
            const review = {
                review: review,
                method: method,
                location: location,
            };
            const response = await axios.post(this.baseUrl + "/api/locations/" + location._id + "/reviews", review);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.review = null;

    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }
}