import { LitElement, html } from 'lit';

export class MyElement extends LitElement {
  render() {
    return html`<p>Hello world! This is my Lit component.</p>`;
  }
}

customElements.define('my-element', MyElement);
