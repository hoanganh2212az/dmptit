// Nhấm vào icon thời gian hiện lên box thời gian
document.addEventListener('DOMContentLoaded', function(){
    const timeChoose = document.getElementById('menu_icon_1')
    const timeBox = document.getElementById('timebox')

    timeChoose.addEventListener('click', function(){
        if(timeBox.style.display === 'block'){
            timeBox.style.display = 'none'
        }else{
            timeBox.style.display = 'block'
        }
    })
})


document.addEventListener('DOMContentLoaded', function(){
    const soundChoose = document.getElementById('menu_icon_3');
    const sound_container = document.getElementById('sound_container');

    soundChoose.addEventListener('click', function(){
        if(sound_container.style.display === 'block'){
            sound_container.style.display = 'none';
        }else{
            sound_container.style.display = 'block';
        }
    });
});


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

