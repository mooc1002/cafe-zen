'use strict';

//DOM操作

let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');




//検知した時の処理
const cb = entry => {
	entry.forEach(e => {
		if(e.isIntersecting) {
			e.target.classList.add('io');
		} else {
			e.target.classList.remove('io');
		}
	}) 
}


//インスタンス生成
const io = new IntersectionObserver(cb);


//監視対象を決める

io.observe(box1);
io.observe(box2);
io.observe(box3);




