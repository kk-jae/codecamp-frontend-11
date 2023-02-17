import { gql, useMutation } from "@apollo/client";

export default function useMutationUploadFile() {
  const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
      uploadFile(file: $file) {
        url
      }
    }
  `;
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeUploadFile = (file) => {
    const result = uploadFile({
      variables: {
        file,
      },
    });
  };
}
