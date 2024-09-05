import "./footer.css";
import { button } from "../button/button";

export const footer = () => `

<h2>Contact</h2>
<div>
${button("/icons/twitter.png", "Twitter")}
${button("/icons/github.png", "GitHub")}
${button("/icons/linkedin.png", "LinkedIn")}
${button("/icons/telegram.png", "Telegram")}
</div>
`;