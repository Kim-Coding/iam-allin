import { GoogleLogin } from "react-google-login";

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

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="구글로그인"
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}

export default GoogleLoginBtn;
