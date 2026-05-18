**Prompt:** ¿Cómo puedo reemplazar el `100vh`de mi selector `.main` para que siga ocupando toda la pantalla pero sin usar la propiedad `height` directamente en ese contenedor?
```css
.main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;    
    height: 100vh; /*Acá*/
}
**Resp.** La respuesta consistió en añadir a la sección del "body" "display":flex. Y en la sección del .main colorcar flex-grow: 1; 
