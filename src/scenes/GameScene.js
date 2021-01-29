import Phaser from 'phaser';
import Map from '../objects/Map';

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.createMap();
  }

  createMap() {
    this.map = new Map(this, 'map', 'background', 'background', 'blocked');
  }
}

export default GameScene;
