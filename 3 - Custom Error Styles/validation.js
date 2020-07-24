$(function () {

  $.validator.setDefaults({
    errorElement: "span",
    errorPlacement: function (error, element) {
      // error.addClass("invalid-tooltip");
      error.addClass("invalid-feedback");
      element.closest(".form-group").append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass("is-invalid").addClass('is-valid');
    },
  });

  $.validator.addMethod('strongPassword', function(value, element) {
    return (
      this.optional(element) ||
      (value.length >= 6 && /\d/.test(value) && /[a-z]/i.test(value))
    );
  }, 'Password phải có ít nhất 6 ký tự và chứa ít nhất 1 số, 1 chữ cái');

// $.validator.addMethod(
//   "nowhitespace",
//   function (value, element) {
//     return this.optional(element) || /^\S+$/i.test(value);
//   },
//   "No white space please"
// );

// $.validator.addMethod(
//   "lettersonly",
//   function (value, element) {
//     return this.optional(element) || /^[a-z]+$/i.test(value);
//   },
//   "Letters only please"
// );


  $("#register-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        maxlength: 10,
        nowhitespace: true,
        strongPassword: true,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
      firstName: {
        required: true,
        nowhitespace: true,
        lettersonly: true,
      },
      secondName: {
        required: true,
        nowhitespace: true,
        lettersonly: true,
      },
    },

    messages: {
      email: {
        required: "Email không được để trống!",
        email: "Email không hợp lệ!",
      },
      password: {
        required: "Mật khẩu không được để trống!",
        maxlength: "Mật khẩu không được vượt quá 10 ký tự!",
        nowhitespace: "Password không được chứa khoảng trắng!",
      },
      password2: {
        required: "Hãy Nhập lại mật khẩu!",
        equalTo: "Mật khẩu bạn nhập không khớp! ",
      },
      firstName: {
        required: "Tên không được để trống!",
        nowhitespace: "tên không được chứa khoảng trắng!",
        lettersonly: "tên chỉ được chứa chữ cái!",
      },
      secondName: {
        required: "Tên không được để trống!",
        nowhitespace: "tên không được chứa khoảng trắng!",
        lettersonly: "tên chỉ được chứa chữ cái!",
      },
    },
  });
});
