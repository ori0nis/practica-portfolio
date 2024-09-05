import "./projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";
import { projectCard } from "../../components/projectcard/projectcard.js";
import { divider } from "../../components/divider/divider.js";

export const projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
    <h2>Featured Projects</h2>
    ${divider()}
    <div class="projects-container"></div>
    </section>`;
  const container = document.querySelector(".projects-container");
  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = projectCard(project);
    container.appendChild(figure);
  }
};