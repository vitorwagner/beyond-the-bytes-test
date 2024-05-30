const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <span className="text-sm font-semibold leading-6 text-gray-400 p-2">
        {new Date().getFullYear()} Developed by Vítor Magalhães Wagner
      </span>
      <a href="https://github.com/vitorwagner" className="text-blue-400 hover:text-blue-500 mx-2">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/vitorwagner/" className="text-blue-400 hover:text-blue-500 mx-2">
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
