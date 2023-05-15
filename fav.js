let text = document.querySelector('input[type="text"]')
let btn = document.querySelector('input[type="button"]')
let form = document.querySelector('form')

btn.addEventListener('click', getHero)

function getHero(){
	let heroName = form.querySelector('input[type="text"]').value.toLowerCase()
	let common = document.createElement('form')
	let div = document.createElement('div')
	let img = document.createElement('img')
	let p = document.createElement('p')
	let input = document.createElement('input')
	common.innerHTML = form.innerHTML

	function favHero(heroName, src){
		form.innerHTML = ''
		p.innerHTML = heroName.charAt(0).toUpperCase() + heroName.slice(1);
		img.src = src
		form.appendChild(div)
		div.appendChild(img)
		div.appendChild(p)
		input.value = 'Изменить'
		input.type = 'button'
		input.style.margin = '4em'
		input.addEventListener('click' , function(){
			form.innerHTML = common.innerHTML
			form.querySelector('input[type="button"]').addEventListener('click', getHero)
		})
		form.appendChild(input)
	}

	if(heroName == 'железный человек'){
		let src = "./img/iron_man.jpg"
		favHero(heroName, src)
	}
	else if(heroName == 'человек паук'){
		let src = "./img/spider_man.jpeg"
		favHero(heroName, src)
	}
	if(heroName == 'капитан америка'){
		let src = './img/captain_america.jpg'
		favHero(heroName, src)
	}
}

