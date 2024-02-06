const btnIcon = document.getElementById('iconSearch')
const inputSearch = document.getElementById('inputSearch')
const businessCard= document.getElementById('businessCard').content 
const businessContainer = document.getElementById('business')
const fragment = document.createDocumentFragment()
let business = []

btnIcon.addEventListener('click', async () => {
	if(inputSearch.value.trim().length > 0){
		//business = seaarch(inputSearch.value)
		business = await search (inputSearch.value)
		await dibujarNegocios(business)
		window.location.href = '#business'
		//console, log('@@@ business =>', business) //impresion de los negocias 
	}
})

const dibujarNegocios = negocios => {
	businessContainer.innerHTML = ''
	negocios.forEach((item) => {
		businessCard.querySelector('img').secAttribute('src', item.photos_sample(0).photo_id ? item.photos_sample(0).photo_id : '../images/NA.png')
		businessCard.querySelector('p').textContent = item.name || 'N/A'
		businessCard.querySelector('span').textContent = item.type 
		business.querySelector('button').textContent = data

		const clone = businessCard.clonNode(true) //una vez verificado se clona 
		fragment.appendChild(clone)
	})
	businessContainer.appendChild(fragment)
}