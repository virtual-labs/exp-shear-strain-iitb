function start_act2() {
    let temp_btn = document.getElementById('temp-btn-act-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    //act2_calculation();
    let btn_text = get_collapse_btn_text("Activity 2", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4">
                $$ u = \\frac{y^3}{3} + 2x -x^2y $$
            </div>
            <div class="col-4">
                $$ v = xy^2 - 2y -  \\frac{x^3}{3} $$
            </div>
            <div class="col-2"></div>
        </div>
        <br>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-6">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\frac{\\partial u}{\\partial x} = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='ux-inp'><span id='ux-val-sp'></span>
                <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='verify_ux();' id='temp-btn-ux' >Verify</button>
                </p>
            </div>
            <div class="col-4"></div>
        </div>

        <div id="uy-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-6">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\frac{\\partial u}{\\partial y} = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='uy-inp'><span id='uy-val-sp'></span>
                    <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='verify_uy();' id='temp-btn-uy' >Verify</button>
                    </p>
                </div>
                <div class="col-4"></div>
            </div>
        </div>

        <div id="vx-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-6">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\frac{\\partial v}{\\partial x} = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='vx-inp'><span id='vx-val-sp'></span>
                    <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='verify_vx();' id='temp-btn-vx' >Verify</button>
                    </p>
                </div>
                <div class="col-4"></div>
            </div>
        </div>

        <div id="vy-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-6">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\frac{\\partial v}{\\partial y} = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='vy-inp'><span id='vy-val-sp'></span>
                    <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='verify_vy();' id='temp-btn-vy' >Verify</button>
                    </p>
                </div>
                <div class="col-4"></div>
            </div>
        </div>

        <div id="uvxy-div" style="display: none">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='uvxy-inp'><span id='uvxy-val-sp'></span>
                    <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='verify_uvxy();' id='temp-btn-uvxy' >Verify</button>
                    </p>
                </div>
                <div class="col-2"></div>
            </div> <br>
        </div>

        

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_ux() {
    let btn = document.getElementById('temp-btn-ux');
    let ux_inp = document.getElementById('ux-inp');
    let sp1 = document.getElementById('ux-val-sp');
    console.log(parseFloat(ux));
    if (!verify_values(parseFloat(ux_inp.value), parseFloat(ux))) {
        alert(`incorrect value`);
        return;
    }
    ux_inp.remove();
    sp1.innerText = `${ux}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('uy-div'));
    div.style.display = 'block';
}
function verify_uy() {
    let btn = document.getElementById('temp-btn-uy');
    let uy_inp = document.getElementById('uy-inp');
    let sp2 = document.getElementById('uy-val-sp');
    console.log(uy);
    if (!verify_string_values(uy_inp.value, uy)) {
        console.log(uy_inp.value);
        console.log(uy);
        alert(`incorrect value`);
        return;
    }
    uy_inp.remove();
    sp2.innerHTML = `${uy_orig}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('vx-div'));
    div.style.display = 'block';
}
function verify_vx() {
    let btn = document.getElementById('temp-btn-vx');
    let vx_inp = document.getElementById('vx-inp');
    let sp3 = document.getElementById('vx-val-sp');
    console.log(uy);
    if (!verify_string_values(vx_inp.value, uy)) {
        alert(`incorrect value`);
        return;
    }
    vx_inp.remove();
    sp3.innerHTML = `${uy_orig}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('vy-div'));
    div.style.display = 'block';
}
function verify_vy() {
    let btn = document.getElementById('temp-btn-vy');
    let vy_inp = document.getElementById('vy-inp');
    let sp4 = document.getElementById('vy-val-sp');
    console.log(parseFloat(vy));
    if (!verify_values(parseFloat(vy_inp.value), parseFloat(vy))) {
        alert(`incorrect value`);
        return;
    }
    vy_inp.remove();
    sp4.innerText = `${vy}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('uvxy-div'));
    div.style.display = 'block';
}
function verify_uvxy() {
    let btn = document.getElementById('temp-btn-uvxy');
    let uvxy_inp = document.getElementById('uvxy-inp');
    let sp5 = document.getElementById('uvxy-val-sp');
    console.log(parseFloat(a.toFixed(2)));
    if (!verify_values(parseFloat(uvxy_inp.value), parseFloat(a.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    uvxy_inp.remove();
    sp5.innerText = `${a}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    load_question2();
    // let div: HTMLDivElement = <HTMLDivElement>(
    // 	document.getElementById('vy-div')
    // );
    // div.style.display = 'block';
}
function act2_verify_omega() {
    let btn = document.getElementById('act2-temp-btn-omega');
    let act2_omega_inp = document.getElementById('act2-omega-inp');
    let sp6 = document.getElementById('act2-omega-val-sp');
    console.log(parseFloat(a.toFixed(2)));
    if (!verify_values(parseFloat(act2_omega_inp.value), parseFloat(a.toFixed(2)))) {
        alert(`incorrect value`);
        return;
    }
    act2_omega_inp.remove();
    sp6.innerText = `${a}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    load_question3();
}
function load_question2() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('act1-btn6')
    // );
    // btn && btn.remove();
    let div = (document.getElementById('tb2-box'));
    div.innerHTML += `
   <br>
   <div id="act2-q-box-div">
   
   </div>

   <div id="act2-omega-div" style="display: none">
        <p style="font-weight: 500; font-size: 18px;">Rotation</p>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ \\omega_z = \\frac{1}{2} (\\frac{\\partial v}{\\partial x} - \\frac{\\partial u}{\\partial y}) $$
                </p>
            </div>
            <div class="col-6"></div>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\omega_z = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='act2-omega-inp'><span id='act2-omega-val-sp'></span>
                <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='act2_verify_omega();' id='act2-temp-btn-omega'>Verify</button>
                </p>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
   `;
    let ques = `Select suitable option.`;
    let opt = ['Possible case of flow', 'Not a flow'];
    ans_a2 = '1';
    let box = (document.getElementById('act2-q-box-div'));
    let question = new Question_Options(ques, opt, ans_a2, box, 'act2-q-box', move_to_act3);
    question.load_question();
    let que = (document.querySelector('#act2-q-box-question-div h5'));
    que.classList.remove('fs-16px');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function move_to_act3() {
    let div = (document.getElementById('tb2-box'));
    let text = ans_a2 === '1' ? 'Possible case of flow' : 'Not a flow';
    alert(`You are correct, it is ${text}.`);
    // let div1: HTMLDivElement = <HTMLDivElement>(
    // 	document.getElementById('act2-q-box-div')
    // );
    // div1.style.display = 'none';
    let div2 = (document.getElementById('act2-omega-div'));
    div2.style.display = 'block';
    // 	div.innerHTML += `
    //    <button class='btn btn-info btn-sm std-btn' id="act1-btn8" onclick='draw_plot();'>Next</button>
    //    `;
}
function load_question3() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('act1-btn6')
    // );
    // btn && btn.remove();
    let div = (document.getElementById('tb2-box'));
    div.innerHTML += `
   <br>
   <div id="act3-q-box-div">
   
   </div>
   `;
    let ques = `Select suitable option.`;
    let opt = ['Irrotational Flow', 'Rotational Flow'];
    ans_a3 = '1';
    let box = (document.getElementById('act3-q-box-div'));
    let question = new Question_Options(ques, opt, ans_a3, box, 'act3-q-box', move_to_act4);
    question.load_question();
    let que = (document.querySelector('#act3-q-box-question-div h5'));
    que.classList.remove('fs-16px');
}
function move_to_act4() {
    let div = (document.getElementById('tb2-box'));
    let text = ans_a3 === '1' ? 'Irrotational Flow' : 'Rotational Flow';
    alert(`You are correct, it is ${text}.`);
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-act2-spwt'));
    btn && btn.remove();
    alert('Experiment completed');
}
function verify_string_values(value, truevalue) {
    if (value == truevalue) {
        return true;
    }
}
//# sourceMappingURL=activity2.js.map