/*
function bToSize(bytes) {
    'use strict';
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'], i;
    if (bytes === 0) {
        return 'n/a';
    }
    i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i === 0) {
        return bytes + ' ' + sizes[i];
    }
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

function sumARR(arr) {
    'use strict';
    var sum = 0, i = 0;
    for (i; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

function showFIL(thimg, fi_lis) {
    'use strict';
    var reader = new FileReader(),
        uplLI = document.createElement("li"),
        uplPnm = document.createElement("p"),
        uplPsz = document.createElement("p"),
        uplPdg = document.createElement("p"),
        upfb = document.getElementById("upfb"),
        uplHD = document.getElementById("mu_li"),
        uFileSZ;
    reader.onloadstart = function () {
        if (thimg.type.match(/audio/)) {
            upfb.innerHTML = "";
            uFileSZ = bToSize(thimg.size);
            uplLI.appendChild(uplPnm);
            uplLI.appendChild(uplPsz);
            uplLI.appendChild(uplPdg);
            uplHD.appendChild(uplLI);
            uplPnm.setAttribute("class", "nm");
            uplPsz.setAttribute("class", "sz");
            uplPdg.setAttribute("class", "dg");
        } else {
            upfb.innerHTML = "file not surported";
        }
    };
    if (thimg.type.match(/audio/)) {
        reader.onload = function (e) {
            uplPnm.innerHTML = thimg.name;
            uplPsz.innerHTML = uFileSZ;
            uplPdg.innerHTML = fi_lis + 1;
            uplHD.setAttribute("class", "fl_in");
        };
        reader.readAsDataURL(thimg);
    } else {
        reader.onload = function (e) {
            uplLI.innerHTML = "<p class='nm'>invalid file</p><p class='sz'></p><p class='dg'></p>";
        };
        reader.readAsDataURL(thimg);
    }
}

function ufile(ufil) {
    'use strict';
    var uFile = ufil.files,
        uplHD = document.getElementById("mu_li"),
        tf_tsz = document.getElementById("tf_tsz"),
        tsz = [],
        i = 0;
    for (i; i < uFile.length; i++) {
        showFIL(uFile[i], i);
        tsz[i] = uFile[i].size;
    }
    tsz = sumARR(tsz);
    tf_tsz.innerHTML = "total file " + uFile.length + " size " + bToSize(tsz);

    if (uplHD.hasAttribute("class", "fl_in")) {
        uplHD.innerHTML = "";
    }
}
*/
function cl_popBox() {
    'use strict';
    var popbox = grab("pop_box");
    popbox.style.display = "none";
}
function snsp() {
    'use strict';
    var op_sp_sn = document.getElementById("op-sign"),
        op_up_sg = document.getElementById("op-up_sg"),
        popbox = document.getElementById("pop_box");
   
    op_sp_sn.onclick = function () {
        if (popbox.style.display == "none") {popbox.style.display = "flex";}
        delClass(grab('opLeftPg'));
        popbox.innerHTML = '<div class="gen"><ul><li><h1>Are you sure you want to signout ?</h1></li><li class="bu"><button id="sn" class="sn">YES</button></li></ul><button id="clc_pop" class="ic_hf" onclick="cl_popBox();" ></button></div>';
    };
    op_up_sg.onclick = function () {
        if (popbox.style.display == "none") {popbox.style.display = "flex";}
        delClass(grab('opLeftPg'));
        popbox.innerHTML = '<div class="gen"><ul><li><h1><br><br><br>Coming Soon</h1></li></ul><button id="clc_pop" class="ic_hf" onclick="cl_popBox()"></button></div>';
    };
}
setTimeout(snsp, 1000);