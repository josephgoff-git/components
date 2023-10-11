// SimpleExample.js

import React from 'react';

// URL for the image
const MNMLogo = 'http://www.mercurynewmedia.com/images/default-source/logos/mercury-logo-circle-201x201.png';

class SimpleExample extends React.Component {
  render() {
    return (
      <div>
        <h1>A Simple React Component Example</h1>
        <div className="form-group">
          <img src={MNMLogo} alt="MNM Logo" />
        </div>
        <div className="form-group">
          <label htmlFor="simpleInput">Simple Label</label>
          <input type="text" className="form-control" id="simpleInput" />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary" disabled={true}>
            Submit
          </button>
        </div>
        <p
          className="help-block"
          dangerouslySetInnerHTML={{
            __html: 'I\'m some <span class="text-danger">dangerous</span> helper text.'
          }}
        />
      </div>
    );
  }
}

export default SimpleExample;
