import Phaser from "phaser";
import events from "./EventCenter";

// Manejador de eventos centralizados para comunicacion de componentes

// Importacion
// import events from './EventCenter'

// Emisor de mensaje de difusion
// Recibe el nombre del mensaje y los valores de parametro
// events.emit('health-changed', this.health)

// Receptor de mensaje, por ejemplo escena de UI
// Recibe el nombre del mensaje y una funcion callback a ejecutar
// events.on('health-changed', this.handleHealthChanged, this)

export default class UI extends Phaser.Scene {
  constructor() {
    super("ui");
  }

  init(data) {
    this.nivel = data.nivel || 1;
    this.puntos = data.puntos || 0;
  }

  create() {
    // string template

    this.text = this.add.text(
      10,
      10,
      `Nivel: ${this.nivel} - Puntos ${this.puntos}`,
      {
        font: "12px Arial",
        fill: "#ffffff",
      }
    );

    // escuchar eventos
    events.on("actualizarDatos", this.actualizarDatos, this);
  }

  actualizarDatos(data) {
    console.log("actualizar datos", data);
    this.nivel = data.nivel;
    this.puntos = data.puntos;

    this.text.setText(`Nivel: ${this.nivel} - Puntos ${this.puntos}`);
  }
}
