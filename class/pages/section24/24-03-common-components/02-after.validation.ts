import * as yup from "yup";

export const schema = yup.object({
  // required : 필수  (if 해서 null인지 undefined인지 작성했던 걸 해결)
  writer: yup.string().required("작성자를 입력해주세요"),
  title: yup.string().required(" 제목을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),

  // email: yup
  //   .string()
  //   .email("이메일 형식에 적합하지 않습니다.")
  //   .required("이메일은 필수 입력입니다."),

  // password: yup
  //   .string()
  //   .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
  //   .max(15, "비밀번호는 최대 15자리로 입력해 주세요")
  //   .required("비밀번호는 필수 입력입니다."),

  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다. ")
  //   .required("휴대폰은 필수 입력입니다."),
  // 3자리로 시작하고 가운데 3,4자리 나오고 마지막에 4자리로 끝나는 패턴만 성공 (^ : 3자리로 시작, $: 마지막으로 끝나는 자릿수)
});
