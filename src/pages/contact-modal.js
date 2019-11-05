import React from "react";

const ContactModal = props => {
  const onClose = e => {
    props.onClose(false);
  };
  if (props.show) {
    return (
      <div className="contact-modal">
        <h2>Message Sent!</h2>
        <p>We Will Contact You Soon!</p>
        <button onClick={e => onClose()}>Close</button>
      </div>
    );
  } else {
    return null;
  }
};
export default ContactModal;
