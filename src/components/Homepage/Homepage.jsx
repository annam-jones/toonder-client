import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import styles from "./homepage.module.css";

export default function Homepage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className={styles.homepage}>
      <img className="logo" src="https://res.cloudinary.com/dq9lsxbkh/image/upload/v1739525778/logo_rlymnr.png" alt="Toonder Logo" />
      <div className={styles.content}>
        {!user && (
          <>
            <p className={styles.message}>💕 Your fairytale journey awaits you! 💕</p>
            <button className={styles.signupButton} onClick={() => navigate("/signup")}>Sign Up</button> 
          </>
        )}
      </div>
    </div>
  );
}
