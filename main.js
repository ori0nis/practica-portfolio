import './style.css'
import { changeTheme } from "./components/navbar/navbar.js";
import { linkPage } from "./utils/linkPage.js";
import { navbar } from "./components/navbar/navbar.js";
import { footer } from "./components/footer/footer.js";
import { home } from "./pages/home/home.js";
import { projects } from "./pages/projects/projects.js";
import { divider } from "./components/divider/divider.js";

const header = document.querySelector("header");
header.innerHTML = navbar();
const footer = document.querySelector("footer");
footer.innerHTML = footer();

linkPage("#homelink", home);
linkPage("#projectslink", projects);

home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", divider());
