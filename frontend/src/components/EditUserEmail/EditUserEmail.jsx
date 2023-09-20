import { useContext, useState } from "react";
import Accordion from "../Accordion/Accordion";
import { AuthContext } from "../../context/AuthContext";
import { editEmailService } from "../../services";

const EditUserEmail = () => {
  const [newEmail, setNewEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { user, token, logout } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = { oldPass, newEmail };
      const dataToSend = JSON.stringify(data);
      await editEmailService(dataToSend, token);
      setLoading(false);
      logout();
    } catch (err) {
      setError("An error has occurred in the email change");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <p>{user && user.user.email}</p>
      <Accordion>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newEmail">
            Nuevo email
            <input
              type="text"
              name="newEmail"
              id="newEmail"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="oldPass">
            Contraseña
            <input
              type={showPassword ? "text" : "password"}
              name="oldPass"
              id="oldPass"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              👁️
            </button>
          </label>
          <button type="submit">Save Changes</button>
        </form>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
      </Accordion>
    </>
  );
};

export default EditUserEmail;
