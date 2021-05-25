import { writable } from "svelte/store";

export let mainBar = [
    {
        title: "Review",
        icon: "fas fa-pen-square fa-3x",
        colour: "color:rgb(235, 210, 52)",
        link: "/#/review",
    },
    {
    title: "Current Reviews",
    icon: "fas fa-th-list fa-3x",
    colour: "color:rgb(95, 96, 173)",
    link: "/#/reviews",
}, {
    title: "Locations",
    icon: "fas fa-location-arrow fa-3x",
    colour: "color:rgb(235, 210, 52)",
    link: "/#/locations",
},   {
        title: "Analysis",
        icon: "fas fa-chart-line fa-3x",
        colour: "color:rgb(95, 96, 173)",
        link: "/#/analysis",
    },{
        title: "Settings",
        icon: "fas fa-sliders-h fa-3x",
        colour: "color:rgb(235, 210, 52)",
        link: "/#/settings",
    }, {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(95, 96, 173)",
    link: "/#/logout"
}];

export const welcomeBar = [
    {
        title: "Sign Up",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(235, 210, 52)",
        link: "/#/signup",
    },
    {
        title: "Log In",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:rgb(95, 96, 173)",
        link: "/#/login",
    },
];

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export const subTitle = writable("");

export const user = writable({
    email: "",
    token: ""
});