# Prueba técnica para Jiniors y Trainees de React en Live Coding

APIs:

- Facts Random: https://catfact.ninja/fact
- Image Random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API ✅
- Recuperar la primera palabra del hecho ✅
- Muestra una imagen de un gato con la primera palabra del hecho ✅

## Aprendizajes:

1. Primero revisar la documentacion de las APIS, probar los endpoints y ver la respuesta.
2. Adaptar los datos a lo solicitado por ejemplo el fact devuelve un objecto, por lo que mejor guardamos en el estado la respuesta.fact quedandonos con el String.

```js
{
  fact: 'lorem ipsum dolor'
}
```

3. Usar constantes para las API_URL, queda el codigo mas limpio.
4. En la medida de lo posible demostrar que nos preocupa la accesibilidad, por ejemplo en la imagen ubicar una descripcion adecuada a la imagen.
