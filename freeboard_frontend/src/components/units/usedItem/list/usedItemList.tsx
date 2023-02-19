import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";
import UsedItemListBody from "./body/usedItemListBody.index";
import UsedItemListFooter from "./footer/usedItemListFooter.index";
import UsedItemListHeader from "./header/UsedItemListHeader.index";

export default function UsedItemList() {
  const { data } = useQueryFetchUsedItems();

  return (
    <>
      <UsedItemListHeader />
      <UsedItemListBody data={data} />
      <UsedItemListFooter />
    </>
  );
}
