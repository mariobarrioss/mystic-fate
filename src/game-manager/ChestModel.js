import Phaser from 'phaser';

class ChestModel {
  constructor(x, y, gold, spawnerId) {
    this.id = `${spawnerId}-${Phaser.Utils.String.UUID()}`;
    this.spawnerId = spawnerId;
    this.x = x;
    this.y = y;
    this.gold = gold;
  }
}

export default ChestModel;
