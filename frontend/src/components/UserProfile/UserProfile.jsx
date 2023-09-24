import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { editMyDataService } from "../../services";

const UserProfile = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { user, token } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState(null); //
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [previewphotoUrl, setPreviewPhotoUrl] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user?.user[0]?.firstName || user?.user?.firstName);
      setLastName(user?.user[0]?.lastName || user?.user?.lastName);
      setBio(`${user?.user[0]?.bio || user?.user?.bio || ""}`);
      setPhoto(`${user?.user[0]?.photo || user?.user?.photo || ""}`);
      setPhotoUrl(`${backendUrl}/${user?.user[0].photo}`);
    }
  }, [user, backendUrl]);

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const data = new FormData();
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("bio", bio);
      if (photo) {
        data.append("photo", photo);
      }
      await editMyDataService(data, token);
      setResponse("Your data has been successfully modified");
      setPreviewPhotoUrl(null);
      setLoading(false);

      if (photo) {
        setPhotoUrl(URL.createObjectURL(photo));
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <>
      <img src={`${photoUrl}`} style={{ width: "100px" }} alt="img profile" />
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
            onChange={(e) => {
              setPhoto(e.target.files[0]);
              setPreviewPhotoUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
          {previewphotoUrl ? (
            <figure>
              <img
                src={`${previewphotoUrl}`}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <button>Submit</button>
      </form>
      {response && <p>{response}</p>}
      {error ? <p>{error}</p> : null}
      {loading ? <p>loading...</p> : null}
    </>
  );
};

export default UserProfile;
