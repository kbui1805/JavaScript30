// const [spacing_input, blur_input, base_input] = document.querySelectorAll(".controls input");

const INPUT_CONTROL = document.querySelectorAll(".controls input");
// const 

// console.log(spacing_input);

function getVal(input_el) {
    let value = input_el.value;
    if (input_el.name == 'base') {
        return value;
    }
    return `${value}px`;
}

function updateCssVal(input_element) {
    let value = getVal(input_element);
    // console.log(`${input_element.name}: ${value}`);
    document.documentElement.style.setProperty(`--${input_element.name}`, value);
    let current_val = getComputedStyle(document.documentElement).getPropertyValue(`--${input_element.name}`);

    console.log(current_val);

}

// spacing_input.addEventListener('change', function(e) {
//     updateCssVal(this);
// });

// INPUT_CONTROL.forEach(function(control_el) {
//     control_el.addEventListener('change', function(e) {
//         updateCssVal(this);
//     })
// });
let current_time = 0;
let rate = 30;
function RenderImage(time) {
    // console.log(time);

    let delta = time - current_time;
    if (delta >= rate){
        INPUT_CONTROL.forEach(function(el){
            updateCssVal(el);
        });
        current_time = time;
    }
    
    requestAnimationFrame(RenderImage);
}

// requestAnimationFrame(RenderImage);
