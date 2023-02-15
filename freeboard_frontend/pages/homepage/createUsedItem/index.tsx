import { withAuth } from "../../../src/components/commons/withAuth";
import CreateUsedItemContainer from "../../../src/components/units/useditem/createUsedItem/container";

function CreateUsedItemPage() {
  return <CreateUsedItemContainer />;
}

export default withAuth(CreateUsedItemPage);
