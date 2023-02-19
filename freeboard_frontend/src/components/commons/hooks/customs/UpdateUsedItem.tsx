import { useRouter } from "next/router";
import useMutationUpdateUseditem from "../mutations/useMutationUpdateUseditem";

export default function onClickUpdateUsedItemFunc() {
  const [updateUsedItem] = useMutationUpdateUseditem();

  const router = useRouter();
  const onClickUpdateUsedItem = async (data) => {
    const result = await updateUsedItem({
      variables: {
        useditemId: router.query.itemId,
        updateUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          price: Number(data.price),
          contents: data.contents,
        },
      },
    });
    console.log(result);
  };

  return { onClickUpdateUsedItem };
}
