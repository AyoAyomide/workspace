    var grab = function (val) {
            return document.getElementById(val);
        },
        addClass = function (elm, clname) {
            var clArr;
            clArr = elm.className.split(" ");
            if (clArr.indexOf(clname) == -1) {
                elm.className += " " + clname;
            }
        },
        delClass = function (elm) {
            elm.className = elm.className.replace(/\bclose_op\b/g, "");
        },
        pacth_addEV = function (elem, event, fun) {
            elem.attachEvent ? elem.attachEvent("on" + event, fun) : elem.addEventListener(event, fun);
        },
        fileScan = function (ele, type, rawData) {
            'use strict';
            var file = ele.files[0],
                scanner = new FileReader(),
                data;
            switch (type) {
                case 'size':
                    return bToSize(file.size);
                case 'name':
                    return file.name;
                case 'type':
                    return file.type;
                case 'imgSrc':
                    if (file.type.match(/image.*/)) {
                        scanner.onload = function () {
                            rawData.src = scanner.result;
                        }
                    } else {
                        return false;
                    }
                    scanner.readAsDataURL(file);
                    break;
                case 'imgUrl':
                    scanner.onload = function () {
                        rawData.style.backgroundImage = "url(" + scanner.result + ")";
                    }
                    scanner.readAsDataURL(file);
            }
        };

    function payLoad() {

        opPF = function () {
            var ftcBD = grab('pf_drpDW');
            ftcBD.style.display = "inline-block";
            ftcBD.setAttribute("class", "pf_drpDW2");
            ftcBD.innerHTML = "<button id='sn'>sign in</button>or<button id='sp'>sign up</button>";

            if (grab('opPF').className.includes("close_op")) {
                delClass(grab('opPF'));
                hid_shw = undefined;
                ftcBD.style.display = "none";
            } else {
                addClass(grab('opPF'), "close_op");
                hid_shw = 1;
            }
            if (grab("opSrc").className.includes("close_op") || grab('opLeftPg').className.includes("close_op")) {
                delClass(grab("opSrc"));
                grab('Src').style.display = "none";
                delClass(grab('opLeftPg'));
                grab('LeftPg').style.display = "none";
            }
        }

        editPF = function () {
            addClass(grab('pf-form'), 'p-top-act');
            grab('pf-input').disabled = false;
            grab('edit-save').innerHTML = "<button class='ic_hf fplus'>save</button>";
            pacth_addEV(grab('pf-file'), "change", function () {
                if (fileScan(grab('pf-file'), 'imgSrc', grab('pf-photo')) == false) {
                    grab('pf-file-err').innerHTML = "invalid image";
                    grab('pf-photo').src = "img/pg/img.png";
                } else {
                    grab('pf-file-err').innerHTML = "";
                }
            });

        }

        opPF2 = function () {
            var ftcBD = grab('pf_drpDW');
            ftcBD.style.display = "inline-block";
            ftcBD.setAttribute("class", "pf_drpDW");
            ftcBD.innerHTML = '<form id="pf-form" class=\'p-top\'><div class="up-pck ic_hf"><button></button><input id="pf-file" type="file"></div><img id="pf-photo" src=\'files/mpCV/1.jpg\'><h3 id="pf-file-err"></h3><div class="pt-mid pt-mid-act"><input id="pf-input" type="text" maxlength="21" disabled value="AyoAyomide"><p>samuel abel</p><div class=\'fo\' id="edit-save"><div class=\'ic_hf fedt\' onclick="editPF();">edit</div></div></div></form><div class=\'p-bom\'><div><h3>song</h3><p>234</p></div><div><h3>follower</h3><p>234</p></div><div><h3>following</h3><p>234</p></div></div>';
            if (grab('opPF2').className.includes("close_op")) {
                delClass(grab('opPF2'));
                hid_shw = undefined;
                ftcBD.style.display = "none";
            } else {
                addClass(grab('opPF2'), "close_op");
                hid_shw = 1;
            }
            if (grab("opSrc").className.includes("close_op") || grab('opLeftPg').className.includes("close_op")) {
                delClass(grab("opSrc"));
                grab('Src').style.display = "none";
                delClass(grab('opLeftPg'));
                grab('LeftPg').style.display = "none";
            }
        }

        opSrc = function () {
            var opSrc = grab("opSrc"),
                Src = grab('Src'),
                opPF;
            Src.style.display = "inline-block";
            if (opSrc.className.includes("close_op")) {
                delClass(opSrc);
                hid_shw = undefined;
                Src.style.display = "none";
            } else {
                addClass(opSrc, "close_op");
                hid_shw = 1;
            }
            grab('opPF') == undefined ? opPF = grab('opPF2') : opPF = grab('opPF');
            if (opPF.className.includes("close_op") || grab('opLeftPg').className.includes("close_op")) {
                delClass(opPF);
                grab('pf_drpDW').style.display = "none";
                delClass(grab('opLeftPg'));
                grab('LeftPg').style.display = "none";
            }
        }

        opLeftPg = function () {
            var opLeftPg = grab('opLeftPg'),
                LeftPg = grab('LeftPg'),
                opPF;
            LeftPg.style.display = "inline-block";
            if (opLeftPg.className.includes("close_op")) {
                delClass(opLeftPg);
                hid_shw = undefined;
                LeftPg.style.display = "none";
            } else {
                addClass(opLeftPg, "close_op");
                hid_shw = 1;
            }
            grab('opPF') == undefined ? opPF = grab('opPF2') : opPF = grab('opPF');
            if (opPF.className.includes("close_op") || grab("opSrc").className.includes("close_op")) {
                delClass(opPF);
                grab('pf_drpDW').style.display = "none";
                delClass(grab("opSrc"));
                grab('Src').style.display = "none";
            }

        }

        open_cl = function (op_btn, opbd) {
            var handleDp = op_btn.id,
                opBDY = grab(opbd),
                hid_shw = 1;
            pacth_addEV(opBDY, 'mouseout', function () {
                hid_shw = undefined;
            });
            pacth_addEV(opBDY, 'mouseover', function () {
                hid_shw = 1;
            });
            switch (handleDp) {
                case 'opPF':
                    opPF();
                    break;
                case 'opSrc':
                    opSrc();
                    break;
                case 'opLeftPg':
                    opLeftPg();
                    break;
                case 'opPF2':
                    opPF2();
                    break;
            }
            pacth_addEV(window, 'click', function () {
                if (hid_shw == undefined) {
                    opBDY.style.display = "none";
                    delClass(op_btn);
                }
                hid_shw = 1;
            });

        }

        open_Vol = function () {
            var opVol = grab("opVol");
            if (window.innerWidth < 701) {
                if (opVol.value == "open") {
                    opVol.nextElementSibling.style.display = "none";
                    opVol.value = "close";

                } else {
                    opVol.nextElementSibling.style.display = "inline-block";
                    opVol.value = "open";
                }
            }
        }

        openFM = function () {
            var midPage = grab('mp_HM'),
                rgtPage = grab('mp_FM'),
                opFM = grab('opFM');
            if (opFM.value == "open") {
                midPage.setAttribute('class', 'bd_md hf_m');
                rgtPage.style.display = 'inline-block';
                if (window.innerWidth < 701 && midPage.className.includes("hf_m")) {
                    midPage.style.display = "none";
                    rgtPage.style.paddingLeft = '0em';
                } else {
                    midPage.style.display = "inline-block";
                    rgtPage.style.paddingLeft = '20em';
                }
                pacth_addEV(window, 'resize', function () {
                if (window.innerWidth < 701 && midPage.className.includes("hf_m")) {
                    midPage.style.display = "none";
                    rgtPage.style.paddingLeft = '0em';
                } else {
                    midPage.style.display = "inline-block";
                    rgtPage.style.paddingLeft = '20em';
                }
            });
                opFM.value = "close";
                opFM.title = "exit full mode";
                opFM.style.backgroundPosition = "-1px -548px";
            }
            else{
               midPage.style.display = 'inline-block';
            midPage.setAttribute('class', 'bd_md');
            rgtPage.style.display = 'none';
                opFM.value = "open";
                opFM.title = "go full mode";
                opFM.style.backgroundPosition = "-1px -448px";
            }
                
        }
    

    }
    setTimeout(payLoad, 1000);
