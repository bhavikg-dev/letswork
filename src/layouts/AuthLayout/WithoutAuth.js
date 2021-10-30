import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { setPageTitle } from "utils";
import MainHeader from "components/Header/main-header";
import "./AuthLayout.scss";

export default function AuthLayoutWithoutAuth({ component: Component, pageTitle, ...rest }) {

  /* Set Page Title */
  useEffect(() => {
    setPageTitle(pageTitle ? pageTitle : "");
  }, [pageTitle]);

  return(
        <Route {...rest} render={(props) =>
            (<>
              <MainHeader />
              <Component {...props} />
            </>)
          }
        />
  );
}