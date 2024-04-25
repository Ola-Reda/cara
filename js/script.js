const featureBox = document.querySelector(".feature-box");
const producteBox = document.querySelector(".products-items");
const ArrivalBox = document.querySelector(".new-products .products-items");
const bannerTopBox = document.querySelector(".blog .top-box");
const bannerBttomBox = document.querySelector(".blog .bottom-box");


//function to display products in page
function dsiplayproducts(data) {
    const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                `
    let products = ''
    data.map(item => {
        products += `
        <div class="p-3 product border border-solid border-gray-200 rounded-2xl shadow hover:scale-95 transition delay-200 ease-in-out duration-500" id="${item.id}">
            <img class="rounded-2xl" src="${item.image}" alt="${item.name}">
            <div class="mt-4">
                <span class="text-[#979595]">${item.brand}</span>
                <h4 class="capitalize font-medium">${item.name}</h4>
                <div class="flex gap-0.5 text-amber-400">${starIcon.repeat(item.rating)}</div>
                <div class="flex items-center justify-between">
                    <span class="text-dim-900 font-semibold">$${item.price}</span>
                    <button class="text-dim-900 bg-[#f0f0f0] w-10 h-10 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg></button>
                </div>
            </div>
        </div>
        `
    })
    producteBox.innerHTML = products
}
dsiplayproducts(productsData) 



function dsiplayArrival(data) {
    const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                `
    let products = ''
    data.map(item => {
        products += `
        <div class="p-3 product border border-solid border-gray-200 rounded-2xl shadow hover:scale-95 transition delay-200 duration-500 ease-in-out" id="${item.id}">
            <img class="rounded-2xl" src="${item.image}" alt="${item.name}">
            <div class="mt-4">
                <span class="text-[#979595]">${item.brand}</span>
                <h4 class="capitalize font-medium">${item.name}</h4>
                <div class="flex gap-0.5 text-amber-400">${starIcon.repeat(item.rating)}</div>
                <div class="flex items-center justify-between">
                    <span class="text-dim-900 font-semibold">$${item.price}</span>
                    <button class="text-dim-900 bg-[#f0f0f0] w-10 h-10 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg></button>
                </div>
            </div>
        </div>
        `
    })
    ArrivalBox.innerHTML = products
}
dsiplayArrival(arrivalData) 


//function to display features
function displayFeature (data){
    let feature = ''
    data.map(item => {
        feature += `
        <div id="${item.id}" class="content m-auto shadow-md hover:shadow-lg transition ease-in-out delay-200 duration-500 rounded border border-solid border-gray-200 p-4">
            <img src="${item.image}" alt="${item.name}">
            <h4 class="capitalize font-medium pb-1 pt-1.5 text-dim-900 mt-3 bg-[#fddde4] rounded">${item.name}</h4>
        </div>
        `
    })
    featureBox.innerHTML = feature
}

displayFeature(featureData)


//function to display banners
function displayTopBlog(data) {
    let banners = ''
    data.map(item => {
        banners += `
            <div class="${item.id} flex items-center text-white min-w-[500px] h-[400px] hover:brightness-50 transition ease-in-out delay-150 duration-500">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full">
                <div class="absolute pl-8 leading-10">
                    <span class="font-extralight text-[26px]">${item.name}</span>
                    <h3 class="font-bold text-4xl">${item.sale}</h3>
                    <p class="font-medium">${item.desc}</p>
                    <button class="font-medium py-px px-6 border border-white capitalize hover:bg-dim-900 hover:border-dim-900">${item.more}</button>
                </div>
            </div>
        `
    })
    bannerTopBox.innerHTML = banners
}
displayTopBlog(bannersTopData) 


function displayBottomBlog(data) {
    let banners = ''
    data.map(item => {
        banners += `
            <div class="${item.id} flex items-center text-white hover:brightness-50 transition ease-in-out delay-150 duration-500">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full">
                <div class="absolute pl-8 leading-8">
                    <span class="font-bold uppercase text-[26px]">${item.name}</span>
                    <p class="font-semibold capitalize text-[#ec544e]">${item.desc}</p>
                </div>
            </div>
        `
    })
    bannerBttomBox.innerHTML = banners
}
displayBottomBlog(bannersBottomData) 