import { withAuth } from "../../../../src/components/commons/withAuth";
import CreateUsedItemUI from "../../../../src/components/units/useditem_review/createUsedItem";

export function CreateUsedItemPage(): JSX.Element {
  return <CreateUsedItemUI isEdit={false} />;
}

export default withAuth(CreateUsedItemPage);
