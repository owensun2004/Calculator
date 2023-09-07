function changestyle(){
    
    var paragraph = document.getElementsByClassName("para");
    if(paragraph[0].innerHTML == "2nd"){
        var changeText = paragraph[0].innerHTML = "back";
        var changeText = paragraph[1].innerHTML = "x^2";
        var changeText = paragraph[2].innerHTML = "x^3";
        var changeText = paragraph[3].innerHTML = "cubrt";
        var changeText = paragraph[4].innerHTML = "yroot";
        var changeText = paragraph[5].innerHTML = "2^x";
    }else{
        var changeText = paragraph[0].innerHTML = "2nd";
        var changeText = paragraph[1].innerHTML = "root(x)";
        var changeText = paragraph[2].innerHTML = "x^y";
        var changeText = paragraph[3].innerHTML = "10^x";
        var changeText = paragraph[4].innerHTML = "log";
        var changeText = paragraph[5].innerHTML = "ln";
    }
    
}

let normButton = Array.from(document.querySelectorAll('[nb]'));
const opButton = document.querySelectorAll('[ob]');
let display = document.querySelector('[md]')
let sDisplay = document.querySelector('[sd]')
let a=0;
normButton.map( nb => {
    nb.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC': 
            display.innerText = '';
            sDisplay.innerText = '';
            break;
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                //if(display.innerText == ''){
                //    sDisplay.innerText = '';
                //}
                break;
            case '*':
                if(sDisplay.innerText.includes('=') == true){
                    sDisplay.innerText = display.innerText+'*';
                    
                }else{
                    sDisplay.innerText += display.innerText+'*';
                }
                
                display.innerText = '';
                
                break;
            case '/':
                if(sDisplay.innerText.includes('=') == true){
                    sDisplay.innerText = display.innerText+'/';
                    
                }else{
                    sDisplay.innerText += display.innerText+'/';
                }
                
                // sDisplay.innerText += display.innerText;
                display.innerText = '';
                
                break;
            case '+':
                if(sDisplay.innerText.includes('=') == true){
                    sDisplay.innerText = display.innerText+'+';
                    
                }else{
                    sDisplay.innerText += display.innerText+'+';
                }
                
                display.innerText = '';
                
                break;
            case '-':
                if(sDisplay.innerText.includes('=') == true){
                    sDisplay.innerText = display.innerText+'-';
                    
                }else{
                    sDisplay.innerText += display.innerText+'-';
                }
                
                display.innerText = '';
                
                break;
            case '=':
                //if(sDisplay.innerText == display.innerText){
                //    sDisplay.innerText = display.innerText;
                //}else{
                    
                //}
                if(sDisplay.innerText.includes('^') == true){
                    let a;
                    sDisplay.innerText = sDisplay.innerText.replace('^', '');
                    a=display.innerText;
                    display.innerText = Math.pow(sDisplay.innerText, a);
                    sDisplay.innerText = sDisplay.innerText +'^' + a;
                }else if(sDisplay.innerText.includes('root') == true){
                    let c;
                    sDisplay.innerText = sDisplay.innerText.replace('root', '');
                    c=display.innerText;
                    display.innerText = Math.pow(c, 1/sDisplay.innerText);
                    sDisplay.innerText = sDisplay.innerText +'root' + c;

                }
                else{
                    sDisplay.innerText += display.innerText;
                    try{
                        display.innerText = eval(sDisplay.innerText);
                    
                    }catch{
                        display.innerText = 'Error :(';
                    }
                    sDisplay.innerText+='=';
                }
                
                break;
                
            case '+/-':
                display.innerText = display.innerText*-1;
                break;
                
            case '.':
                
                if(display.innerText.includes('.') == true){
                    display.innerText += e.target.innerText;
                    display.innerText = display.innerText.slice(0, -1);
                    
                }else{
                    display.innerText += e.target.innerText;
                }
                
                break;
            case 'e':
                display.innerText += 2.71;
                break;
            case 'π':
                display.innerText += 3.14;
                break;
            case 'x^2':
                //sDisplay.innerText+='(' + display.innerText +')^2';
                sDisplay.innerText += Math.pow(display.innerText, 2);
                //sDisplay.innerText+=display.innerText;
                //display.innerText=sDisplay.innerText;
                display.innerText='';
                break;
            case 'root(x)':
                    
                sDisplay.innerText += Math.pow(display.innerText, 1/2);
                //display.innerText=sDisplay.innerText;    
                display.innerText='';
                break;
            //under dev
            case 'x^y':
                sDisplay.innerText += display.innerText+'^';
                //sDisplay.innerText.toString();
                display.innerText='';
                
                //sDisplay.innerText = Math.pow(sDisplay.innerText, a);
                
                break;
            case '10^x':
                    
                sDisplay.innerText += Math.pow(10, display.innerText);
                //display.innerText=sDisplay.innerText;    
                display.innerText='';
                break;
            case 'log':
                /* under dev:
                 if(sDisplay.innerText.includes('+') == true||sDisplay.innerText.includes('-') == true||sDisplay.innerText.includes('*') == true||sDisplay.innerText.includes('/') == true) {
                    sDisplay.innerText += Math.log(display.innerText)/Math.log(10);
                    display.innerText='';
                }   else{
                    const b = display.innerText;
            
                    sDisplay.innerText = Math.log(b)/Math.log(10);
                    display.innerText=sDisplay.innerText;
                    sDisplay.innerText='log('+ b + ')';
                    //display.innerText='';
                } */
                sDisplay.innerText += Math.log(display.innerText)/Math.log(10);
                display.innerText='';
                break;
            case 'ln':
                    
                sDisplay.innerText += Math.log(display.innerText);
                //display.innerText=sDisplay.innerText;    
                display.innerText='';
                break;  
            case 'x^3':
                
                sDisplay.innerText += Math.pow(display.innerText, 3);
                display.innerText='';
                break;  
            case 'cubrt':
                sDisplay.innerText += Math.pow(display.innerText, 1/3);
                display.innerText='';   
                break;    
            case 'yroot':
                sDisplay.innerText += display.innerText+'root';
                display.innerText='';
                break;

            case '2^x':
                sDisplay.innerText += Math.pow(2, display.innerText);
                display.innerText='';
                break;
            default: display.innerText += e.target.innerText;

        }

    });
});