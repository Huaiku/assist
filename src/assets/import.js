// 获取所有要导入的模块
const links = document.querySelectorAll('link[rel="import"]');

// 遍历引入需要的模板文件
Array.prototype.forEach.call(links,(link)=>{
    // 获取模板
    let template = link.import.querySelector('.task-template');
    let clone = document.importNode(template.content, true);
    document.querySelector('.content').appendChild(clone);
    // 隐藏所有
    document.body.querySelectorAll('main[role="main"] div.content>div').forEach(block => {
        block.classList.add('hide-section');
    })
    // 默认显示about
    document.body.querySelector(`#about`).classList.remove('hide-section');
});