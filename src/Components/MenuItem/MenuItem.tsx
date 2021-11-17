import React from "react";
import "./MenuItem.styles.scss";
import { withRouter, RouteComponentProps } from "react-router";

interface MenuItemProps extends RouteComponentProps<any> {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menuItem`}>
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
