// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} PT Polaris Dana Investment. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;