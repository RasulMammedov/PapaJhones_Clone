import { data } from './data.js';
// Onclick function for chategories
categoryLink.forEach(link => {
    // console.log(parseFloat(link.value))
    // Adding onclick for each button:
    link.onclick = function() {
        const chategorie = this.value
        code += /*html*/`<h2 class='font-[Poppins] text-[42px] max-lg:text-[36px] font-black pt-[34px]'>${chategorie}</h2>`
        // Displaying data to html
        code += `<div class="flex flex-wrap">`
        data[chategorie].forEach(data => {
            function priceFunc() {
                let price = data.variations.length == 0 ? data.price + 'AZN': data.price + 'AZN-dən'
                return price
            }
            code += /*html*/`
                <div class="w-[33.3333%] h-[449px] px-3.75 ">
                    <div class="h-full py-3 mt-6 mb-4 rounded-[16px] overflow-hidden">
                        <img class="w-full" src="${data.img}" />
                        <div class='px-3 font-[Poppins]'>
                            <h3 class='text-[16px] font-black pt-4 pb-2'>${data.title}</h3>
                            <span class='font-[400] text-[14px]'>${data.composition}</span>
                            <span id='price' class='font-[400] text-[14px]'>${priceFunc()}</span>
                        </div>
                    </div>
                </div>
            `
        })
        code += `</div>`
        display.innerHTML = code
        code = ""
    }
})