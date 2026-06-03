# 3D Heart - I LOVE YOU

Questo progetto crea un'animazione 3D in browser usando Three.js.

La scena mostra un cuore formato da tante scritte `I LOVE YOU` distribuite nello spazio. Il cuore ruota lentamente, pulsa e viene illuminato da una luce dorata, creando un effetto romantico e luminoso su sfondo nero.

## Cosa fa il codice

- Crea una scena 3D con `THREE.Scene`.
- Imposta una camera prospettica per vedere il cuore in profondita.
- Crea un renderer WebGL che occupa tutta la finestra del browser.
- Genera una texture canvas con la scritta `I LOVE YOU`.
- Usa quella texture come materiale per migliaia di sprite.
- Posiziona gli sprite seguendo la formula matematica di un cuore.
- Aggiunge profondita casuale agli sprite per ottenere un effetto 3D.
- Fa ruotare e pulsare il gruppo del cuore durante l'animazione.
- Aggiorna automaticamente la scena quando la finestra viene ridimensionata.

## Come funziona la scritta

La funzione `createTextTexture()` disegna il testo su un canvas HTML nascosto.

Quel canvas viene trasformato in una texture Three.js tramite `THREE.CanvasTexture`, poi applicato a ogni `THREE.Sprite`. In questo modo ogni particella del cuore e una piccola scritta `I LOVE YOU`.

Nella versione migliorata, la scritta viene resa piu visibile con:

- dimensioni maggiori;
- colore dorato o chiaro;
- ombra luminosa;
- bordo scuro per aumentare il contrasto;
- una scritta centrale piu grande davanti al cuore.

## Come eseguirlo

Salva il codice in un file HTML, per esempio:

```text
index.html
```

Poi apri il file con un browser moderno.

Poiche Three.js viene importato da un CDN:

```js
import * as THREE from "https://unpkg.com/three@0.164.1/build/three.module.js";
```

serve una connessione internet per caricare la libreria.

## Tecnologie usate

- HTML
- CSS
- JavaScript
- Three.js
- WebGL
- Canvas API

## Personalizzazione

Puoi modificare facilmente:

- il testo cambiando `"I LOVE YOU"`;
- il colore del testo in `ctx.fillStyle`;
- la luminosita con `ctx.shadowBlur`;
- il numero di scritte modificando il ciclo `for`;
- la velocita di rotazione cambiando `heartGroup.rotation.y`;
- la grandezza del cuore modificando i moltiplicatori di posizione e scala.
