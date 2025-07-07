function Header() {
  return (
    <div className="w-full py-4 px-8 font-sans">
      <ul className="flex items-center justify-between">
        <li className="font-bold px-4">Logo</li>
        <div className="flex space-x-6">
          <li>
            <a
              href="mailto:yuktaabande@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/yukta-bande/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yuktabande"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Sq59mTbOOmV6JIpyWQk9p5eSZZyg8doH/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Resume
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
