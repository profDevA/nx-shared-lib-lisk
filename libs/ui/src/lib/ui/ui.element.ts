// const template = document.createElement('template');
// template.innerHTML = `
//   <p id="uiText" class="text-red-800 bg-yellow-400"></p>
//   <button id="uiButton" class="w-full h-10">Click Me</button>
// `;

// export class UIElement extends HTMLElement {
//   _value = {
//     text: '',
//   };

//   get value() {
//     return this._value;
//   }

//   set value(newValue: { text: string }) {
//     this._value = newValue;
//     this.update(this._value);
//   }

//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//     this.shadowRoot!.appendChild(template.content.cloneNode(true));
//     this.shadowRoot!.getElementById('uiButton')!.onclick = () =>
//       this.showText();
//   }

//   showText() {

//     alert(`Received object: ${JSON.stringify(this._value)}`);
//     this.dispatchEvent(
//       new CustomEvent<{ value: { text: string } }>('clicked', {
//         detail: { value: this._value },
//       })
//     );
//   }

//   update(value: { text: string }) {
//     this.shadowRoot!.getElementById('uiText')!.innerHTML = value.text;
//   }
// }

// customElements.define('ui-element', UIElement);

export class UIElement extends HTMLElement {
  public static observedAttributes = ['data-value'];

  showText(value: string) {
    alert(`Received object: ${value}`);
    this.dispatchEvent(
      new CustomEvent<{ value: { text: string } }>('clicked', {
        detail: { value: JSON.parse(value) },
      })
    );
  }

  attributeChangedCallback(name: string, old: string, value: string) {
    console.log(`Element's attribute ${name} was ${old} and is now ${value}`);
    this.innerHTML = `
      <p id="uiText" class="text-green-800 mb-4">${
        JSON.parse(value).text
      }</p>
      <button id="uiButton" class="w-full h-10 bg-green-700 hover:bg-green-500 text-white rounded">Click Me</button>
    `;
    const button = document.getElementById('uiButton');
    button?.addEventListener('click', () => this.showText(value));
  }
}

customElements.define('ui-element', UIElement);
