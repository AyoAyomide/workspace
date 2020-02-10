pacth_addEV(window, "load", runMusic);
function runMusic() {
    var audio = grab("audBox").lastElementChild,
        playAud = grab("audPlay");
    function audEngine(aud, typ_value) {
        var audPlay = grab("audPlay"),
            audLength = grab("audLength"),
            audPlayed = grab("audPlayed"),
            audBuff = grab("audBuff"),
            audPlay2 = grab("audPlay2"),
            audVol = grab("audVol"),
            opVol = grab("opVol"),
            playPerc, buffPerc, typ, value;
        typ = typ_value.split("_")[0];
        value = typ_value.split("_")[1];
        switch (typ) {
            case "play":
                aud.play();
                audPlay.title = "Pause";
                aud.volume = audVol.value;
                audPlay.value = "pause";
                audPlay.style.backgroundPosition = "3px -35px";
                break;
            case "pause":
                aud.pause();
                audPlay.title = "Play";
                audPlay.value = "play";
                audPlay.style.backgroundPosition = "5.5px -1.5px";
                break;
            case "jump":
                aud.currentTime = aud.duration / 100 * value;
                break;
            case "volume":
                audVol.value = 1 / 100 * value;
                aud.volume = audVol.value;
                audVol.value == 0 ? opVol.style.backgroundPosition = "-1px -424px" : opVol.style.backgroundPosition = "-1px -398px";
                break;
        }
        pacth_addEV(aud, "timeupdate", function () {
            audLength.textContent = parseInt(aud.duration / 60) + ":" + parseInt(aud.duration % 60);
            audPlayed.textContent = parseInt(aud.currentTime / 60) + ":" + parseInt(aud.currentTime % 60);
            playPerc = Math.min((10 / aud.duration) * aud.currentTime * 10, 100).toFixed(2);
            buffPerc = Math.min((10 / aud.buffered.end(0)) * aud.duration * 10, 100);
            audBuff.style.width = buffPerc + "%";
            audPlay2.style.width = playPerc + "%";
        });
    }
    getClickPosition = function (elem, func) {
        var elemFill = elem.firstElementChild.children[1],
            elemDot = elem.lastElementChild,
            elemSpaceLeft = elem.getBoundingClientRect().left, mousePos, mousePer;
        function mousePosition(event) {
            mousePos = event.pageX - elemSpaceLeft;
            mousePer = Math.min(10 / elem.clientWidth * mousePos * 10, 100).toFixed();
            if (mousePer >= 0) {
                elemFill.style.width = mousePer + "%";
                elemFill.value = mousePer;
                func(mousePer);
            }
        }
        pacth_addEV(elem, "click", mousePosition);
        pacth_addEV(elemDot, "mousedown", function () {
            pacth_addEV(window, "mousemove", mousePosition);
        });
        pacth_addEV(window, "mouseup", function () {
            window.removeEventListener("mousemove", mousePosition);
        });
    }
    pacth_addEV(playAud, 'click', function() {
                audEngine(audio, playAud.value);
            });
    volPer = function (e) {
        audEngine(audio, "volume_"+e);
        grab('volume').firstElementChild.children[2].firstElementChild.textContent = e;
    }
    playClick = function (e) {
        audEngine(audio, "jump_"+e);
    }
}
