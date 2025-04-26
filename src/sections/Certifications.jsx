import { useState } from 'react';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certs = [
    {
      title: 'cloud computing',
      image: '/assets/Nptel.png',
      issuer: 'Nptel',
    },
    {
      title: 'Figma',
      image: '/assets/Figma.png',
      issuer: 'HRD-LPU',
    },
    {
      title: 'Node.js',
      image: '/assets/nodejss.png',
      issuer: 'HRD-LPU',
    },
    {
      title: 'FullStack-Devlopment',
      image: '/assets/fullstack.png',
      issuer: 'Cipher-Schools',
    },
  ];

  return (
    <section className="py-20 px-5 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">My Certifications</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {certs.map((cert, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-6 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(cert.image)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-contain rounded-lg mb-4 bg-white p-2"
            />
            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <p className="text-gray-400">{cert.issuer}</p>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certification Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;
