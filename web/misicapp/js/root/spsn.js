function shp(inpTS) {
    'use strict';
    var fp1 = grab('fp1'),
        fp2 = grab('fp2'),
        CLshp = "shp",
        cArr;

    if (inpTS === "p1") {
        if (fp1.type == "password") {
            fp1.classList.toString().includes("act") ? fp1.style.backgroundPosition = "right -17em" : fp1.style.backgroundPosition = "right -18.9em";
            fp1.type = "text";
        } else {
            fp1.classList.toString().includes("act") ? fp1.style.backgroundPosition = "right -9.7em" : fp1.style.backgroundPosition = "right -7.8em";
            fp1.type = "password";
        }
    } else if (inpTS === "p2") {
        if (fp2.type == "password") {
            fp2.classList.toString().includes("act") ? fp2.style.backgroundPosition = "right -17em" : fp2.style.backgroundPosition = "right -18.9em";
            fp2.type = "text";
        } else {
            fp2.classList.toString().includes("act") ? fp2.style.backgroundPosition = "right -9.7em" : fp2.style.backgroundPosition = "right -7.8em";
            fp2.type = "password";
        }
    }

}

function cl_popBox() {
    'use strict';
    var popbox = grab("pop_box"),
        fomEl,
        cls_incSN,
        rtn_incSN;
    if (popbox.firstElementChild.className.includes("mid-box")) {
        fomEl = grab("us_data");
        cls_incSN = grab("cls_incSN");
        rtn_incSN = grab("rtn_incSN");
        if (fomEl.className.includes("prg")) {
            fomEl.lastElementChild.style.display = "inline-block";
        } else {
            popbox.style.display = "none";
        }
        cls_incSN.onclick = function () {
            popbox.style.display = "none";
        };
        rtn_incSN.onclick = function () {
            fomEl.lastElementChild.style.display = "none";
        };
    } else {
        popbox.style.display = "none";
    }
}

function swtSPSN(spsn) {
    var popbox = grab("pop_box"),
        fomEl = grab("us_data"),
        cls_incSN = grab("cls_incSN"),
        rtn_incSN = grab("rtn_incSN");
    if (fomEl.className.includes("prg")) {
        fomEl.lastElementChild.style.display = "inline-block";
    } else {
        if(spsn.id == "swt_SP"){
            popbox.innerHTML = '<div class="mid-box"><div class="sn-HD"><div><button class="ic_hf" id="cls-spn" onclick="cl_popBox();"></button><h1>welcome To GBEDU</h1><p>Your free portal to unlimited music</p><form class="ld mid" enctype="multipart/form-data" id="us_data" autocomplete="off" method="post"><h2>create account</h2><ul><li><input class="input iconS" type="text" id="fname" name="fname" maxlength="50" onclick="dinp(this,\'f1\')" onblur="chInput(this,\'ft\')" required title="Enter text only"/><p class="pl">firstname</p><span></span></li><li><input type="text" class="input iconS" name="sname" onclick="dinp(this,\'f2\')" onblur="chInput(this,\'ft\')" required title="Enter text only"/><p class="pl">lastname</p><span></span></li><li><input type="email" class="input iconS" required title="Enter a valid email" onblur="chInput(this,\'fe\');" onclick="dinp(this,\'f3\');"><p class="pl">Email</p><span></span></li></ul><button>next</button><br><div class="pre_cl" style="display:none;"><ul><li><h3>Are you sure you want to cancel all your previous action ?</h3></li><li><button form="ghost" id="cls_incSN">Yes</button><button form="ghost" id="rtn_incSN">No</button></li></ul></div></form><button id="swt_SN" onclick="swtSPSN(this)">sign in</button></div></div></div>';
        }else if(spsn.id == "swt_SN"){
            popbox.innerHTML = '<div class="mid-box"><div class="sn-HD"><div><button class="ic_hf" id="cls-spn" onclick="cl_popBox();"></button><h1>welcome To GBEDU</h1><p>Your free portal to unlimited music</p><form class="ld mid" enctype="multipart/form-data" id="us_data" autocomplete="off" method="post"><h2>sign in to your account</h2><ul><li><input type="email" class="input iconS" required title="Enter a valid email" onblur="chInput(this,\'fe\');" onclick="dinp(this,\'f3\');"><p class="pl">Email</p><span></span></li><li><input type="password" class="input iconS" required title="Enter a valid password" onclick="dinp(this,\'f4\')" onblur="chInput(this,\'fp\')" id="fp1"><p class="pl">Password</p><span></span><div class="shp" title="click to show password" onclick="shp(\'p1\')"></div></li></ul><button>sign in</button><br><a href="">forgotten password ?</a><div class="pre_cl" style="display:none;"><ul><li><h3>Are you sure you want to cancel all your previous action ?</h3></li><li><button form="ghost" id="cls_incSN">Yes</button><button form="ghost" id="rtn_incSN">No</button></li></ul></div></form><button id="swt_SP" onclick="swtSPSN(this)">sign up</button></div></div></div>';
        }
        
    }
    cls_incSN.onclick = function () {
        popbox.innerHTML = '<div class="mid-box"><div class="sn-HD"><div><button class="ic_hf" id="cls-spn" onclick="cl_popBox();"></button><h1>welcome To GBEDU</h1><p>Your free portal to unlimited music</p><form class="ld mid" enctype="multipart/form-data" id="us_data" autocomplete="off" method="post"><h2>sign in to your account</h2><ul><li><input type="email" class="input iconS" required title="Enter a valid email" onblur="chInput(this,\'fe\');" onclick="dinp(this,\'f3\');"><p class="pl">Email</p><span></span></li><li><input type="password" class="input iconS" required title="Enter a valid password" onclick="dinp(this,\'f4\')" onblur="chInput(this,\'fp\')" id="fp1"><p class="pl">Password</p><span></span><div class="shp" title="click to show password" onclick="shp(\'p1\')"></div></li></ul><button>sign in</button><br><a href="">forgotten password ?</a><div class="pre_cl" style="display:none;"><ul><li><h3>Are you sure you want to cancel all your previous action ?</h3></li><li><button form="ghost" id="cls_incSN">Yes</button><button form="ghost" id="rtn_incSN">No</button></li></ul></div></form><button id="swt_SP" onclick="swtSPSN(this)">sign up</button></div></div></div>';
    };
    rtn_incSN.onclick = function () {
        fomEl.lastElementChild.style.display = "none";
    };
}

function snsp() {
    'use strict';
    var op_sp_sn = grab("op-sign"),
        op_up_sg = grab("op-up_sg"),
        popbox = grab("pop_box");
    op_sp_sn.onclick = function () {
        if (popbox.style.display == "none") {popbox.style.display = "flex";}
        delClass(grab('opLeftPg'));
        popbox.innerHTML = '<div class="mid-box"><div class="sn-HD"><div><button class="ic_hf" id="cls-spn" onclick="cl_popBox();"></button><h1>welcome To GBEDU</h1><p>Your free portal to unlimited music</p><form class="ld mid" enctype="multipart/form-data" id="us_data" autocomplete="off" method="post"><h2>sign in to your account</h2><ul><li><input type="email" class="input iconS" required title="Enter a valid email" onblur="chInput(this,\'fe\');" onclick="dinp(this,\'f3\');"><p class="pl">Email</p><span></span></li><li><input type="password" class="input iconS" required title="Enter a valid password" onclick="dinp(this,\'f4\')" onblur="chInput(this,\'fp\')" id="fp1"><p class="pl">Password</p><span></span><div class="shp" title="click to show password" onclick="shp(\'p1\')"></div></li></ul><button>sign in</button><br><a href="">forgotten password ?</a><div class="pre_cl" style="display:none;"><ul><li><h3>Are you sure you want to cancel all your previous action ?</h3></li><li><button form="ghost" id="cls_incSN">Yes</button><button form="ghost" id="rtn_incSN">No</button></li></ul></div></form><button id="swt_SP" onclick="swtSPSN(this)">sign up</button></div></div></div>';
    };
    op_up_sg.onclick = function () {
        delClass(grab('opLeftPg'));
        if (popbox.style.display == "none") {popbox.style.display = "flex";}
        popbox.innerHTML = '<div class="gen"><ul><li><h1>Sorry you are not <br>logged in yet</h1></li><li class="bu"><button id="sn" class="sn">sign in</button></li><li class="bu"><button id="sp" class="sp">sign up</button></li></ul><button  onclick="cl_popBox();" class="ic_hf"></button></div>';
    };
}
setTimeout(snsp, 1000);
