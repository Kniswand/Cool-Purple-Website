import { addPageContent } from "../model/model.js";
import { setLoggedInOut } from "../model/model.js";

addPageContent("home");

$("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    addPageContent(btnID);
});

$("nav .links .log span").on("click", (e) => {
    setLoggedInOut();
});