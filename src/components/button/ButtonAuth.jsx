import "./style.scss";

const ButtonAuth = (props) => {
  return (
    <div className="google-btn" {...props}>
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className="btn-text">
        <b>Sign in with google</b>
      </p>
    </div>
  );
};

export default ButtonAuth;
