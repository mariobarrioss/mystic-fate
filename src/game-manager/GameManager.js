import PlayerModel from './PlayerModel';

class GameManager {
  constructor(scene, mapData) {
    this.scene = scene;
    this.mapData = mapData;

    this.players = {};

    this.playerLocations = [];
  }

  setup() {
    this.parseMapData();
    this.spawnPlayer();
  }

  parseMapData() {
    this.mapData.forEach((layer) => {
      if (layer.name === 'player_locations') {
        layer.objects.forEach((obj) => {
          this.playerLocations.push([obj.x, obj.y]);
        });
      }
    });
  }

  spawnPlayer() {
    const player = new PlayerModel(this.playerLocations);
    this.scene.events.emit('spawnPlayer', player);
  }
}

export default GameManager;
