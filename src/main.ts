import './lib/phaser';
import * as Phaser from 'phaser';

import Boot from './states/boot';
import Preload from './states/preload';
import Start from './states/start';

window.onload = () => {
    var game = new Phaser.Game(240, 400, Phaser.CANVAS, 'game');
    game.state.add('boot', Boot);
    game.state.add('preload', Preload);
    game.state.add('start', Start);
    game.state.start('boot');
}

