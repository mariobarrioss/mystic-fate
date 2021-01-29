import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.loadTileMap();
  }

  create() {
    this.scene.start('TitleScene');
  }

  loadTileMap() {
    this.load.tilemapTiledJSON('map', '../assets/level/large_level.json');
  }
}

export default BootScene;
