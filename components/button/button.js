import "./button.css";

export const button = (link, icon, text) => `

<a href="${link}" target="_blank" rel="noopener noreferrer">
<button class="my-btn">

<img src=${icon} alt='${text} icon'/>
<h4>${text}</h4>
</button>
`;