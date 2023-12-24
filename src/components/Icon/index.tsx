import {CSSProperties} from "react";

export function IconsCollection() {
  /*
   * Icons here
   * I take icons from iconmonstr.com, but you can them from anywhere (for example: svgrepo.com) 
   */

  return (
    <svg
      viewBox="0 0 24 24"
      style={{display: "none"}}
    >

    </svg>
  );
}

export default function Icon(props: {
  icon: string, style?: CSSProperties
}) {
  // Render
  return (<svg
    viewBox="0 0 24 24"
    className="Icon"
    style={props.style}
  >
    <use xlinkHref={`#${props.icon}`} />
  </svg>);
}
