import Phaser from 'phaser';
import Map from '../objects/Map';
import GameManager from '../game-manager/GameManager';
import PlayerContainer from '../objects/player/PlayerContainer';

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.createMap();
    this.createGameManager();
  }

  createMap() {
    this.map = new Map(this, 'map', 'background', 'background', 'blocked');
  }

  createPlayer(playerObject) {
    this.player = new PlayerContainer(
      this,
      playerObject.x * 2,
      playerObject.y * 2,
      'characters',
      0,
      playerObject.health,
      playerObject.maxHealth,
      playerObject.id,
      this.playerAttackAudio,
    );
  }

  addCollisions() {
    this.physics.add.collider(this.player, this.map.blockedLayer);
  }

  createGameManager() {
    this.events.on('spawnPlayer', (playerObject) => {
      this.createPlayer(playerObject);
      this.addCollisions();
    });

    this.gameManager = new GameManager(this, this.map.map.objects);
    this.gameManager.setup();
  }
}

export default GameScene;
