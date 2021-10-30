import React, { Fragment } from "react";
import { Strings } from "resources";
import "./PageNotFound.scss";

export default function PageNotFound(props) {
  return (
    <Fragment>
      <div className="pageContent page404">
          <h1 className="title">{Strings.page404}</h1>
          <h2 className="subTitle">{Strings.pageNotFound}</h2>
          <p className="description">{Strings.page404Description}</p>
      </div>
    </Fragment>
  );
}
