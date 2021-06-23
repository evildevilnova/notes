import React from 'react';

const Header = () => {
    const year = new Date().getFullYear();

  return(
    <>
        <footer className="text-center text-white" style={{backgroundColor: "#343A40"}}>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © {year} Copyright:
            <a className="text-white" href="#"> Nishant Notes</a>
            </div>
        </footer>
    </>
  );
};

export default Header;
