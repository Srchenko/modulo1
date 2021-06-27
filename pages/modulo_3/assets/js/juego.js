var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 400 },
          debug: false
      }
  },
  scene: [escena_menu, escena_juego],
  audio: {
      disableWebAudio: true
  },
  parent: "parent"
};

var player;
var stars;
var stars2;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

var arreglo;
var cambio = false;
var movimiento_plataforma = 1;
var salto_personaje;

var endgame;
var text_endgame;
var tecla_reinicio = false;
var tecla_f = false;

var text_tiempo = "";
var tiempo_transcurrido_frames = 0;
var tiempo_transcurrido_segundos = 0;
var minutos = 0;
var segundos = 0;
var espera_un_segundo_capo = 0;

var pick_coin;
var sonido_escopeta;

var game = new Phaser.Game(config);