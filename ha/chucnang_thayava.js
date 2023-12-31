function changeAvatar(event) {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function () {
        const img = document.getElementById('avatarImage');
        img.src = reader.result;
    };

    reader.readAsDataURL(input.files[0]);

    // Thêm logic xử lý lưu ảnh mới vào cơ sở dữ liệu hoặc server nếu cần
}

function enableAvaEditMode() {
    // Thêm logic xử lý khi bật chế độ chỉnh sửa
    document.getElementById('avatarInput').style.display = 'block';
}

function saveAvaChanges() {
    // Thêm logic xử lý khi lưu thay đổi
    document.getElementById('avatarInput').style.display = 'none';
}

function cancelAvaChanges() {
    // Thêm logic xử lý khi hủy thay đổi
    document.getElementById('avatarInput').style.display = 'none';
}
