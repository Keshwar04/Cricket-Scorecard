import { useEffect } from "react";
import eyeOpen from "../assets/eye-open.png";
import eyeClose from "../assets/eye-close.png";
import pwdInfo from "../assets/pwd-info.png";
import { validator } from "../service/validation";
import { usePreLoginStore } from "../store/zustand/preLogin";
import Button from "./button";
import "../css/components/inputControl.css";
import PasswordInstruction from "./passwordInstruction";
import { firebaseGetData, firebasePostData } from "../service/firebase";
import { useNavigate } from "react-router-dom";
import { credentialOrErrorType, eventType } from "../type/prelogin";

const InputControl = ({ isSignup }: { isSignup?: boolean }) => {
  const {
    errors,
    isboolean,
    userCredntial,
    active,
    setActive,
    setIsBoolean,
    setErrors,
    setUserCredential,
  } = usePreLoginStore();

  const naviagte = useNavigate();

  useEffect(() => {
    if (active === "login") {
      setUserCredential({ login: {} });
    } else {
      setUserCredential({ signup: {} });
    }
  }, []);

  const fieldSate = active === "login" ? "login" : "signup";

  const handleClick = async () => {
    const error = validator(userCredntial[fieldSate], fieldSate);
    const errStr = Object.values(error).join("");
    const usersCredentials = {
      ...userCredntial[fieldSate],
      pwd: btoa(userCredntial[fieldSate].pwd),
      signUpTime: new Date().toLocaleString(),
    };
    if (errStr) {
      setErrors({ [fieldSate]: error });
    } else if (fieldSate === "signup") {
      setErrors({});
      setUserCredential({});
      alert("successfully signedup");
      setActive("login");
      firebasePostData("users-manual-credentials", usersCredentials);
    } else {
      loginResponseValidation();
    }
  };

  const handleChange = (e: eventType) => {
    const { name, value } = e.target;
    setUserCredential({
      [fieldSate]: { ...userCredntial[fieldSate], [name]: value },
    });
  };

  const props = {
    width: "w-100",
    handleClick: handleClick,
    title: isSignup ? "SIGNUP" : "LOGIN",
    activeTitle: true,
  };

  const loginResponseValidation = async () => {
    const result = await firebaseGetData("users-manual-credentials");
    const pwdDeocoded = result.map((e: any) => ({ ...e, pwd: atob(e.pwd) }));
    const user = {
      mail: userCredntial[fieldSate].mail,
      pwd: userCredntial[fieldSate].pwd,
    };
    const getUser = pwdDeocoded.find((e: { mail: string }) =>
      e.mail.toLocaleLowerCase().includes(user.mail.toLocaleLowerCase())
    );
    const checkMail =
      getUser?.mail.toLocaleLowerCase() === user.mail.toLocaleLowerCase();
    const checkPwd = getUser?.pwd === user.pwd;

    const error = {} as credentialOrErrorType;
    if (!checkMail) {
      error.mail = "Invalid Mail";
    } else if (!checkPwd) {
      error.pwd = "Invalid Password";
    } else {
      localStorage.setItem("islogin", "true");
      naviagte("/home");
    }
    setErrors({ [fieldSate]: { pwd: error.pwd, mail: error.mail } });
  };

  return (
    <div>
      {isSignup && (
        <>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
              value={userCredntial[fieldSate]?.name || ""}
            />
          </div>
          <p className="mb-2 pwd-txt">{errors[fieldSate]?.name}</p>
        </>
      )}
      <div className={`${!isSignup && "mt-3"}`}>
        <input
          type="email"
          className="form-control"
          name="mail"
          placeholder="Enter email"
          onChange={handleChange}
          value={userCredntial[fieldSate]?.mail || ""}
        />
      </div>
      <p className="mb-2 pwd-txt">{errors[fieldSate]?.mail}</p>
      <div className="position-relative">
        <input
          type={!isboolean.pwdIconShow ? "password" : "text"}
          className="form-control"
          name="pwd"
          placeholder="Enter password"
          onChange={handleChange}
          value={userCredntial[fieldSate]?.pwd || ""}
        />
        <div
          className="position-absolute h-100 d-flex align-items-center justify-content-center top-0"
          style={{ width: "15px", right: "4%" }}
        >
          <img
            style={{ cursor: "pointer" }}
            src={!isboolean.pwdIconShow ? eyeClose : eyeOpen}
            className="img-fluid"
            onClick={() =>
              setIsBoolean({ pwdIconShow: !isboolean.pwdIconShow })
            }
          />
        </div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div>
          <p className=" pwd-txt mb-0">
            {errors[fieldSate]?.pwd === "update"
              ? "Enter valid password format"
              : errors[fieldSate]?.pwd}
          </p>
        </div>
        {errors[fieldSate]?.pwd === "update" && (
          <>
            <div
              className="pwd-img-container d-flex align-items-start ms-1"
              onClick={() => setIsBoolean({ pwdInfoShow: true })}
            >
              <img src={pwdInfo} className="img-fluid" />
            </div>
          </>
        )}
        {isboolean.pwdInfoShow && <PasswordInstruction />}
      </div>
      <Button {...props} />
    </div>
  );
};

export default InputControl;
