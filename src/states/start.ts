import * as Phaser from 'phaser';

export default class extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        this.game.add.sprite(0, 0, 'background');
    }
}
