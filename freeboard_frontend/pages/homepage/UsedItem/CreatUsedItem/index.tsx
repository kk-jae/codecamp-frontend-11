import { withAuth } from "../../../../src/components/commons/withAuth";
import CreateUsedItemUI from "../../../../src/components/units/useditem/createUsedItem/createUsedItem";

function CreateUsedItemPage() {
  return <CreateUsedItemUI />;
}

export default withAuth(CreateUsedItemPage);
