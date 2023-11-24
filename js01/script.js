(function(){

    "use strict";

    const get = (e) => document.querySelector(e);

    const $firstValue = get('.first');
    const $lastValue = get('.last');
    const $form = get('.form');
    const $input = get('.input');
    const $list = get('.list');
    const $preview =get('.preview')

    

    const initArrNum = (target, startIndex, endIndex, beforeValue)=>{
        target.innerHTML=''
        for(; startIndex <=endIndex; startIndex++){

            // if(beforeValue === startIndex ){
            //     target.innerHTML += `<option class="option" selected value="${startIndex}">${startIndex}</option>`
            // }else{
            //     target.innerHTML += `<option class="option" value="${startIndex}">${startIndex}</option>`
            // }
            
            target.innerHTML += `<option class="option" value="${startIndex}" ${beforeValue === startIndex? 'selected': ''}>${startIndex}</option>`
        }
    }
    const addItem = () => {
        const $listItem = document.createElement('li');
        const str = $input.value.substring($firstValue.value,$lastValue.value )
        $listItem.innerHTML= `
            ${str}
        `
        return $listItem
    }

    const handleSubmit = (e) =>{
        e.preventDefault()        
        $list.appendChild(addItem())  
        $input.value='' 
        $preview.innerHTML = ''
        initArrNum($firstValue, 0, 0, 0);
        initArrNum($lastValue, 0, 0, 0);
    }  

    const changeOption = () =>{       

        const inputValueLength = $input.value.length
        initArrNum($firstValue, 0, inputValueLength === 0 ? 0 : inputValueLength -1, Number($firstValue.value));
        initArrNum($lastValue, inputValueLength === 0? 0 : Number($firstValue.value) + 1, inputValueLength, Number($lastValue.value)); 

        // const str = $input.value.substring(Number($firstValue.value), Number($lastValue.value) )
        // $preview.innerHTML=`
        //     ${str}
        // `
        $preview.innerHTML=$input.value.substring(Number($firstValue.value), Number($lastValue.value) )


        // const inputValueLength = $input.value.length
        // initArrNum($lastValue, inputValueLength === 0? 0 : Number( $firstValue.value) + 1, inputValueLength);         
        // const inputValueLength = $input.value.length
        // initArrNum($firstValue, 0, inputValueLength === 0 ? 0 : inputValueLength -1);
        // initArrNum($lastValue, inputValueLength === 0? 0:1, inputValueLength);  
    }
     

    const init = () => {  
        $input.addEventListener('keyup', changeOption);
        $firstValue.addEventListener('change', changeOption)
        $lastValue.addEventListener('change', changeOption)
        $form.addEventListener('submit', handleSubmit)
        initArrNum($firstValue, 0, 0, 0);
        initArrNum($lastValue, 0, 0, 0);
    }
    init()
})()