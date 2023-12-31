// Nhấm vào icon thời gian hiện lên box thời gian
document.addEventListener('DOMContentLoaded', function(){
    const timeChoose = document.getElementById('menu_icon_1')
    const timeBox = document.getElementById('timebox')
    // console.log (timeChoose, timeBox)

    timeChoose.addEventListener('click', function(){
        if(timeBox.style.display === 'block'){
            timeBox.style.display = 'none'
        }else{
            timeBox.style.display = 'block'
        }
    })

})




// Nhấn vào dấu ba chấm hiện lựa chọn
document.addEventListener('DOMContentLoaded', function(){
    const button = document.getElementById('settings_bar-dot')
    const listOp = document.getElementById ('settings_list')
    // console.log (button, listOp)

    button.addEventListener ('click', function(){
        if (listOp.style.display === 'block'){
            listOp.style.display = 'none';
        }else{
            listOp.style.display = 'block';
        }

    })
})

