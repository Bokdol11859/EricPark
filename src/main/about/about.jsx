import { useEffect, useState } from "react";
import "./about.scss";

function About() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
    console.log(window.scrollY, window.screen.availHeight);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });
  return (
    <>
      <div
        className="AboutMe"
        style={
          window.scrollY < window.screen.height / 2 - 30
            ? {
                transform: `translateX(calc(-370px + ${window.scrollY}px)`,
              }
            : {
                transform: `translateX(50)`,
              }
        }
      >
        <h1 className="AboutMeTitle">About Me</h1>
        <h1 className="AboutMeName">박준열 | Eric Park</h1>

        <p>
          <span style={{ textDecoration: "underline dotted" }}>
            연세대학교 컴퓨터과학과
          </span>{" "}
          | 2020 ~{" "}
        </p>
        <p>
          프론트엔드 개발자 @{" "}
          <span style={{ textDecoration: "underline dotted" }}>CEOS</span>
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <span style={{ display: "none" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </span>
    </>
  );
}

export default About;
