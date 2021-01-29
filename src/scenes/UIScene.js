import Phaser from 'phaser';

class UIScene extends Phaser.Scene {
  constructor() {
    super('UIScene');
  }

  init() {
    this.gameScene = this.scene.get('GameScene');
  }

  create() {
    this.setupUiElements();
    this.setupEvents();
  }

  setupUiElements() {
    this.scoreText = this.add.text(35, 8, 'Coins: 0', { fontSize: '16px', fill: '#fff' });
    this.coinIcon = this.add.image(15, 15, 'items', 3);
  }

  setupEvents() {
    this.gameScene.events.on('updateScore', (score) => {
      this.scoreText.setText(`Coins: ${score}`);
    });
  }
}

export default UIScene;
