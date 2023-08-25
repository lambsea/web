// 获取HTML元素
const mintButton = document.getElementById('mintButton');
const progressBar = document.getElementById('progressBar');
const progressCount = document.getElementById('progressCount');

let currentMinted = 2269; // 设置初始值
const totalMinted = 5000;

mintButton.addEventListener('click', function() {
    currentMinted += 1; // 当Mint按钮被点击，数量+1
    updateProgressBar();
});

function updateProgressBar() {
    const progressPercentage = (currentMinted / totalMinted) * 100;
    progressBar.style.width = progressPercentage + '%'; 
    progressCount.textContent = currentMinted + '/5000';
}
