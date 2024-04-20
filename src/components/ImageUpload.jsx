import { useState } from 'react';

function ImageUpload() {
  // eslint-disable-next-line no-unused-vars
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleImageChange = (event) => {
    const newFiles = Array.from(event.target.files); // Convert FileList to Array
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    const validFiles = newFiles.filter(file => allowedTypes.includes(file.type));

    setPreviews(prevPreviews => [
      ...prevPreviews,
      ...validFiles.map(file => URL.createObjectURL(file))
    ]);
    setFiles(prevFiles => [...prevFiles, ...validFiles]);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} multiple />
      <div> {/* Display the image previews */}
        {previews.map((preview, index) => (
          <img src={preview} alt="Uploaded preview" key={index} />
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
