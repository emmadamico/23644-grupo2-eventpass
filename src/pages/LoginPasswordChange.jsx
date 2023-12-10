import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function LoginPasswordChange() {
  const navigate = useNavigate();
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const [securityQuestionError, setSecurityQuestionError] = useState("");
  const [securityAnswerError, setSecurityAnswerError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handlePasswordChange = async () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  return (
    <>
      <MyNavbar />

      <div className="form-container d-flex flex-column justify-content-center align-items-center mt-5">
      <h2 className="title-register versalita text-center mt-4 text-white">Recover your password</h2>
      
    <section className="d-flex flex-column justify-content-center align-items-center glass-bg p-5 mt-4 rounded-5">
      <form className="d-flex flex-column justify-content-center align-items-end p-3 user-form mt-3 mb-5">
        <div className="form-item">
          <label>
            Security Question:
            <select
              className="mx-3 border-0 input-form"
              value={securityQuestion}
              onChange={(e) => setSecurityQuestion(e.target.value)}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="color">What's your favorite color?</option>
              <option value="animal">What is your pet's name?</option>
            </select>
          </label>
          {securityQuestionError && (
            <p className="error-message">{securityQuestionError}</p>
          )}
        </div>
        <div className="form-item mt-3">
          <label>
            Security Answer:
            <input
              className="mx-3 border-0 input-form"
              type="text"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              placeholder="Enter your security answer"
            />
          </label>
          {securityAnswerError && (
            <p className="error-message">{securityAnswerError}</p>
          )}
        </div>
        <div className="form-item mt-3">
          <label>
            New Password:
            <input
              className="mx-3 border-0 input-form"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
            />
          </label>
          {newPasswordError && (
            <p className="error-message">{newPasswordError}</p>
          )}
        </div>
        <div className="form-item mt-3">
          <label>
            Confirm Password:
            <input
              className="mx-3 border-0 input-form"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
            />
          </label>
          {confirmPasswordError && (
            <p className="error-message">{confirmPasswordError}</p>
          )}
        </div>
        <div className="btn mt-3">
          {/* Agrega un enlace si necesitas volver al login o a otra página */}
          <Link to="/login" className="cancel-btn">
            Cancel
          </Link>
          <button
            className="save-btn"
            type="button"
            onClick={handlePasswordChange}
          >
            Change Password
          </button>
        </div>
      </form>
      
    </section>
    </div>
    <Footer />
    </>
  );
}