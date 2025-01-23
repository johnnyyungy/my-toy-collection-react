import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="socialmedia">
        <a href="">
          <img src="images/instagram.png" width="35" height="35" alt="Instagram" />
        </a>
        <a href="">
          <img src="images/x.png" width="35" height="35" alt="Twitter" />
        </a>
        <a href="">
          <img src="images/youtube.png" width="35" height="35" alt="YouTube" />
        </a>
        <a href="">
          <img src="images/facebook.png" width="35" height="35" alt="Facebook" />
        </a>
      </div>
      <div className="copyright">
        All work &copy; John Yung 2019 - 2025 - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;