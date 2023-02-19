import { useQueryIdChecker } from "../../../../commons/hooks/customs/useQueryIdCheaker";
import { useQueryFetchUsedItem } from "../../../../commons/hooks/queries/useQueryFetchUsedItem";
import UsedItemDetailBodyBottom from "./bottom/usedItemDetailBodyBottom";
import UsedItemDetailBodyMiddle from "./middle/usedItemDetailBodyMiddle";
import UsedItemDetailBodyTop from "./top/usedItemDetailBodyTop";

export default function UsedItemDetailBody() {
  const { id } = useQueryIdChecker("itemId");
  const { data } = useQueryFetchUsedItem(id);

  return (
    <>
      <UsedItemDetailBodyTop />
      <UsedItemDetailBodyMiddle data={data} />
      <UsedItemDetailBodyBottom />
    </>
  );
}
