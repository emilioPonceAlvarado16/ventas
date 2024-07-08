import React, { useRef, useEffect, useState } from "react";
import Chat from "./Chat";

export default function Prompt(props) {
  const modalRef = useRef();
  const setVisualizePrompt=props.setVisualizePrompt || null
  const visualizePrompt=props.visualizePrompt || null
  const selectedText = props.selectedText || "";

  return (
    <div ref={modalRef}>
      <Chat selectedText={selectedText} setVisualizePrompt={setVisualizePrompt} visualizePrompt={visualizePrompt} className={` f-modal-entered`} />
    </div>
  );
}
