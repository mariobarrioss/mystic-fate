import './styles/main.css';
import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';

const canvas = document.querySelector('#game-canvas');
const config = {
  type: Phaser.WEBGL,
  width: 320,
  height: 240,
  canvas,
  zoom: 2,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [
    BootScene,
    GameScene,
  ],
};

const game = new Phaser.Game(config);
