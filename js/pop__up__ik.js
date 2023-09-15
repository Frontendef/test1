
// 1
const openPopUpx = document.getElementById('open_pop_upx');
const closePopUpx = document.getElementById('pop_up_closex');
const popUpx = document.getElementById('pop_upx');



openPopUpx.addEventListener('click', function(e){
    e.preventDefault();
    popUpx.classList.add('active');
})

closePopUpx.addEventListener('click', () => {
    popUpx.classList.remove('active');
})





