import './style.css'
import { changeTheme } from "./components/navbar/navbar.js";
import { linkPage } from "./utils/linkPage.js";
import { navbar } from "./components/navbar/navbar.js";
import { footer as footerInMain } from "./components/footer/footer.js";
import { home } from "./pages/home/home.js";
import { renderProjects as projectsInMain } from "./pages/projects/projects.js";
import { divider } from "./components/divider/divider.js";

const header = document.querySelector("header");
header.innerHTML = navbar();
const footerElement = document.querySelector("footer");
footerElement.innerHTML = footerInMain();

linkPage("#homelink", home);
linkPage("#projectslink", projectsInMain);

home();

changeTheme();

footerElement.insertAdjacentHTML("beforebegin", divider());
