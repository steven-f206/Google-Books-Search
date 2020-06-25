import React from 'react';

function Footer() {

// Sets year in footer copyright
let year = new Date().getFullYear();

  return(
    <React.Fragment>
      <footer>
        <p id="copyright">Copyright © Andy Durette {year}</p>
      </footer>
    </React.Fragment>
  );
}

export default Footer