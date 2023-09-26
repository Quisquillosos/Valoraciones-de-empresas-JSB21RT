import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { editMyCompanyDataService } from "../../services";
import useCompany from "../../hooks/useCompany";
import { editMyCompanies } from "./EditCompanyProfile.module.css";
import Button from "../Button/Button";

const EditCompanyProfile = ({ id }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { companyData } = useCompany(id);
  const { token } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [previewPhotoUrl, setPreviewPhotoUrl] = useState("");

  useEffect(() => {
    if (companyData) {
      setName(companyData.name);
      setCountry(companyData.country);
      setCity(companyData.city);
      setBio(companyData.bio);
      setPhoto(companyData.photo);
      setPhotoUrl(`${backendUrl}/${companyData?.photo}`);
    }
  }, [companyData, backendUrl]);

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const data = new FormData();
      data.append("name", name);
      data.append("country", country);
      data.append("city", city);
      data.append("bio", bio);
      data.append("photo", photo);
      if (photo) {
        setPhotoUrl(URL.createObjectURL(photo));
      }
      await editMyCompanyDataService(data, token, id);
      setPreviewPhotoUrl(null);
      setResponse("Your data has been successfully modified");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <main className={`${editMyCompanies}`}>
      <h3>Edit company</h3>
      <form className="userProfile" onSubmit={handleForm}>
        <fieldset>
          <img
            src={`${photoUrl}`}
            style={{ width: "100px" }}
            alt="company img"
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            value={country}
            id="country"
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={city}
            id="city"
            required
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="bio">Bio</label>
          <textarea
            rows={5}
            type="text"
            name="bio"
            value={bio}
            id="bio"
            required
            onChange={(e) => setBio(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="image">
            <p>Upload your image</p>
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
          </label>
          {previewPhotoUrl ? (
            <figure>
              <img
                src={`${previewPhotoUrl}`}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <Button>Submit</Button>
      </form>
      {response && <p>{response}</p>}
      {error ? <p>{error}</p> : null}
      {loading ? <p>loading...</p> : null}
    </main>
  );
};

export default EditCompanyProfile;
