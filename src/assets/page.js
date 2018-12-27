// 绑定菜单的点击事件
// document.body.querySelector('ul.nav').addEventListener('click',(event)=> {
//     console.log(`输出Target:${event.target}`);
// })

document.body.querySelectorAll('ul.nav li').forEach(list => {
    list.addEventListener('click', event => {
        resetStyle();
        activeItem(list);
        hideAll();
        displaySelectedSection(list.dataset.section);
    })
})

/**
 * i. 显示需要显示的元素
 */
function displaySelectedSection(identifyCode) {
    document.body.querySelector(`#${identifyCode}`).classList.remove('hide-section');
}

/**
 * i. 隐藏所有
 */
function hideAll() {
    document.body.querySelectorAll('main[role="main"] div.content>div').forEach(block => {
        block.classList.add('hide-section');
    })
}

/**
 * i. 清除激活样式
 */
function resetStyle() {
    document.body.querySelectorAll('ul.nav li').forEach(list => {
        list.classList.remove('item-active');
    })
}
/**
 * i. 激活样式
 */
function activeItem(item) {
    item.classList.add('item-active');
}