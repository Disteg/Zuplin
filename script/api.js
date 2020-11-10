function btnNum(num) {
    document.form.textview.value =  document.form.textview.value + num;
}

function cleanInput(){
    document.form.textview.value = '';
}

function equal() {
    let resalt = document.form.textview.value;
    if(resalt) {
        document.form.textview.value = eval(resalt);
    }
};