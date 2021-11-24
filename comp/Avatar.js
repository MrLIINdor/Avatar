// import './style.css';

class Avatar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="avatar"></div>
            <button  type="button" сlass='btn' id="gener">Сгенерировать</button>
        `;
        // let value = this.getAttribute("val");
        // this.changeValue(+value);
        this.addEventListener("click", getRandomColor());
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
      
      
    setRandomColor() {
        $("#avatar").css("background-color", getRandomColor());
    }
    
} 


window.customElements.define("custom-avatar", Avatar);