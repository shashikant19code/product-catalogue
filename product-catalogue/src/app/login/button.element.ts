import { LitElement, html, customElement, property } from 'lit-element';


@customElement('hello-world')

export class ButtonElement extends LitElement {

    // @property() name;

    constructor() {
        super();
        this.render();
        this.innerText = `Hello, I am a Web Component!`;
    }

    public connectedCallback()  {
        return html`<div>Hello </div>`;
    }

    public render()  {
        return html`<div>Hello </div>`;
    }
}

customElements.define('hello-world', ButtonElement);

// import {LitElement, html, css, customElement, property} from 'lit-element';
 
// // This decorator defines the element.
// @customElement('my-element')
// export class ButtonElement extends LitElement {

//   // This decorator creates a property accessor that triggers rendering and
//   // an observed attribute.
//   @property()
//   mood = 'great';

//   static styles = css`
//     span {
//       color: green;
//     }`;

//   // Render element DOM by returning a `lit-html` template.
//   render() {
//     return html`Web Components are <span>${this.mood}</span>!`;
//   }

// }