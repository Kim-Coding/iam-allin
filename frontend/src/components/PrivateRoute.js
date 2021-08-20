import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isAuth = sessionStorage.getItem("isAuth");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth === "true" ? <Component /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
