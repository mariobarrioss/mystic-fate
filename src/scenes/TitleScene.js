import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Mystic Fate', { fontSize: '64px', fill: '#fff' });
    this.titleText.setOrigin(0.5);
  }
}

export default TitleScene;
