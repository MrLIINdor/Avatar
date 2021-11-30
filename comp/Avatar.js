import template from './template.js'
import { icons } from './icons.js'

export default class Avatar extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})

    const icon = this.getRandomIcon()
    shadow.innerHTML = template.render({ bgColor: this.getRandomColor(), icon: icon.svg })
    this.currentIconId = icon.id
  }

  connectedCallback() {
    const colorBtn = this.shadowRoot.querySelector('#gener')
    const iconBtn = this.shadowRoot.querySelector('#ico')
    const avatar = this.shadowRoot.querySelector("#avatar")

    colorBtn.addEventListener('click', this.setRandomColor.bind(this))
    iconBtn.addEventListener('click', this.setRandomIcon.bind(this))
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setRandomColor() {
    this.shadowRoot.querySelector('#avatar').style.backgroundColor = this.getRandomColor()
  }

  getRandomIcon() {
    const newIcon = icons[Math.floor(Math.random() * icons.length)]
    
    return newIcon.id === this.currentIconId ? this.getRandomIcon() : newIcon
  }

  setRandomIcon() {
    const icon = this.getRandomIcon()
    this.shadowRoot.querySelector('#avatar').innerHTML = icon.svg
    this.currentIconId = icon.id
  }
} 