import './styles/main.css';
import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';

const canvas = document.querySelector('#game-canvas');
const config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  canvas,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [
    BootScene,
    TitleScene,
  ],
};

const game = new Phaser.Game(config);
