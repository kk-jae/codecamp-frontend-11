import { useRouter } from "next/router";

export default function useMovedPage() {
  const router = useRouter();

  const onClickMovedPage = (path: string) => () => {
    router.push(path);
  };

  return {
    onClickMovedPage,
  };
}
