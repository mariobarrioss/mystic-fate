import { Scene } from 'phaser';

class BootScene extends Scene {
  constructor() {
    super('scene-boot');
  }

  preload() {
    this.load.image('cat-like', 'assets/cat-like-creature.png');
  }

  create() {
    this.scene.start('scene-game');
  }
}

export default BootScene;
