class MyTarget extends HTMLElement {

    #shadow;
    constructor() {
        super();

        this.#shadow = this.attachShadow({ mode: "closed" });

        this.myStyles = new CSSStyleSheet();
        this.myStyles.replaceSync(`
        .card{
            display: flex;
            flex-direction: column;
            flex:1;
        }

        .header-card {
            display: flex;
            flex-grow: 1.5;
            background-color: beige;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
        }

        .body-card {
            display: flex;
            flex-direction: column;
            flex-grow: 2.3;
            background-color: black;
            justify-content: center;
            align-items: center;
            font-family: arial;
            font-weight: bold;
            font-size: 2.3rem;
            color: white;
            padding: 0.8rem;
        }

        .profile-image {
            border-radius: 11px;
        }

        .footer-card {
            display: flex;
            flex-grow: 1;
            background-color: brown;
            justify-content: center;
            align-items: center;
            font-family: arial;
            font-weight: bold;
            font-size: 2.3rem;
            color: white;
            padding: 0.8rem;
        }
         `);

        this.#shadow.adoptedStyleSheets = [this.myStyles];
    }

    connectedCallback() {
        const url = this.getAttribute('mysrc') ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnz8hkS97j80yV1gOH15iEIzQcBgi2Kiejw&s";

        let my_shadow = this.#shadow;
        //let my_shadow = this.shadowRoot;
        this.#shadow.innerHTML = `
        <div id="card" class="card">
            <header class="header-card">
                <img src="image.png" width="250px">
            </header>

            <main class="body-card" id="my-body">
                <div>
                    <img src="${url}" width="250px" class="profile-image">
                </div>

                <div>
                    <slot name="card-name">Julián</slot>
                </div>
            </main>

            <footer class="footer-card">
                <slot name="role">Presidente</slot>
            </footer>
        </div>
    `
    
    ;
    }

    static observedAttributes = ["bg-color"];
    attributeChangedCallback(propertyName, myOldValue, myNewValue) {
        console.log(propertyName, myOldValue, myNewValue);
        //this.shadowRoot.getElementById("my-body").style.backgroundColor = myNewValue;
        this.#shadow.getElementById("my-body").style.backgroundColor = myNewValue;
    }
}
customElements.define("my-target", MyTarget);
