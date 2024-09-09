import "./footer.css";
import { button } from "../button/button";

export const footer = () => `
  <h2>Contact</h2>
  <div>
    ${button("https://github.com/ori0nis/", "./public/icons/github.jpeg", "GitHub")}
    ${button("https://www.linkedin.com/in/oihanegdcl/", "./public/icons/linkedin.jpeg", "LinkedIn")}
  </div>
`;