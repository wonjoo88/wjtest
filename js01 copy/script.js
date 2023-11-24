(function(){

    // 노드불러오기
    const get = (target) => document.querySelector(target);

    const $subStringIndexFirst = get('.first')
    const $subStringIndexLast = get('.last')
    const $subminFrom = get('form')
    const $input = get('input')
    const $list = get('.list')

    const submitItem = () => {
        const $item = document.createElement("li");
        // $item.innerHTML=`${$input.value}`
        // 3. 옵션에 지정된 인덱스값만 등록가능
        const str = $input.value.substring($subStringIndexFirst.value, $subStringIndexLast.value)        
        $item.innerHTML=`${str}`        
        return $item
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        $list.appendChild(submitItem());
        $input.value=''
        arrNum($subStringIndexFirst, 0, 0)
        arrNum($subStringIndexLast, 0, 0)
    }

    const arrNum = (target, startIndex, endIndex, selectedValue) =>{
        target.innerHTML =''
        for(; startIndex <= endIndex; startIndex++){
            target.innerHTML +=`
                <option value="${startIndex}" ${selectedValue === startIndex ? 'selected': ''}>${startIndex}</option>
            `
        }
    }

    const changOption = () => {

        const indexValue = $input.value.length
        console.log(indexValue);
        arrNum($subStringIndexFirst, 0, indexValue === 0 ? 0 : indexValue -1, Number($subStringIndexFirst.value))
        arrNum($subStringIndexLast, Number($subStringIndexFirst.value)+1, indexValue, Number($subStringIndexLast.value))

        console.log($subStringIndexFirst.value, $subStringIndexLast.value);


        // 4 출력예상값 보여주기
        const $preview = get('.preview')
        $preview.innerHTML = $input.value.substring($subStringIndexFirst.value, $subStringIndexLast.value)   
    }

    console.log(changOption);

    const init=()=>{
        // 1. 입력글자 등록하기
        $subminFrom.addEventListener('submit', handleSubmit)
        // 2. select option 동적으로 넣기

            // 2_3. firstIndex 선택되면 lastIndex 옵션값 변경
            $subStringIndexFirst.addEventListener('change', changOption)
            $subStringIndexLast.addEventListener('change', changOption)
            $input.addEventListener('keyup', changOption)
            // 2_2. 입력값 길이에 따른 옵션값
            // $input.addEventListener('keyup', (event)=>{
            //     const indexValue = $input.value.length
            //     console.log(indexValue);
            //     arrNum($subStringIndexFirst, 0, indexValue === 0 ? 0 : indexValue -1)
            //     arrNum($subStringIndexLast, indexValue === 0 ? 0 : 1, indexValue)
            // })
            // 2_1. select option 초기값
            arrNum($subStringIndexFirst, 0, 0, 0)
            arrNum($subStringIndexLast, 0, 0, 0)

    }
    init()
})()