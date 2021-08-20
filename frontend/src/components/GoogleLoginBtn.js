import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";

function GoogleLoginBtn() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;

  const onSuccess = async (response) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;
    sessionStorage.setItem("isAuth", true);
    console.log(googleId, email, name);
  };

  const onFailure = (error) => {
    console.log(error);
  };
  const logout = () => {
    sessionStorage.setItem("isAuth", false);
    console.log("logout");
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="구글로그인"
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </>
  );
}

export default GoogleLoginBtn;
