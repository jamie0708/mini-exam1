import React from "react";
import modal from 'react-modal'

function Modal() {
  return (
    <div className="modal" id="exampleModal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create an account</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;