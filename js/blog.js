const blogsBox = document.querySelector(".blogs-box")
console.log(blogsBox)

function displayBlogs(data) {
    let boxs = ''
    data.map(box => {
        boxs += `
        <div class="flex flex-col items-center gap-10 mb-16 min-[500px]:flex-row">
            <div class="min-[500px]:w-6/12">
                <img src="${box.image}" alt="${box.name}" class="w-full min-[500px]:h-[270px] object-cover">
            </div>
            <div class="min-[500px]:w-[40%]">
                <h3 class="font-semibold text-2xl capitalize mb-1.5">${box.name}</h3>
                <p class="text-[#979595] mb-2 leading-6 text-lg">${box.desc}</p>
                <a href="#" class="relative line uppercase font-semibold text-sm">${box.more}</a>
            </div>
        </div>
        `
    });
    blogsBox.innerHTML = boxs
}
displayBlogs(blogsData)