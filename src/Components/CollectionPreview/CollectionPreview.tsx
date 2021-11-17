import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.styles.scss";

interface CollectionPreviewProps {
  title: string;
  items: any;
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}): JSX.Element => {
  console.log("hi");
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          // renders the top four items of each collection
          items
            .filter((item, idx) => idx < 4)
            .map(({ id, name, price, imageUrl }) => {
              return (
                <CollectionItem
                  key={id}
                  name={name}
                  price={price}
                  imageUrl={imageUrl}
                />
              );
            })
        }
      </div>
    </div>
  );
};

export default CollectionPreview;
