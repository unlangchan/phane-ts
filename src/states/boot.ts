import * as Phaser from 'phaser';

export default class Boot extends Phaser.State {

    constructor() {
        super();
    }

    preload() {
        console.log('start boot');
        if (!this.game.device.desktop) {
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.forcePortrait = true;
            this.scale.refresh();
        }
        
        this.game.load.image('loading', 'assets/preloader.gif');

    }

    create() {
        this.game.state.start('preload');
    }
}
