const btnIcon = document.getElementById('iconSearch')
const inputSearch = document.getElementById('inputSearch')
let business = []

btnIcon.addEventListener('click', () => {
	if(inputSearch.value.trim().length > 0){
		business = seaarch(inputSearch.value)
		console, log('@@@ business =>', business)
	}
})