import { User } from "../models/User.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    selectedSecurityQuestion,
    termsAccepted,
    securityAnswers
  } = req.body;
  try {
    //Alternativa buscando por email
    let user = "";

    user = await User.findOne({ email });
    if (user) throw { code: 11000 };
    user = new User({
      firstName,
      lastName,
      email,
      password,
      selectedSecurityQuestion,
      termsAccepted,
      securityAnswers
    });

    await user.save();
    return res.status(201).json({ msg: "User Created" });
  } catch (error) {
    //Alternativa por defecto mongoose
    if (error.code === 11000) {
      return res.status(400).json({ error: "User is already registered!" });
    }
    return res.status(500).json({ error: "Server error!" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = "";

    user = await User.findOne({ email });

    if (!user) {
      return res
        .status(403)
        .json({ error: "Please, verify your credentials." });
    }

    const respuestaPassword = await user.comparePassword(password);
    if (!respuestaPassword) {
      return res.status(403).json({ error: "Please, verify credentials." });
    }

    return res
      .status(200)
      .json({ msg: "OK", name: user.firstName, last: user.lastName });
  } catch (error) {
    return res.status(500).json({ error: "Server error!" });
  }
};

export const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    let user = "";

    user = await User.findOne({ email });
    if (user) {
      await User.deleteOne(user);
      return res.status(200).json({ message: "User succesfully deleted!" });
    } else {
      return res.status(404).json({ error: "User not found!" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Server Error!" });
  }
};

export const updateUserInfo = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    newEmail,
    password,
    newPassw,
    repeatPassw,
    securityAnswers
  } = req.body;
  try {
    let user = "";
    user = await User.findOne({ email });

    if (user && !password && !repeatPassw && !newPassw && !securityAnswers) {
      await User.updateOne(
        { email },
        { $set: { firstName: firstName, lastName: lastName, email: newEmail } }
      );
      return res.status(200).json({ msg: "User information updated!" });
    } else if (user && password && !securityAnswers) {
      const respuestaPassword = await user.comparePassword(password);
      if (!respuestaPassword) {
        return res
          .status(403)
          .json({ errorPassw: "Please, verify your password." });
      }
      if (!newPassw || !repeatPassw) {
        return res.status(403).json({ errorNewPassw: "Required field" });
      }
      if (newPassw != repeatPassw) {
        return res
          .status(403)
          .json({ errorNewPassw: "Passwords do not match" });
      }
      const salt = await bcryptjs.genSalt(10);
      user.password = await bcryptjs.hash(newPassw, salt);

      await User.updateOne({ email }, { $set: { password: user.password } });
      return res.status(200).json({ msg: "User password updated!" });
    } else if (user && !password && securityAnswers) {
      if (securityAnswers !== user.securityAnswers) {
        return res
          .status(403)
          .json({ errorAnswer: "Incorrect answer" });
      }
      if (newPassw != repeatPassw) {
        return res
          .status(403)
          .json({ errorNewPassw: "Passwords do not match" });
      }
      const salt = await bcryptjs.genSalt(10);
      user.password = await bcryptjs.hash(newPassw, salt);

      await User.updateOne({ email }, { $set: { password: user.password } });
      return res.status(200).json({ msg: "User password updated!" });
    } else {
      return res.status(404).json({ error: "Sorry, something was wrong!" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Server Error!" });
  }
};

export const getUserSecQuestion = async (req, res) => {
  try {
    const email  = req.params.email;
    let user = '';
    user = await User.findOne({email})
    if(user){
      return res.status(200).json({ msg: "OK", selectedSecurityQuestion: user.selectedSecurityQuestion});
    } else {
      return res.status(404).json({ error: "User not found!" });
    }
  } catch (error) {
    return res.status(500).json({error: "Server error!"});
  }
};