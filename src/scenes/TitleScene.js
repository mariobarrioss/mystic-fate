import Phaser from 'phaser';
import UIButton from '../objects/UIButton';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Mystic Fate', { fontSize: '64px', fill: '#fff' });
    this.titleText.setOrigin(0.5);

    this.startGameButton = new UIButton(this, this.scale.width / 2, this.scale.height * 0.65, 'button1', 'button2', 'Start a New Game', this.startScene.bind(this, 'GameScene'));
  }

  startScene(targetScene) {
    this.scene.start(targetScene);
  }
}

export default TitleScene;
