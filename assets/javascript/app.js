var _app = function() {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.2;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = [
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shake",
        "swing",
        "tada",
        "wobble",
        "jello",
    ];
    this.brandDescription = [
        "developers",
        "designers",
        "freelancers",
        "artists",
        "reverse engineers",

    ];

    this.titleChanger = function(text, delay) {
        text = text || ["curse", "me", "baby", "curse.run"];
        delay = delay || 2000;

        var counter = 0;

        setInterval(function() {
            if (counter < text.length) document.title = text[counter++];
            else document.title = text[(counter = 0)];
        }, delay);
    };

};

var app = new _app();