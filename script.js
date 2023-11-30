const toggleBlock = document.getElementById('toggle-block')
const toggleFilter = document.getElementById('toggle-filter')
const menu = document.getElementById('menu')
const filter = document.getElementById('filter')

toggleBlock.addEventListener('click', function () {
	menu.classList.toggle('open')
});
toggleFilter.addEventListener('click', function () {
	filter.classList.toggle('openFilter')
})
