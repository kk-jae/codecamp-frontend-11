import { useMutation } from "@apollo/client";
import useMutationToggleUseditemPick from "../mutation/useMutationToggleUseditemPick";
import { useQueryIdChecker } from "./useQueryIdChecker";

export default function UsedItemToggle() {
  const { id } = useQueryIdChecker("usedItem");
  const [createUsedItemToggle] = useMutationToggleUseditemPick();

  const onClickUsedItemToggle = async () => {
    const result = await createUsedItemToggle({
      variables: {
        useditemId: id,
      },
    });
    console.log(result);
  };

  return { onClickUsedItemToggle };
}
