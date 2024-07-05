import React, { useRef, useEffect, useState } from "react";
import Chat from "./Chat";

export default function Prompt(props) {
  const onClose = props.onClose || null;
  const modalRef = useRef();
  const selectedText = props.selectedText || "";
  const [status, setStatus] = useState("entering");

  useEffect(() => {
    const timer = setTimeout(() => setStatus("entered"), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={modalRef}>
      <Chat selectedText={selectedText} className={` f-modal-entered`} />
    </div>
  );
}
