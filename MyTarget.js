class MyTarget extends HTMLElement {

    constructor() {
        super();
        console.log("HOLA")
        var myStyles = new CSSStyleSheet();
        myStyles.replaceSync(`
                        :host{
                            display:flex;
                            flex:1;

                        }
                        
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
            `)
        const url = this.getAttribute('mysrc') ??   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnz8hkS97j80yV1gOH15iEIzQcBgi2Kiejw&s"; 


        var shadow = this.attachShadow({ mode: "open" });
        shadow.adoptedStyleSheets = [myStyles];

        shadow.innerHTML= `
                <div id="card" class="card">
                    <header class="header-card">
                        <img src="image.png" width="250px">
                        </img>
                    </header>
                    <main class="body-card">
                        <div>
                            <img src="${url}" width="250px"
                                class="profile-image">
                            </img>
                        </div>
                        <div>
                            <slot name = "card-name">Julián</slot>
                        </div>
                    </main>
                    <footer class="footer-card">
                        <slot name = "role">Presidente</slot>
                    </footer>
        </div>
            `;
    }
}
customElements.define("my-target", MyTarget);
