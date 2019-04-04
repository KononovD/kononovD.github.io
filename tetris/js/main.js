window.addEventListener("DOMContentLoaded", function () {
    let tetris = [],
        tetrisField = document.querySelector(".game__field"),
        tetrisScore = document.querySelector(".game__score"),
        startButton = document.querySelector(".start-button"),
        color = 5, // возможные цвета максимум 5
        timer,
        score = 0,
        flag, // проверка на запуск следующего блока
        level = 400;

    startButton.addEventListener("click", start, {
        once: true
    });

    document.addEventListener("keydown", (e) => {
        switch (e.code) {
            case "ArrowRight":
                tetrisRight();
                break;
            case "ArrowLeft":
                tetrisLeft();
                break;
        }
    })
    // заполняем массив

    function init() {
        score = 0;
        let x = 9,
            y = 15;

        for (let i = 0; i < y; i++) {
            tetris[i] = [];
            for (let j = 0; j < x; j++) {
                tetris[i][j] = 0;
            }
        }
    }

    // отрисовка поля

    function draw() {
        let out = "";
        for (let i = 0; i < tetris.length; i++) {
            for (let j = 0; j < tetris[i].length; j++) {
                let currentIem = tetris[i][j];
                if (currentIem == 0)
                    out += `<div class="basicGameItem blackGameItem"></div>`;
                else if (currentIem == 1 || currentIem == 11)
                    out += `<div class="basicGameItem orangeGameItem"></div>`;
                else if (currentIem == 2 || currentIem == 12)
                    out += `<div class="basicGameItem blueGameItem"></div>`;
                else if (currentIem == 3 || currentIem == 13)
                    out += `<div class="basicGameItem redGameItem"></div>`;
                else if (currentIem == 4 || currentIem == 14)
                    out += `<div class="basicGameItem greenGameItem"></div>`;
                else if (currentIem == 5 || currentIem == 15)
                    out += `<div class="basicGameItem purpleGameItem"></div>`;
            }
        }

        tetrisField.innerHTML = out;
        tetrisScore.textContent = score;
    }

    // игровой блок

    function square() {
        function randomInt(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }

        tetris[0][randomInt(0, tetris[0].length - 1)] = randomInt(1, color);
    }

    function start() {
        init();
        draw();
        square();
        run();
    }

    function run() {
        timer = setTimeout(function () {
            draw();
            if (finish()) {
                startButton.addEventListener("click", start, {
                    once: true
                });
                return false;
            }
            flag = true;
            for (let i = tetris.length - 1; i >= 0; i--) {
                for (let j = 0; j < tetris[i].length; j++) {
                    if (tetris[i][j] < 10) {
                        if (i == tetris.length - 1 && tetris[i][j] != 0) {
                            tetris[i][j] = tetris[i][j] + 10;

                        } else if (tetris[i][j] != 0) {
                            if (tetris[i + 1][j] == 0) {
                                tetris[i + 1][j] = tetris[i][j];
                                tetris[i][j] = 0;
                                flag = false;
                                if (i + 1 == tetris.length - 1) {
                                    tetris[i + 1][j] = tetris[i + 1][j] + 10
                                }
                            } else if (tetris[i + 1][j] >= 10) {
                                tetris[i][j] = tetris[i][j] + 10;
                            }
                        }
                    }
                }
            }
            checkLine();
            if (flag) square();
            run();
        }, level);
    }

    function tetrisRight() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = tetris[i].length - 1; j >= 0; j--) {
                if (tetris[i][j] < 10) {
                    if (tetris[i][j] != 0 && tetris[i][j + 1] == 0) {
                        tetris[i][j + 1] = tetris[i][j];
                        tetris[i][j] = 0;
                    }
                }
            }
        }
        draw();
        return false;
    }

    function tetrisLeft() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] < 10) {
                    if (tetris[i][j] != 0 && tetris[i][j - 1] == 0) {
                        tetris[i][j - 1] = tetris[i][j];
                        tetris[i][j] = 0;
                    }
                }
            }
        }
        draw();
        return false;
    }

    function checkLine() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] > 10 && tetris[i][j + 1] != undefined && tetris[i][j + 2] != undefined) {
                    if (tetris[i][j] == tetris[i][j + 1] && tetris[i][j] == tetris[i][j + 2]) {
                        tetris[i][j] = 0;
                        tetris[i][j + 1] = 0;
                        tetris[i][j + 2] = 0;
                        score += 20;
                        checkScore();
                        for (let m = i; m >= 0; m--) {
                            if (tetris[m][j] > 10) tetris[m][j] = tetris[m][j] - 10;
                            if (tetris[m][j + 1] > 10) tetris[m][j + 1] = tetris[m][j + 1] - 10;
                            if (tetris[m][j + 2] > 10) tetris[m][j + 2] = tetris[m][j + 2] - 10;
                        }
                    }
                }
                if (i > 2 && tetris[i][j] > 10 && tetris[i - 1][j] != undefined && tetris[i - 2][j] != undefined)
                    if (tetris[i][j] > 10 && tetris[i - 1][j] != 0 && tetris[i - 2][j] != 0) {
                        if (tetris[i][j] == tetris[i - 1][j] && tetris[i][j] == tetris[i - 2][j]) {
                            tetris[i][j] = 0;
                            tetris[i - 1][j] = 0;
                            tetris[i - 2][j] = 0;
                            score += 20;
                            checkScore();
                        }
                    }
            }
        }
    }

    function checkScore() {
        if (score > 50)
            level = 300;
        else if (score > 100)
            level = 200;
        else if (score > 150)
            level = 100;
        else if (score > 200)
            level = 50;
        else if (score > 300)
            level = 10;
    }

    function finish() {
        let stop = false;
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                stop = true;
                for (let k = 0; k < tetris.length; k++) {
                    if (tetris[k][j] == 0) {
                        stop = false;
                        break;
                    }
                }
                if (stop) {
                    clearTimeout(timer);
                    alert('Stop');
                    break;
                }
            }
            if (stop) break;
        }
        return stop;
    }
});