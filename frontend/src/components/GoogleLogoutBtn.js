import { GoogleLogout } from "react-google-login";

function GoogleLogoutBtn() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;

  const logout = () => {
    sessionStorage.setItem("isAuth", false);
    console.log("logout");
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={logout}
    ></GoogleLogout>
  );
}

export default GoogleLogoutBtn;
