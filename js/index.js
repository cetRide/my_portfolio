window.onload = function () {
    Particles.init({
        selector: '.background',
        color: '#fdfaf6',
        connectParticles: true,
        maxParticles: 120,

        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 60,
                    connectParticles: false
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 50,
                    connectParticles: true
                }
            }, {
                breakpoint: 320,
                options: {
                    maxParticles: 50,
                    connectParticles: true
                }
            }
        ]
    });

    function write(obj, sentence, i, cb) {
        if (i !== sentence.length) {
            setTimeout(function () {
                i++
                obj.innerHTML = sentence.substr(0, i + 1) + ' <em aria-hidden="true"></em>';
                write(obj, sentence, i, cb)
            }, 50)
        } else {
            cb()
        }
    }

    function erase(obj, cb, i) {
        let sentence = obj.innerText
        if (sentence.length !== 0) {
            setTimeout(function () {
                sentence = sentence.substr(0, sentence.length - 1)
                obj.innerText = sentence
                erase(obj, cb)
            }, 18 / (i * (i / 10000000)))
        } else {
            obj.innerText = " "
            cb()
        }
    }

    let typeline = document.querySelector("#typeline")

    function writeErase(obj, sentence, time, cb) {
        write(obj, sentence, 0, function () {
            setTimeout(function () {
                erase(obj, cb)
            }, time)
        })
    }

    let sentences = [
        "Full Stack Developer. ",
        "Technology Consultant. ",
    ]
    let counter = 0

    function loop() {
        let sentence = sentences[counter % sentences.length]
        writeErase(typeline, sentence, 1500, loop)
        counter++
    }

    loop()


};
