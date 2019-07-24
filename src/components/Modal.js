import React from "react";

/**
 * A simple modal. Used to show stuff in a modal way.
 * It can be dismiss by clicking the background or a
 * big, fat button at the bottom.
 * The content should be passed as a children node.
 * @todo Support passing actions (buttons) to show at the footer
 *       like delete, edit, share,...
 * @param {bool} isOpen - Open or close the modal
 * @param {*} children - Things to show inside
 * @param {function} onClose - Callback executed when we need to close the modal
 */
function Modal({ isOpen = true, children, onClose = () => {} }) {
  return (
    <div className={"Modal" + (isOpen ? " is-open" : "")} onClick={onClose}>
      <div className="content" onClick={e => e.stopPropagation()}>
        {children}
        <div className="footer">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
