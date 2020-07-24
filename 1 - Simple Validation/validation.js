$(function () {
  $("#register-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: "required",
      password2: {
        required: true,
        equalTo: "#password"
      },
    },

    messages: {
      email: {
        required: 'Email không được để trống!',
        email: 'Email không hợp lệ!'
      },
      password: {
        required: 'Mật khẩu không được để trống!',
      },
      password2: {
        required: 'Hãy Nhập lại mật khẩu!',
        equalTo: 'Mật khẩu bạn nhập không khớp! '
      }
    }
  });
});
