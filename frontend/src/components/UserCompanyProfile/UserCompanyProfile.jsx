import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { editMyCompanyDataService } from "../../services";

const EditCompanyProfile = ({ id }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { user, token } = useContext(AuthContext);

  const [name, setName] = useState(`${user.user.firstName}`);
  const [country, setCountry] = useState(`${user.user.country}`);
  const [city, setCity] = useState(`${user.user.city}`);
  const [bio, setBio] = useState(`${user.user.bio}`);
  const [photo, setPhoto] = useState(`${user.user.photo}`);

  const handleForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    editMyCompanyDataService(data, token, id);
  };
  return (
    <>
      <form className="userProfile" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            value={name}
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="country">country</label>
          <input
            type="country"
            name="country"
            value={country}
            id="country"
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlFor="city">city</label>
          <input
            type="city"
            name="city"
            value={city}
            id="city"
            required
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="bio">Bio</label>
          <input
            type="bio"
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

export default EditCompanyProfile;
