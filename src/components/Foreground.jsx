import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "If you are able to click, you can download it.",
      filesize: ".4mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"},
    },

    {
      desc: "You can upload your secrets in this document.! We keep it encrypted.",
      filesize: "2.9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"},
    },

    {
      desc: "This docs card aren't donwloadable but you can try to click.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },

  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
      <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
