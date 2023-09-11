import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { editMyCompanyDataService } from "../../services";
import useCompany from "../../hooks/useCompany";

const EditCompanyProfile = ({ id }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { companyData } = useCompany(id);
  const { token } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (companyData) {
      setName(companyData.name);
      setCountry(companyData.country);
      setCity(companyData.city);
      setBio(companyData.bio);
      setPhoto(companyData.photo);
    }
  }, [companyData]);

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
            type="text"
            name="name"
            value={name}
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="country">country</label>
          <input
            type="text"
            name="country"
            value={country}
            id="country"
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlFor="city">city</label>
          <input
            type="text"
            name="city"
            value={city}
            id="city"
            required
            onChange={(e) => setCity(e.target.value)}
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
                src={`${backendUrl}/backend/uploads/${companyData?.photo}`}
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
