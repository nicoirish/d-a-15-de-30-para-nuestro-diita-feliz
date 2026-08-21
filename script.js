/* ================================================================================
   LA PRINCESITA DE NUESTRA HISTORIA DE AMOR
   Motor del videojuego — HTML + CSS + JavaScript puro (sin frameworks, sin backend)
   ================================================================================
   ÍNDICE DEL ARCHIVO:
     1. PERSONALIZACIÓN  -> todo lo que puedes editar fácilmente
     2. SPRITES           -> pixel art de Paula y Nico (generado por código)
     3. ZONAS              -> mapa, obstáculos, decoraciones, disparadores
     4. MOTOR DEL JUEGO   -> lógica interna (normalmente no necesitas tocar esto)
   ================================================================================ */


/* ================================================================================
   1. PERSONALIZACIÓN
   ================================================================================
   Aquí puedes cambiar nombres, textos, preguntas, retos, diálogos de Nico
   y la carta final sin tener que tocar el resto del código.
   ================================================================================ */

const CONFIG = {

  // ---- Nombres de los personajes ----
  NOMBRES: {
    paula: "Paucita",
    nico: "Niquito"
  },

  // ---- Textos generales del juego ----
  TEXTOS: {
    tituloInicio: "LA PRINCESITA DE\nNUESTRA HISTORIA DE AMOR",
    subtituloInicio: "Una pequeña aventura del día 15 de 30 para Nuestro Día Feliz :D",

    introduccion:
      "Hace tiempo, dos caminitooos se cruzaron sin saber que estaban destinados a encontrarse.\n\n" +
      "Hoy, la princesita más hermosa del mundo (mi niña Paucita), emprende una pequeña aventura a través de cinco lugares que guardan pedacitos " +
      "de esta linditaa historiaa... hasta llegar a un castillo que esconde algo mucho más grande que un simple final.\n\n" +
      "¿Está listicaa la mujerrr mas hemosha del munditoo para recorrer nuestra historia de amor?",

    narrativaFinalCastillo:
      "Este castillo no es solo un lugar al que llegaste mi niña princesita.\n\n" +
      "Es el sueño que tanto Niquito como mi linda Paucita están construyendo juntos, paso a paso, recuerdo a recuerdo. " +
      "Y aunque aquí termine esta pequeña aventura mi niña hermosita, la historia real — la nuestra — apenas está comenzando y planeo acabarla con muchis amor y con mucha alegría junto a ti mi niña ojitos de estrellita c: ",

    finTitulo: "FIN DE LA AVENTURA",
    finSubtitulo: "Pero esta historia apenas comienza..."
  },

  // ---- Nombres de las 5 zonas (en orden) ----
  ZONA_NOMBRES: [
    "Bosque del Comienzo",
    "Liceo Santa Bernardita",
    "Jardín de Recuerdos",
    "Centro Mayor",
    "Camino al Castillo"
  ],

  // ---- Las 15 preguntas, agrupadas por zona (3 por zona) ----
  // Cada pregunta: { texto, opciones: [A,B,C,D], correcta: índice (0=A,1=B,2=C,3=D) }
  PREGUNTAS: [

    // ZONA 1 — Bosque del Comienzo
    [
      {
        texto: "¿Mi niña chiquis dónde comenzó nuestra historia?",
        opciones: ["En una fiesta", "En una clase de inglés cuando entraste a mi saloncito", "En Centro Mayor", "En Instagram"],
        correcta: 1
      },
      {
        texto: "¿Cuál fue nuestra primera forma de comunicarnos fuera del colegio mi cieloo?",
        opciones: ["WhatsApp", "Facebook", "Instagram", "Telegram"],
        correcta: 2
      },
      {
        texto: "¿Dónde tuvimos nuestra primer interacción en persona mi niña hermositaa?",
        opciones: ["En el patio de la sede B", "En las escaleras y pasillo entre 7C y 8B", "En el salón", "En la sede C"],
        correcta: 1
      }
    ],

    // ZONA 2 — Liceo Santa Bernardita
    [
      {
        texto: "¿Cuál de estos lugares se convirtió en uno de nuestros primeros lugares especiales amorcito míooo?",
        opciones: ["La cafetería", "El patio junto a las escaleras de la sede B", "La cancha de la sede C", "El salón de lectura de la sede C"],
        correcta: 1
      },
      {
        texto: "¿En qué fecha comenzó oficialmente nuestra hermosa, magnífica, fantástica y hermositaaa relación?",
        opciones: ["13 de mayo de 2022", "6 de marzo de 2010", "6 de septiembre de 2022", "6 de septiembre de 2023"],
        correcta: 2
      },
      {
        texto: "¿Dónde comenzó nuestra conexión impenetrable y que hasta hoy es más y más fuertecitaa c: ?",
        opciones: ["El polideportivo", "Centro Mayor", "El columpio de tres canchas", "Las escaleras"],
        correcta: 2
      }
    ],

    // ZONA 3 — Jardín de Recuerdos
    [
      {
        texto: "¿Cuál de estas cosas representa mejor una de nuestras primeras etapas junticooos?",
        opciones: ["Hablar en WhatsApp porque en persona nos apenabamos", "Competir por quién llegaba primero", "Ignorarnos completamente", "Jugar fútbol todos los días"],
        correcta: 0
      },
      {
        texto: "¿Qué pasaaa con los cachetitos de mi niñaaa divinaaaa bebeee cuando sonríe?",
        opciones: ["Se ponen rojitos y se inflan muyyy linditoooo", "Se ponen amarillos", "Desaparecen mágicamente", "Se vuelven cuadrados"],
        correcta: 0
      },
      {
        texto: "¿Qué pasó durante el regreso a casa después de nuestra primera saliditaaa a Centro Mayoor mi cielo?",
        opciones: ["Niquito bobito le agarró mal la mano a la hemoshita Paucita", "Paula se quedó dormida", "Se perdieron en el camino", "Se pusieron a jugar voley"],
        correcta: 0
      }
    ],

    // ZONA 4 — Centro Mayor
    [
      {
        texto: "¿Qué lugar representa nuestra primerita salida juntiiiiss?",
        opciones: ["Gran Estación", "Un parque", "Centro Mayor", "Un restaurante"],
        correcta: 2
      },
      {
        texto: "¿Cuál es nuestro plan perfecto cuando estamos junticos mi niña lindaaa?",
        opciones: ["Ir a una fiesta enorme", "Comer, consentirnos y pasar tiempo de calidad", "Hacer ejercicio durante horas", "Quedarnos cada uno por su lado"],
        correcta: 1
      },
      // ============================================================
      // 👇 PREGUNTA EDITABLE — cámbiala cuando quieras 👇
      // Edita "texto", las 4 "opciones" y el índice "correcta"
      // (0 = opción A, 1 = opción B, 2 = opción C, 3 = opción D)
      // ============================================================
      {
        texto: "¿Cuál de estos lugares representa una salidita distinta pero divertida para los dosh c: ?",
        opciones: ["Una discoteca", "Ir al Estadio", "Ir al centro", "Ir a el parque de los novios"],
        correcta: 1
      }
      // ============================================================
    ],

    // ZONA 5 — Camino al Castillo
    [
      {
        texto: "¿Cuál de estos equipos/selecciones forma parte del corazón futbolero de tuu Niquito cansoncitoo?",
        opciones: ["Real Madrid", "Inter Miami y Selección Argentina", "Barcelona e Independiente Santa Fe", "Liverpool"],
        correcta: 2
      },
      {
        texto: "¿Qué quiere Nico seguir haciendo contigo mi dulce princesitaa?",
        opciones: ["Crear recuerdos juntis y amarte eternamentee", "Viajaar solitoo", "Ganarte en todos los jueguitos", "Seguir peleando contigo"],
        correcta: 0
      },
      {
        texto: "¿Cuál es el verdadero objetivo de esta aventura?",
        opciones: ["Encontrar un tesoro", "Ganar un videojuego", "Llegar al castillo y cumplir juntos nuestro sueño de amor", "Encontrar a Nico"],
        correcta: 2
      }
    ]
  ],

  // ---- Retos que se desbloquean al fallar una pregunta ----
  // Se muestran (en orden, y se repiten en ciclo) cada vez que hay una respuesta incorrecta.
  // Escribe aquí los que quieras — puedes agregar más líneas si quieres.
  RETOS: [
    "Dejarte inflar los cachetitos",
    "Dejarme hacerte cosquillitas",
    "Dejarme cabecear cuando me quedo momido jskssjsk"
  ],

  // ---- Diálogos de Nico (uno por zona + uno para la escena final) ----
  // Aparecen cuando Paula se encuentra con Nico dentro de cada zona.
  DIALOGOS_NICO: {
    zona1: "¡Bienvenida, mi princesita rosadita chiquis! Esta aventura apenas empiezaaa mi esposita linda y ya me alegra verte avanzaaar.",
    zona2: "Vas muy muy bien :D cada paso que das me recuerda por qué elegí caminar de tu mano mi niña linda c:",
    zona3: "Mi linda bebe... todos los diitas de mi vida me levanto pensando en ti y me acuesto pensando en ti mi cielo <3",
    zona4: "Quiero pasar toda mi vida junto a ti mi cielo. Eres mi razón para seguir adelante mi niña linda 💗.",
    zona5: "Ya casi llegamos, amorcito miito. Antes de seguir, quiero que sepas lo orgulloso que estoy de nosotros y sobretodo de ti, eres una mujer increíble mi cielito c:",
    final: "Bienvenida a nuestro castillito, mi princesa linda. Esto es lo que hemos construido junticos mi niña hermosa y apenas es el inicio de todo lo que nos falta por vivir, gracias por compartir tu vida conmigo mi cielo 🤍."
  },

  // ---- Carta final ----
  // Todavía no está escrita: edita el texto de abajo cuando quieras.
  CARTA_FINAL:
`Mi niña linda,
Agradezco a Dios que me ha puesto a tu lado desde hace casi 4 años mi vida linda, gracias de verdad por tenerme tanto amor y por saber tratarme tan bonito mi bebe linda.
Espero seguir construyendo memorias junto a ti mi cielo bebe, de verdad que todo lo que tu haces me pone tan bien y me motiva a seguir construyendo recuerdos junto a ti mi esposita linda
Te amo con todas las fuerzas de mi ser mi niña linda y siempre voy a amarte cielito mío, eres una mujer que me hace sentir cosas hermositas mi niña de Dios, gracias de verdad por hacerme sentir tan bien
Nunca te olvides del amor que tengo hacia ti, mi vida yo te amaré con todo mi ser y de verdad que todos los días me enamoras más y más, de verdad que eres increíble mi esposita linda amo todo de ti mi niña de Diosss c:
Eres el amor de mi vida y de mi alma porque el alma nunca muere. Gracias por tanto mi amor, te amo infinitamentee 💗.`

};


/* ================================================================================
   2. SPRITES — pixel art generado por código (sin imágenes externas)
   ================================================================================ */

// Cada carácter representa un color del PALETTE correspondiente. "." = transparente.
const SPRITE_PATTERNS = {
  paula: [
    ".CHHHHHHC.",
    ".HHHHHHHH.",
    ".HHHHHHHH.",
    "..SSSSSS..",
    "..SSSSSS..",
    "...SSSS...",
    "..DDDDDD..",
    ".DDDDDDDD.",
    "DDDDDDDDDD",
    "DDDBBBBDDD",
    "DDDDDDDDDD",
    ".DD....DD.",
    ".DD....DD.",
    "..W....W.."
  ],
  nico: [
    "..HHHHHH..",
    ".HHHHHHHH.",
    ".HHHHHHHH.",
    "..SSSSSS..",
    "..SSSSSS..",
    "...SSSS...",
    "..NNNNNN..",
    ".NNNNNNNN.",
    "NNNNNNNNNN",
    "NNNGGGGNNN",
    "NNNNNNNNNN",
    ".NN....NN.",
    ".NN....NN.",
    "..W....W.."
  ]
};

const SPRITE_PALETTES = {
  paula: {
    ".": "transparent",
    "C": "#ffd76a",
    "H": "#2b1b12",
    "S": "#f4c9a1",
    "D": "#ff8fc4",
    "B": "#ffd76a",
    "W": "#fff6e9"
  },
  nico: {
    ".": "transparent",
    "H": "#1c130f",
    "S": "#a86a3f",
    "N": "#3452a4",
    "G": "#ffd76a",
    "W": "#e8e0d0"
  }
};


/* ================================================================================
   3. ZONAS — mapa, obstáculos, decoraciones y disparadores
   ================================================================================
   Coordenadas dentro de un lienzo lógico de 960 x 600.
   obstaculos  -> bloquean el paso (árboles, muros)
   decoraciones-> solo visuales (flores, mariposas, brillos)
   disparadores-> zonas invisibles que abren una pregunta al pisarlas
   npc         -> punto donde aparece Nico en esa zona
   salida      -> portal que lleva a la siguiente zona (se activa al completar las 3 preguntas)
   ================================================================================ */

const ZONES = [
  // ---------------- ZONA 1: BOSQUE DEL COMIENZO ----------------
  {
    bgClass: "bg-zone-1",
    playerStart: { x: 50, y: 260 },
    obstaculos: [
      { x: 210, y: 120, w: 40, h: 60, type: "arbol" },
      { x: 520, y: 90, w: 40, h: 60, type: "arbol" },
      { x: 700, y: 300, w: 40, h: 60, type: "arbol" },
      { x: 360, y: 380, w: 40, h: 60, type: "arbol" }
    ],
    decoraciones: [
      { x: 90, y: 380, emoji: "🌸", type: "flor" },
      { x: 300, y: 470, emoji: "🌼", type: "flor" },
      { x: 620, y: 480, emoji: "🌷", type: "flor" },
      { x: 850, y: 120, emoji: "🦋", type: "mariposa" },
      { x: 150, y: 90, emoji: "🦋", type: "mariposa" },
      { x: 470, y: 350, emoji: "✨", type: "sparkle" },
      { x: 780, y: 220, emoji: "✨", type: "sparkle" }
    ],
    disparadores: [
      { x: 130, y: 260 },
      { x: 460, y: 190 },
      { x: 790, y: 460 }
    ],
    npc: { x: 470, y: 470, dialogoKey: "zona1" },
    salida: { x: 900, y: 250 }
  },

  // ---------------- ZONA 2: LICEO SANTA BERNARDITA ----------------
  {
    bgClass: "bg-zone-2",
    playerStart: { x: 50, y: 500 },
    obstaculos: [
      { x: 90, y: 70, w: 300, h: 26, type: "muro" },
      { x: 490, y: 70, w: 360, h: 26, type: "muro" },
      { x: 250, y: 330, w: 30, h: 60, type: "arbol" },
      { x: 640, y: 300, w: 30, h: 60, type: "arbol" }
    ],
    decoraciones: [
      { x: 420, y: 60, emoji: "🎀", type: "flor" },
      { x: 150, y: 480, emoji: "🌸", type: "flor" },
      { x: 760, y: 470, emoji: "🌸", type: "flor" },
      { x: 500, y: 480, emoji: "✨", type: "sparkle" },
      { x: 60, y: 150, emoji: "🦋", type: "mariposa" }
    ],
    disparadores: [
      { x: 150, y: 190 },
      { x: 480, y: 440 },
      { x: 820, y: 190 }
    ],
    npc: { x: 690, y: 470, dialogoKey: "zona2" },
    salida: { x: 900, y: 250 }
  },

  // ---------------- ZONA 3: JARDÍN DE RECUERDOS ----------------
  {
    bgClass: "bg-zone-3",
    playerStart: { x: 50, y: 270 },
    obstaculos: [
      { x: 300, y: 110, w: 36, h: 50, type: "arbol" },
      { x: 600, y: 390, w: 36, h: 50, type: "arbol" },
      { x: 150, y: 400, w: 36, h: 50, type: "arbol" }
    ],
    decoraciones: [
      { x: 100, y: 120, emoji: "🌷", type: "flor" },
      { x: 420, y: 480, emoji: "🌼", type: "flor" },
      { x: 700, y: 130, emoji: "🌸", type: "flor" },
      { x: 850, y: 350, emoji: "🦋", type: "mariposa" },
      { x: 250, y: 250, emoji: "✨", type: "sparkle" },
      { x: 550, y: 200, emoji: "💗", type: "sparkle" }
    ],
    disparadores: [
      { x: 210, y: 250 },
      { x: 510, y: 150 },
      { x: 760, y: 430 }
    ],
    npc: { x: 400, y: 470, dialogoKey: "zona3" },
    salida: { x: 900, y: 250 }
  },

  // ---------------- ZONA 4: CENTRO MAYOR ----------------
  {
    bgClass: "bg-zone-4",
    playerStart: { x: 50, y: 300 },
    obstaculos: [
      { x: 250, y: 200, w: 46, h: 40, type: "puesto" },
      { x: 550, y: 350, w: 46, h: 40, type: "puesto" },
      { x: 750, y: 150, w: 46, h: 40, type: "puesto" }
    ],
    decoraciones: [
      { x: 130, y: 470, emoji: "✨", type: "sparkle" },
      { x: 430, y: 470, emoji: "🎈", type: "flor" },
      { x: 650, y: 470, emoji: "✨", type: "sparkle" },
      { x: 850, y: 300, emoji: "🦋", type: "mariposa" }
    ],
    disparadores: [
      { x: 160, y: 400 },
      { x: 460, y: 200 },
      { x: 800, y: 400 }
    ],
    npc: { x: 600, y: 480, dialogoKey: "zona4" },
    salida: { x: 900, y: 250 }
  },

  // ---------------- ZONA 5: CAMINO AL CASTILLO ----------------
  {
    bgClass: "bg-zone-5",
    playerStart: { x: 50, y: 320 },
    obstaculos: [
      { x: 400, y: 300, w: 36, h: 50, type: "arbol" },
      { x: 650, y: 150, w: 36, h: 50, type: "arbol" }
    ],
    decoraciones: [
      { x: 120, y: 150, emoji: "✨", type: "sparkle" },
      { x: 300, y: 480, emoji: "💗", type: "sparkle" },
      { x: 550, y: 480, emoji: "✨", type: "sparkle" },
      { x: 800, y: 500, emoji: "🦋", type: "mariposa" }
    ],
    disparadores: [
      { x: 150, y: 220 },
      { x: 460, y: 450 },
      { x: 760, y: 250 }
    ],
    npc: { x: 300, y: 480, dialogoKey: "zona5" },
    salida: { x: 900, y: 250 },
    castilloDeFondo: true
  }
];


/* ================================================================================
   4. MOTOR DEL JUEGO — normalmente no necesitas editar nada de aquí hacia abajo
   ================================================================================ */

(function(){
  "use strict";

  // -------------------- Constantes del mundo --------------------
  const GAME_W = 960, GAME_H = 600;
  const PLAYER_W = 40, PLAYER_H = 56;
  const NICO_W = 44, NICO_H = 64;
  const PLAYER_SPEED = 230; // px lógicos por segundo
  const TRIGGER_RADIUS = 42;

  // -------------------- Referencias DOM --------------------
  const $ = (id) => document.getElementById(id);

  const screens = {
    start: $("screen-start"),
    intro: $("screen-intro"),
    game: $("screen-game"),
    castleFinal: $("screen-castle-final"),
    letter: $("screen-letter"),
    end: $("screen-end")
  };

  const hudZoneName = $("hud-zone-name");
  const hudPreguntas = $("hud-preguntas");
  const hudCorazones = $("hud-corazones");
  const hudRetos = $("hud-retos");

  const viewportWrapper = $("viewport-wrapper");
  const gameViewport = $("game-viewport");
  const worldEl = $("world");

  const joystickBase = $("joystick-base");
  const joystickKnob = $("joystick-knob");

  const toastEl = $("toast");

  const modalQuestion = $("modal-question");
  const questionText = $("question-text");
  const questionOptions = $("question-options");

  const modalCorrect = $("modal-correct");
  const modalIncorrect = $("modal-incorrect");
  const modalDialogue = $("modal-dialogue");
  const dialogueText = $("dialogue-text");

  const transitionOverlay = $("transition-overlay");
  const transitionParticles = $("transition-particles");
  const transitionZoneName = $("transition-zone-name");

  const castleFinalScene = $("castle-final-scene");
  const castleFinalLine = $("castle-final-line");
  const castleFinalNarrative = $("castle-final-narrative");

  const letterText = $("letter-text");
  const endCorazones = $("end-corazones");
  const endRetos = $("end-retos");

  // -------------------- Estado del juego --------------------
  const state = {
    zoneIndex: 0,
    player: { x: 0, y: 0, dir: 1, moving: false },
    zoneProgress: ZONES.map(() => ({ answered: [false, false, false], npcShown: false, exitUnlocked: false })),
    corazones: 0,
    retosCount: 0,
    retoCursor: 0,
    paused: false,
    activeTrigger: null,
    keys: new Set(),
    joystickVector: { x: 0, y: 0 },
    joystickActive: false,
    joystickTouchId: null,
    lastFrameTime: 0,
    playerEntities: null, // { el, shadow, animT }
    npcEntities: null
  };

  const isTouchDevice = ("ontouchstart" in window) || navigator.maxTouchPoints > 0;
  if (isTouchDevice) document.body.classList.add("is-touch");

  // -------------------- Utilidades --------------------
  function clamp(v, min, max){ return Math.min(max, Math.max(min, v)); }

  function rectsOverlap(a, b){
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function pointNearRect(px, py, rect, radius){
    const box = { x: rect.x - radius, y: rect.y - radius, w: radius * 2, h: radius * 2 };
    return rectsOverlap({ x: px, y: py, w: 1, h: 1 }, box);
  }

  function showScreen(name){
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  let toastTimer = null;
  function showToast(msg){
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
  }

  // -------------------- Construcción de sprites --------------------
  function createSpriteEl(kind, sizePx){
    const pattern = SPRITE_PATTERNS[kind];
    const palette = SPRITE_PALETTES[kind];
    const rows = pattern.length;
    const cols = pattern[0].length;
    const cellSize = sizePx / cols;

    const el = document.createElement("div");
    el.className = "sprite sprite-" + kind;
    el.style.width = sizePx + "px";
    el.style.height = (cellSize * rows) + "px";
    el.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
    el.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;

    for (let r = 0; r < rows; r++){
      const row = pattern[r];
      for (let c = 0; c < cols; c++){
        const cell = document.createElement("div");
        cell.className = "sprite-cell";
        cell.style.background = palette[row[c]] || "transparent";
        el.appendChild(cell);
      }
    }

    const shadow = document.createElement("div");
    shadow.className = "sprite-shadow";
    el.appendChild(shadow);

    return el;
  }

  // -------------------- Construcción del castillo (CSS puro) --------------------
  function createCastleEl(sizeClass){
    const wrap = document.createElement("div");
    wrap.className = "castle-graphic " + sizeClass;
    wrap.innerHTML = `
      <div class="c-tower c-tower-left"><div class="c-roof"></div></div>
      <div class="c-tower c-tower-right"><div class="c-roof"></div></div>
      <div class="c-tower c-tower-center"><div class="c-roof c-roof-gold"></div><div class="c-flag"></div></div>
      <div class="c-body"></div>
      <div class="c-window w1"></div>
      <div class="c-window w2"></div>
      <div class="c-gate"></div>
    `;
    return wrap;
  }

  // -------------------- Construcción de zonas --------------------
  function buildAllZones(){
    ZONES.forEach((zone, idx) => {
      const layer = document.createElement("div");
      layer.className = "zone-layer " + zone.bgClass;
      layer.dataset.zoneIndex = idx;

      const ground = document.createElement("div");
      ground.className = "zone-ground";
      layer.appendChild(ground);

      // Castillo lejano (solo zona 5)
      if (zone.castilloDeFondo){
        const farCastle = createCastleEl("size-small");
        farCastle.classList.add("castle-silhouette");
        farCastle.style.right = "30px";
        farCastle.style.left = "auto";
        farCastle.style.transform = "none";
        layer.appendChild(farCastle);
      }

      // Obstáculos
      zone.obstaculos.forEach(ob => {
        const el = document.createElement("div");
        if (ob.type === "arbol"){
          el.className = "obstacle-tree";
          el.style.left = ob.x + "px";
          el.style.top = ob.y + "px";
          el.innerHTML = `<div class="tree-canopy"></div><div class="tree-trunk"></div>`;
        } else {
          el.className = "zone-wall";
          el.style.left = ob.x + "px";
          el.style.top = ob.y + "px";
          el.style.width = ob.w + "px";
          el.style.height = ob.h + "px";
        }
        layer.appendChild(el);
      });

      // Decoraciones (no bloquean el paso)
      zone.decoraciones.forEach(dec => {
        const el = document.createElement("div");
        el.className = dec.type === "mariposa" ? "deco-butterfly" : (dec.type === "sparkle" ? "deco-sparkle" : "deco-flower");
        el.style.left = dec.x + "px";
        el.style.top = dec.y + "px";
        el.textContent = dec.emoji;
        el.style.animationDelay = (Math.random() * 2) + "s";
        layer.appendChild(el);
      });

      // Disparadores de preguntas
      zone.triggerEls = [];
      zone.disparadores.forEach((trg, tIdx) => {
        const el = document.createElement("div");
        el.className = "trigger-question";
        el.style.left = (trg.x - 20) + "px";
        el.style.top = (trg.y - 20) + "px";
        el.textContent = "💌";
        layer.appendChild(el);
        zone.triggerEls.push(el);
      });

      // NPC (Nico)
      if (zone.npc){
        const npcWrap = document.createElement("div");
        npcWrap.style.position = "absolute";
        npcWrap.style.left = zone.npc.x + "px";
        npcWrap.style.top = zone.npc.y + "px";
        const npcSprite = createSpriteEl("nico", NICO_W);
        npcSprite.style.position = "static";
        npcWrap.appendChild(npcSprite);
        const hint = document.createElement("div");
        hint.className = "speech-hint";
        hint.textContent = "💬";
        npcWrap.appendChild(hint);
        zone.npcHintEl = hint;
        layer.appendChild(npcWrap);
      }

      // Salida / portal
      const exitEl = document.createElement("div");
      exitEl.className = "exit-gate";
      exitEl.style.left = (zone.salida.x - 35) + "px";
      exitEl.style.top = (zone.salida.y - 50) + "px";
      exitEl.textContent = idx === ZONES.length - 1 ? "🏰" : "🌟";
      layer.appendChild(exitEl);
      zone.exitEl = exitEl;

      worldEl.appendChild(layer);
      zone.layerEl = layer;
    });
  }

  // -------------------- Jugador --------------------
  let playerEl;
  function createPlayer(){
    playerEl = createSpriteEl("paula", PLAYER_W);
    playerEl.style.position = "absolute";
    worldEl.parentElement.style.position = "relative";
    // El jugador vive dentro de la capa activa, así que lo añadimos al mundo directamente
    // por encima de todas las capas usando z-index.
    playerEl.style.zIndex = "10";
    worldEl.appendChild(playerEl);
  }

  function placePlayer(x, y){
    state.player.x = x;
    state.player.y = y;
    updatePlayerVisualPosition();
  }

  function updatePlayerVisualPosition(){
    playerEl.style.left = state.player.x + "px";
    playerEl.style.top = state.player.y + "px";
    playerEl.classList.toggle("facing-left", state.player.dir < 0);
  }

  // -------------------- Entrada: teclado --------------------
  const KEY_MAP = {
    "KeyW": "up", "ArrowUp": "up",
    "KeyS": "down", "ArrowDown": "down",
    "KeyA": "left", "ArrowLeft": "left",
    "KeyD": "right", "ArrowRight": "right"
  };

  window.addEventListener("keydown", (e) => {
    const dir = KEY_MAP[e.code];
    if (dir){ state.keys.add(dir); e.preventDefault(); }
  }, { passive: false });

  window.addEventListener("keyup", (e) => {
    const dir = KEY_MAP[e.code];
    if (dir) state.keys.delete(dir);
  });

  // -------------------- Entrada: joystick táctil --------------------
  function setupJoystick(){
    const baseRect = () => joystickBase.getBoundingClientRect();
    const MAX_DIST = 40;

    function handleMove(clientX, clientY){
      const rect = baseRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = clientX - cx;
      let dy = clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > MAX_DIST){
        dx = (dx / dist) * MAX_DIST;
        dy = (dy / dist) * MAX_DIST;
      }
      joystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      state.joystickVector.x = dx / MAX_DIST;
      state.joystickVector.y = dy / MAX_DIST;
    }

    function resetJoystick(){
      joystickKnob.style.transform = "translate(-50%, -50%)";
      state.joystickVector.x = 0;
      state.joystickVector.y = 0;
      state.joystickActive = false;
      state.joystickTouchId = null;
    }

    joystickBase.addEventListener("touchstart", (e) => {
      const t = e.changedTouches[0];
      state.joystickActive = true;
      state.joystickTouchId = t.identifier;
      handleMove(t.clientX, t.clientY);
      e.preventDefault();
    }, { passive: false });

    joystickBase.addEventListener("touchmove", (e) => {
      for (const t of e.changedTouches){
        if (t.identifier === state.joystickTouchId){
          handleMove(t.clientX, t.clientY);
        }
      }
      e.preventDefault();
    }, { passive: false });

    function onTouchEnd(e){
      for (const t of e.changedTouches){
        if (t.identifier === state.joystickTouchId){
          resetJoystick();
        }
      }
    }
    joystickBase.addEventListener("touchend", onTouchEnd);
    joystickBase.addEventListener("touchcancel", onTouchEnd);
  }

  // -------------------- Escalado responsive del viewport --------------------
  function rescaleViewport(){
    const wrapRect = viewportWrapper.getBoundingClientRect();
    if (wrapRect.width <= 0 || wrapRect.height <= 0) return;
    const scale = Math.min(wrapRect.width / GAME_W, wrapRect.height / GAME_H);
    if (!isFinite(scale) || scale <= 0) return;
    gameViewport.style.transform = `scale(${scale})`;
  }
  window.addEventListener("resize", rescaleViewport);
  window.addEventListener("orientationchange", () => setTimeout(rescaleViewport, 200));
  if (window.visualViewport){
    window.visualViewport.addEventListener("resize", rescaleViewport);
  }

  // -------------------- Bucle del juego --------------------
  function movementVector(){
    let vx = 0, vy = 0;
    if (state.keys.has("left")) vx -= 1;
    if (state.keys.has("right")) vx += 1;
    if (state.keys.has("up")) vy -= 1;
    if (state.keys.has("down")) vy += 1;

    if (state.joystickActive){
      vx += state.joystickVector.x;
      vy += state.joystickVector.y;
    }

    const len = Math.hypot(vx, vy);
    if (len > 1){ vx /= len; vy /= len; }
    return { vx, vy, len };
  }

  function currentZone(){ return ZONES[state.zoneIndex]; }

  function collidesAt(x, y){
    // Usamos solo la parte inferior del sprite (los "pies") para una colisión más natural
    const feetBox = { x: x + PLAYER_W * 0.2, y: y + PLAYER_H * 0.72, w: PLAYER_W * 0.6, h: PLAYER_H * 0.26 };
    const zone = currentZone();
    for (const ob of zone.obstaculos){
      if (rectsOverlap(feetBox, { x: ob.x, y: ob.y + (ob.h * 0.4), w: ob.w, h: ob.h * 0.6 })){
        return true;
      }
    }
    return false;
  }

  function tryMove(dx, dy){
    let { x, y } = state.player;
    const newX = clamp(x + dx, 4, GAME_W - PLAYER_W - 4);
    if (!collidesAt(newX, y)) x = newX;
    const newY = clamp(y + dy, 4, GAME_H - PLAYER_H - 4);
    if (!collidesAt(x, newY)) y = newY;
    state.player.x = x;
    state.player.y = y;
  }

  function checkTriggers(){
    if (state.paused) return;
    const zone = currentZone();
    const progress = state.zoneProgress[state.zoneIndex];
    const px = state.player.x + PLAYER_W / 2;
    const py = state.player.y + PLAYER_H / 2;

    // Preguntas
    zone.disparadores.forEach((trg, idx) => {
      if (progress.answered[idx]) return;
      if (pointNearRect(px, py, { x: trg.x, y: trg.y, w: 1, h: 1 }, TRIGGER_RADIUS)){
        openQuestion(idx);
      }
    });

    // NPC
    if (zone.npc && !progress.npcShown){
      if (pointNearRect(px, py, { x: zone.npc.x + NICO_W / 2, y: zone.npc.y + NICO_H / 2, w: 1, h: 1 }, TRIGGER_RADIUS)){
        showNpcDialogue();
      }
    }

    // Salida
    if (progress.exitUnlocked){
      if (pointNearRect(px, py, { x: zone.salida.x, y: zone.salida.y, w: 1, h: 1 }, TRIGGER_RADIUS)){
        advanceZone();
      }
    }
  }

  let lastAnimToggle = 0, walkFrame = 0;
  function gameLoop(ts){
    if (!state.lastFrameTime) state.lastFrameTime = ts;
    const dt = Math.min(0.05, (ts - state.lastFrameTime) / 1000);
    state.lastFrameTime = ts;

    if (screens.game.classList.contains("active") && !state.paused){
      const { vx, vy, len } = movementVector();
      state.player.moving = len > 0.05;

      if (state.player.moving){
        tryMove(vx * PLAYER_SPEED * dt, vy * PLAYER_SPEED * dt);
        if (Math.abs(vx) > 0.1) state.player.dir = vx < 0 ? -1 : 1;

        if (ts - lastAnimToggle > 130){
          walkFrame = 1 - walkFrame;
          lastAnimToggle = ts;
        }
        playerEl.style.transform = (state.player.dir < 0 ? "scaleX(-1) " : "") +
          "translateY(" + (walkFrame === 1 ? "-2px" : "0px") + ")";
      } else {
        playerEl.style.transform = state.player.dir < 0 ? "scaleX(-1)" : "";
      }

      updatePlayerVisualPosition();
      checkTriggers();
    }

    requestAnimationFrame(gameLoop);
  }

  // -------------------- Preguntas --------------------
  function openQuestion(idx){
    state.paused = true;
    state.activeTrigger = idx;
    const q = CONFIG.PREGUNTAS[state.zoneIndex][idx];
    questionText.textContent = q.texto;
    questionOptions.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    q.opciones.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
      btn.addEventListener("click", () => answerQuestion(idx, i));
      questionOptions.appendChild(btn);
    });
    modalQuestion.classList.add("active");
  }

  function answerQuestion(triggerIdx, chosenIdx){
    modalQuestion.classList.remove("active");
    const q = CONFIG.PREGUNTAS[state.zoneIndex][triggerIdx];
    const progress = state.zoneProgress[state.zoneIndex];
    progress.answered[triggerIdx] = true;

    const zone = currentZone();
    zone.triggerEls[triggerIdx].classList.add("answered");
    zone.triggerEls[triggerIdx].textContent = "💗";

    if (chosenIdx === q.correcta){
      state.corazones++;
      updateHud();
      modalCorrect.classList.add("active");
    } else {
      const reto = CONFIG.RETOS[state.retoCursor % CONFIG.RETOS.length];
      state.retoCursor++;
      state.retosCount++;
      updateHud();
      modalIncorrect.classList.add("active");
      showToast("Nuevo reto desbloqueado 🎯");
      void reto; // el reto queda guardado en RETOS y contabilizado en el HUD
    }

    maybeUnlockExit();
  }

  $("btn-continuar-correcto").addEventListener("click", () => {
    modalCorrect.classList.remove("active");
    state.paused = false;
  });
  $("btn-continuar-incorrecto").addEventListener("click", () => {
    modalIncorrect.classList.remove("active");
    state.paused = false;
  });

  function maybeUnlockExit(){
    const progress = state.zoneProgress[state.zoneIndex];
    if (progress.answered.every(Boolean) && !progress.exitUnlocked){
      progress.exitUnlocked = true;
      currentZone().exitEl.classList.add("unlocked");
      showToast("¡Camino desbloqueado! Busca el portal ✨");
    }
  }

  function updateHud(){
    const totalPreguntas = state.zoneProgress.reduce((s, p) => s + p.answered.filter(Boolean).length, 0);
    hudPreguntas.textContent = `${totalPreguntas}/15`;
    hudCorazones.textContent = `${state.corazones}/15`;
    hudRetos.textContent = `${state.retosCount}`;
    hudZoneName.textContent = CONFIG.ZONA_NOMBRES[state.zoneIndex];
  }

  // -------------------- Diálogo de Nico --------------------
  function showNpcDialogue(){
    state.paused = true;
    const zone = currentZone();
    const key = zone.npc.dialogoKey;
    dialogueText.textContent = CONFIG.DIALOGOS_NICO[key] || "...";
    modalDialogue.classList.add("active");
    state.zoneProgress[state.zoneIndex].npcShown = true;
    if (zone.npcHintEl) zone.npcHintEl.style.display = "none";
  }
  $("btn-continuar-dialogo").addEventListener("click", () => {
    modalDialogue.classList.remove("active");
    state.paused = false;
  });

  // -------------------- Transición entre zonas --------------------
  function spawnTransitionParticles(){
    transitionParticles.innerHTML = "";
    const symbols = ["💗", "✨", "🌸", "💫"];
    for (let i = 0; i < 18; i++){
      const s = document.createElement("span");
      s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      s.style.left = (Math.random() * 100) + "%";
      s.style.bottom = (Math.random() * 30) + "%";
      s.style.animationDelay = (Math.random() * 0.6) + "s";
      s.style.fontSize = (14 + Math.random() * 14) + "px";
      transitionParticles.appendChild(s);
    }
  }

  function advanceZone(){
    state.paused = true;
    spawnTransitionParticles();
    const isLastZone = state.zoneIndex === ZONES.length - 1;
    transitionZoneName.textContent = isLastZone ? "Llegando al castillo..." : `Entrando a: ${CONFIG.ZONA_NOMBRES[state.zoneIndex + 1]}`;
    transitionOverlay.classList.add("active");

    setTimeout(() => {
      if (isLastZone){
        transitionOverlay.classList.remove("active");
        startCastleFinalScene();
      } else {
        currentZone().layerEl.classList.remove("active");
        state.zoneIndex++;
        const zone = currentZone();
        zone.layerEl.classList.add("active");
        placePlayer(zone.playerStart.x, zone.playerStart.y);
        updateHud();
        setTimeout(() => {
          transitionOverlay.classList.remove("active");
          state.paused = false;
        }, 250);
      }
    }, 1100);
  }

  // -------------------- Escena final en el castillo --------------------
  function startCastleFinalScene(){
    showScreen("castleFinal");
    castleFinalScene.innerHTML = "";
    castleFinalLine.textContent = "";
    castleFinalNarrative.textContent = "";
    $("btn-abrir-carta").style.visibility = "hidden";

    const castleWrap = document.createElement("div");
    castleWrap.className = "final-castle-wrap";
    castleWrap.appendChild(createCastleEl("size-big"));
    castleFinalScene.appendChild(castleWrap);

    const spritesWrap = document.createElement("div");
    spritesWrap.className = "final-sprites-wrap";

    const paulaSlot = document.createElement("div");
    paulaSlot.className = "final-sprite-slot entrance";
    paulaSlot.appendChild(createSpriteEl("paula", 56));

    const nicoSlot = document.createElement("div");
    nicoSlot.className = "final-sprite-slot entrance delay";
    nicoSlot.appendChild(createSpriteEl("nico", 62));

    spritesWrap.appendChild(paulaSlot);
    spritesWrap.appendChild(nicoSlot);
    castleFinalScene.appendChild(spritesWrap);

    setTimeout(() => {
      castleFinalLine.textContent = `"${CONFIG.DIALOGOS_NICO.final}"`;
    }, 900);

    setTimeout(() => {
      castleFinalNarrative.textContent = CONFIG.TEXTOS.narrativaFinalCastillo;
    }, 2000);

    setTimeout(() => {
      $("btn-abrir-carta").style.visibility = "visible";
    }, 2800);
  }

  $("btn-abrir-carta").addEventListener("click", () => {
    letterText.textContent = CONFIG.CARTA_FINAL;
    showScreen("letter");
  });

  $("btn-cerrar-carta").addEventListener("click", () => {
    $("end-title").textContent = CONFIG.TEXTOS.finTitulo;
    $("end-subtitle").textContent = CONFIG.TEXTOS.finSubtitulo;
    endCorazones.textContent = `💗 ${state.corazones}/15 corazones`;
    endRetos.textContent = `🎯 ${state.retosCount} retos acumulados`;
    showScreen("end");
  });

  // -------------------- Navegación de pantallas iniciales --------------------
  $("btn-comenzar-aventura").addEventListener("click", () => {
    $("intro-text").textContent = CONFIG.TEXTOS.introduccion;
    showScreen("intro");
  });

  $("btn-comenzar-intro").addEventListener("click", () => {
    startGame();
  });

  function startGame(){
    showScreen("game");
    requestAnimationFrame(() => {
      rescaleViewport();
      const zone = currentZone();
      zone.layerEl.classList.add("active");
      placePlayer(zone.playerStart.x, zone.playerStart.y);
      updateHud();
      state.paused = false;
    });
  }

  // -------------------- Inicialización --------------------
  function init(){
    $("start-title").innerHTML = CONFIG.TEXTOS.tituloInicio.replace(/\n/g, "<br>");
    $("start-subtitle").textContent = CONFIG.TEXTOS.subtituloInicio;

    buildAllZones();
    createPlayer();
    setupJoystick();
    rescaleViewport();

    requestAnimationFrame(gameLoop);
  }

  // El script se carga al final del <body>, así que el DOM ya está listo.
  init();

})();
