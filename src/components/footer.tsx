import React from "react";

function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <a href="#" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Terms of Use
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Templates</h3>
          <a href="#" className="text-gray-300 hover:text-white">
            Template A
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Template B
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Template C
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
