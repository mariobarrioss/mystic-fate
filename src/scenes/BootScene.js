import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.loadAudio();
    this.loadSpriteSheets();
    this.loadImages();
    this.loadTileMap();
  }

  create() {
    this.scene.start('TitleScene');
  }

  loadAudio() {
    this.load.audio('goldSound', ['assets/audio/Pickup.wav']);
    this.load.audio('enemyDeath', ['assets/audio/EnemyDeath.wav']);
    this.load.audio('playerAttack', ['assets/audio/PlayerAttack.wav']);
    this.load.audio('playerDamage', ['assets/audio/PlayerDamage.wav']);
    this.load.audio('playerDeath', ['assets/audio/PlayerDeath.wav']);
  }

  loadSpriteSheets() {
    this.load.spritesheet('items', '../assets/images/items.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('characters', '../assets/images/characters.png', { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('monsters', '../assets/images/monsters.png', { frameWidth: 32, frameHeight: 32 });
  }

  loadImages() {
    this.load.image('button1', '../assets/images/ui/blue_button01.png');
    this.load.image('button2', '../assets/images/ui/blue_button02.png');
    this.load.image('background', '../assets/level/background-extruded.png');
  }

  loadTileMap() {
    this.load.tilemapTiledJSON('map', '../assets/level/large_level.json');
  }
}

export default BootScene;
