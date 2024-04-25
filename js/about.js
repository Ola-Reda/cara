const featureBox = document.querySelector(".feature-box");

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