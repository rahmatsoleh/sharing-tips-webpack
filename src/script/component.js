class Component extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div>
                <h1>My Images</h1>
                <img src="../images/cat.jpg" alt="Images"/>
            </div>
        `;
    }
}

customElements.define('my-component', Component);