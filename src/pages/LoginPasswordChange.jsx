import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Swal from 'sweetalert2';

export function LoginPasswordChange() {
  const navigate = useNavigate();

  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [securityAnswerError, setSecurityAnswerError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handlePasswordChange = async () => {
    setSecurityAnswerError("");
    setNewPasswordError("");
    setConfirmPasswordError("");

    if (!securityAnswer && !newPassword && !confirmPassword){
      setSecurityAnswerError('Required field');
      setNewPasswordError('Required field');
      setConfirmPasswordError('Required field');
      return;
    } else if (!securityAnswer && newPassword && !confirmPassword){
      setSecurityAnswerError('Required field');
      setConfirmPasswordError('Required field');
      if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(newPassword)) {
        setNewPasswordError('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number');
      }
      return;
    } else if (securityAnswer && !newPassword && !confirmPassword){
      setNewPasswordError('Required field');
      setConfirmPasswordError('Required field');
      return;
    } else if (!securityAnswer && !newPassword && confirmPassword){
      setSecurityAnswerError('Required field');
      setNewPasswordError('Required field');
      return;
    } else if (!securityAnswer && newPassword && confirmPassword){
      setSecurityAnswerError('Required field');
      if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(newPassword)) {
        setNewPasswordError('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number');
      }
      if (newPassword !== confirmPassword){
        setConfirmPasswordError('Password do not match');
      }
      return;
    } else if (securityAnswer && !newPassword && confirmPassword){
      setNewPasswordError('Required field');
      return;
    } else if (securityAnswer && newPassword && !confirmPassword){
      setConfirmPasswordError('Required field');
      if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(newPassword)) {
        setNewPasswordError('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number');
      }
      return;
    }

    if (newPassword !== confirmPassword){
      setConfirmPasswordError('Password do not match');
      return;
    }

    if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(newPassword) && newPassword) {
      setNewPasswordError('Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one special character, and one number');
      return;
    }

    try {
      const response = await fetch('https://eventpass-server.vercel.app/auth/updateUserInfo', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: "",
          lastName: "",
          email: localStorage.getItem('email'),
          newEmail: "",
          password: "",
          newPassw: newPassword,
          repeatPassw: confirmPassword,
          securityAnswers: securityAnswer
        }),
      });
      const data = await response.json();

      if (data.errorPassw) {
        Swal.fire({
          title: 'Error',
          text: 'Please, verify your password.',
          icon: 'error',
          confirmButtonText: 'Close'
        });
      }

      if (data.errorAnswer) {
        Swal.fire({
          title: 'Error',
          text: 'Please, verify the information provided.',
          icon: 'error',
          confirmButtonText: 'Close'
        });
      }

      if (data.msg) {
        Swal.fire({
          title: 'Saved!',
          text: 'Your password has been updated.',
          icon: 'success',
          confirmButtonText: 'Accept'
        }).then(function(){navigate("/login")});
        localStorage.clear()
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
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
            <label
              className="mx-3 input-form mb-0"
            >
              {localStorage.getItem('selectedSecurityQuestion')}
            </label>
          </label>
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