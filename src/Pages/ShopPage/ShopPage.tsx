import React from "react";
import SHOP_DATA from "./Shop_Data";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
interface Props {}

const ShopPage = (props: Props): JSX.Element => {
  let collections = SHOP_DATA;
  return (
    <div className="shop-page">
      {collections.map(({ id, title, items }) => {
        return <CollectionPreview key={id} title={title} items={items} />;
      })}
    </div>
  );
};
export default ShopPage;
