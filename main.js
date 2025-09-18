
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const parent = document.getElementById('parent');
const addBtn1 = document.getElementById('btn1');
const addBtn2 = document.getElementById('btn2');

addBtn1.addEventListener('click', () => {
    const currentCount = parent.children.length;
    const newElement = document.createElement('p');
    newElement.textContent = "عنصر رقم  " + (currentCount + 1);
    /**** */
    newElement.style.backgroundColor = getRandomColor();
    newElement.style.color = "white";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "3px";
    newElement.style.margin = "5px 0";
    newElement.style.display = "flex";
    newElement.style.justifyContent = "space-between";
    newElement.style.alignItems = "center";
    /*** */
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "rgb(255, 255, 255)";
    deleteBtn.style.color = "black";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.padding = "5px 10px";

    deleteBtn.addEventListener('click', () => {
        newElement.remove();
    });

    newElement.appendChild(deleteBtn);

    parent.prepend(newElement);
});

addBtn2.addEventListener('click', () => {
    const currentCount = parent.children.length;
    const newElement = document.createElement('p');
    newElement.textContent = "عنصر رقم  " + (currentCount + 1);
    newElement.style.backgroundColor = getRandomColor();
    newElement.style.color = "white";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "3px";
    newElement.style.margin = "5px 0";
    newElement.style.display = "flex";
    newElement.style.justifyContent = "space-between";
    newElement.style.alignItems = "center";
    /*** */
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "rgb(255, 255, 255)";
    deleteBtn.style.color = "black";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.padding = "5px 10px";

    deleteBtn.addEventListener('click', () => {
        newElement.remove();
    });

    newElement.appendChild(deleteBtn);

    parent.appendChild(newElement);
});

