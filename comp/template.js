export default {
    html(props) {
      return `
      <div class="avatar-wrapper">
        <div id="avatar">${props.icon}</div>
        <button type="button" id="gener">Сгенерировать Цвет</button>
        <button type="button" id="ico">Сгенерировать Иконку</button>
      </div>
      `
    },
    css(props) {
      return `
      <style>
        * {
          box-sizing: border-box;
        }
  
        .avatar-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          flex-direction: column;
        }
  
        #avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40vh;
          width: 40vh;
          border-radius: 50%;
          background-color: ${props.bgColor};
          margin: 1rem;
          border: 2px solid #dee2e6;
        }
  
        #avatar>svg {
          width: 75%;
          height: 75%;
        }
  
        button {
          cursor: pointer;
          border-radius: 3px;
          background: #fff;
          transition: 0.4s;
          font-size: 1.1rem;
          padding: 0.7rem;
          transition: transform 0.1s linear;
        }
  
        button:active {
          transform: scale(0.9);
        }
  
        #gener{
          
          margin: 1rem;
          border: 1px solid #15ace7;
          color: #15ace7;
        }
  
        #gener:hover{
          background: #15ace7;
          color: #fff;
        }
  
        #ico {
      
          margin: 0.8rem 0.5rem;
          border: 1px solid #e79315;
          color: #e79315;
        }
  
        #ico:hover{
          background: #e79315;
          color: #fff;
        }
      </style>
      `
    },
    render(props) {
      return this.html(props) + this.css(props)
    },
  }