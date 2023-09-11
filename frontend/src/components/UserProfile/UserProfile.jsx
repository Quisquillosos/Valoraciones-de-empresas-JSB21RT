import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { editMyDataService } from "../../services";

const UserProfile = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { user, token } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.user[0].firstName);
      setLastName(user.user[0].lastName);
      setBio(`${user.user[0].bio || ""}`);
      setPhoto(`${user.user[0].photo || ""}`);
    }
  }, [user]);

  const handleForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    editMyDataService(data, token);
  };
  return (
    <>
      <form className="userProfile" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            id="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastName">LastName</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            id="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            value={bio}
            id="bio"
            required
            onChange={(e) => setBio(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="image">Photo</label>
          <input
            type="file"
            name="image"
            id="image"
            accept={"image/*"}
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          {photo ? (
            <figure>
              <img
                src={`${backendUrl}/backend/uploads/${user?.user?.photo}`}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  );
};

export default UserProfile;
