var chart;
let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Kinematics of Flow and Ideal flow</h4>

            <div class="fs-16px">
            <p style="text-align: center">Rotational, Irrotational flow and Shear strain</p>
            </div>

            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    //calculation();
    //draw_plot();
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-weight: 400; font-size: 18px;">
            A fluid flow is given by V = 8 x<sup>3</sup>i - 10 x<sup>2</sup> y i. Find the shear stain.
        </p>
        <p style="font-weight: 500; font-size: 14px;">Note: Enter y<sup>3</sup> as y^3</p>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ u = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='u-inp'><span id='u-val-sp'></span>
                <button class='btn btn-info' style='position: relative; left: 4vw; color:#fff;' onclick='verify_u();' id='temp-btn-u' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div> <br>
        </div>
        
        <div id="v-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ v = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='v-inp'><span id='v-val-sp'></span>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_v();' id='temp-btn-v' >Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        
        <div id="a-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\frac{\\partial u}{\\partial y} = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='a-inp'><span id='a-val-sp'></span>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_a();' id='temp-btn-a' >Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        
        <div id="b-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\frac{\\partial V}{\\partial x} = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='b-inp'><span id='b-val-sp'></span>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_b();' id='temp-btn-b' >Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        
        <div id="shear-strain-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ shear\\ strain = \\frac{1}{2} (\\frac{\\partial v}{\\partial x} + \\frac{\\partial u}{\\partial y}) $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-6">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ shear\\ strain = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='shear-strain-inp'><span id='shear-strain-val-sp'></span>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_shear_strain();' id='temp-btn-shear-strain'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>

        <div id="omega-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">Rotation in x-y plane</p>
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
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='omega-inp'><span id='omega-val-sp'></span>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_omega();' id='temp-btn-omega'>Verify</button>
                    </p>
                    
                </div>
                <div class="col-1"></div>
            </div>
            
        </div>
       
    </div>`;
    maindiv.innerHTML += text;
    //draw_plot();
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_u() {
    let btn = document.getElementById('temp-btn-u');
    let u_inp = document.getElementById('u-inp');
    let sp1 = document.getElementById('u-val-sp');
    console.log(parseFloat(u));
    if (!verify_values(parseFloat(u_inp.value), parseFloat(u))) {
        alert(`incorrect value of u`);
        return;
    }
    u_inp.remove();
    sp1.innerHTML = `${u_orig}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('v-div'));
    div.style.display = 'block';
}
function verify_v() {
    let btn = document.getElementById('temp-btn-v');
    let v_inp = document.getElementById('v-inp');
    let sp2 = document.getElementById('v-val-sp');
    console.log(parseFloat(v));
    if (!verify_values(parseFloat(v_inp.value), parseFloat(v))) {
        alert(`incorrect value of height of v`);
        return;
    }
    v_inp.remove();
    sp2.innerHTML = `${v_orig}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('a-div'));
    div.style.display = 'block';
}
function verify_a() {
    let btn = document.getElementById('temp-btn-a');
    let a_inp = document.getElementById('a-inp');
    let sp3 = document.getElementById('a-val-sp');
    console.log(parseFloat(a.toFixed(2)));
    if (!verify_values(parseFloat(parseFloat(a_inp.value).toFixed(2)), parseFloat(a.toFixed(2)))) {
        alert(`incorrect value of theta`);
        return;
    }
    a_inp.remove();
    sp3.innerText = `${parseFloat(a.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('b-div'));
    div.style.display = 'block';
}
function verify_b() {
    let btn = document.getElementById('temp-btn-b');
    let b_inp = document.getElementById('b-inp');
    let sp4 = document.getElementById('b-val-sp');
    console.log(parseFloat(b));
    if (!verify_values(parseFloat(b_inp.value), parseFloat(b))) {
        alert(`incorrect value of weight of the cone`);
        return;
    }
    b_inp.remove();
    sp4.innerText = `${b}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('shear-strain-div'));
    div.style.display = 'block';
}
function verify_shear_strain() {
    let btn = document.getElementById('temp-btn-shear-strain');
    let shear_strain_inp = document.getElementById('shear-strain-inp');
    let sp5 = document.getElementById('shear-strain-val-sp');
    console.log(parseFloat(shear_strain));
    if (!verify_values(parseFloat(shear_strain_inp.value), parseFloat(shear_strain))) {
        alert(`incorrect value of shear strain`);
        return;
    }
    shear_strain_inp.remove();
    sp5.innerText = `${shear_strain}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('omega-div'));
    div.style.display = 'block';
}
function verify_omega() {
    let btn = document.getElementById('temp-btn-omega');
    let omega_inp = document.getElementById('omega-inp');
    let sp6 = document.getElementById('omega-val-sp');
    console.log(parseFloat(shear_strain));
    if (!verify_values(parseFloat(omega_inp.value), parseFloat(shear_strain))) {
        alert(`incorrect value of AG`);
        return;
    }
    omega_inp.remove();
    sp6.innerText = `${shear_strain}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    load_question();
}
function load_question() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('act1-btn6')
    // );
    // btn && btn.remove();
    let div = (document.getElementById('tb1-box'));
    div.innerHTML += `
   <br>
   <div id="act1-q-box-div">
   
   </div>
   <div class="row">
        <div class="col-12" style="display: flex; justify-content: center">
            <span id='omega-val-explain' style="font-size: 18px; font-weight: 500"></span>
        </div>
        <div class="col-12" style="display: flex; justify-content: center">
            <button class='btn btn-info' style='color:#fff; display: none; margin-top: 1%' onclick='next_step();' id='temp-btn-next'>Next</button>
        </div>
        
   </div>
   `;
    let ques = `State which option is correct.`;
    let opt = ['Irrotational Flow', 'Rotational Flow'];
    ans_a1 = '2';
    let box = (document.getElementById('act1-q-box-div'));
    let question = new Question_Options(ques, opt, ans_a1, box, 'act1-q-box', move_to_act2);
    question.load_question();
    let que = (document.querySelector('#act1-q-box-question-div h5'));
    que.classList.remove('fs-16px');
}
function move_to_act2() {
    let div = (document.getElementById('tb1-box'));
    let text = ans_a1 === '1' ? 'Irrotational Flow' : 'Rotational Flow';
    alert(`The answer is correct`);
    let sp16 = document.getElementById('omega-val-explain');
    sp16.innerHTML = `&#8757; &omega;<sub>z</sub> &#8800; 0, the flow is rotational.`;
    let btn = document.getElementById('temp-btn-next');
    btn.style.display = 'block';
}
function next_step() {
    let btn = document.getElementById('temp-btn-next');
    if (btn) {
        btn.remove();
    }
    start_act2();
}
activity1();
//# sourceMappingURL=activity1.js.map