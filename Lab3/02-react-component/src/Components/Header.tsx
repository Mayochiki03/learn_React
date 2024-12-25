function Header() {
    return (
      <>
          <header className="bg-black text-white py-4 shadow-md">
              <div className="container mx-auto flex justify-between items-center px-4">
                  <div className="text-2xl font-bold">ComSci Book Shop</div>
                  <nav>
                  <ul className="flex space-x-4">
                      <li><a href="#" className="hover:text-blue-200">Home</a></li>
                      <li><a href="#" className="hover:text-blue-200">About</a></li>
                      <li><a href="#" className="hover:text-blue-200">Contact</a></li>
                  </ul>
                  </nav>
              </div>
          </header>
      </>
    );
  };
  
  export default Header;