import TitleScene from './TitleScene';

class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'BootScene'
        });
    }

    preload() {
        var progress = this.add.graphics();

        this.load.on('progress', value => {
            progress.clear();
            progress.fillStyle(0x990000, 1);
            progress.fillRect(
                0,
                this.sys.game.config.width / 2 - 60,
                this.sys.game.config.width * value,
                60
            );
        });

        this.load.on('complete', function() {
            progress.destroy();
        });

        // this.load.setBaseURL('http://labs.phaser.io');
        this.load.setPath('assets/images/');
        this.load.image('blue', 'moov2-logo.png');
        this.load.image('logo', 'moov2-logo.png');
    }

    create() {
        this.scene.add('TitleScene', TitleScene);
        this.scene.start('TitleScene');
    }
}

export default BootScene;
