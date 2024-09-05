import "./button.css";

export const button = (icon, text) => `
<button class="my-btn">
<img src=${icon} alt='${text} icon'/>
<h4>${text}</h4>
</button>
`;