import { LitElement, html, css } from 'lit-element';

export class CustomButton extends LitElement {
    buttonName : string;
    className: string;
    static get properties() {
        return {
            buttonName: { type: String },
            className: { type: String }
        };
    }
      static get styles() {
        return css`
            button {
                float: center;
                margin: 8px 0;
                border: none;
                cursor: pointer;
                border: 1px solid transparent;                
                font-size: 1rem;
                line-height: 1.5;
            }
            .custom-button {
                background-color: #ff724c;
                color: white;
                border-color: #ff724c;
                width: 300px;
                height: 30px;
                border-radius: 20px;
            }
        `;
      }
      constructor() {
        super();
        this.buttonName = 'button';
      }
      render() {
        return html`
            <button class="${this.className}">${this.buttonName}</button>
        `;
      }
}