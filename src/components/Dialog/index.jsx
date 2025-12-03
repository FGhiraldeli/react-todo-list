import React from "react";
import './dialog.style.css'

export function Dialog() {
    //não deveríamos fazer buscas no DOM desse jeito!
    //const dialog = document.querySelector("dialog");
  

    // "Show the dialog" button opens the dialog modally
    const openDialog = () => {
        dialog.showModal();
    };

    // "Close" button closes the dialog
    const closeDialog = () => {
        dialog.close();
    };
    return (
        <>
            <dialog>
                <button autoFocus onClick={closeDialog}>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button onClick={openDialog}>Show the dialog</button>
        </>
    )
}