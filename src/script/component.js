import Cat from '../images/cat.jpg';

class Component extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div>
                <h1>My Images</h1>
                <img src="${Cat}" alt="Images"/>
            </div>
        `;
    }
}

customElements.define('my-component', Component);