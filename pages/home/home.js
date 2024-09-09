import "./home.css";
import { cleanPage } from "../../utils/cleanPage";

export const home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Oihane</h1>
    <p> From Valencia, Spain. Full Stack Development student at thePower (I'm on my way to getting an Azure certification, stick around for that exciting milestone!) and Journalist by the University of Valencia. I also happen to be quite talented at getting the zoomies, which is why I am an aspiring professional triathlete.</p>
    
    <p>Welcome to my portfolio. You can find my projects in the Projects tab.

    And follow me on <a href="https://strava.app.link/toA4o7K3KMb" target="_blank" class="stravalink">Strava!</a></p>
    <a href="mailto:oihanegdcl@gmail.com">Send me an email →</a>
    </section>`;
};