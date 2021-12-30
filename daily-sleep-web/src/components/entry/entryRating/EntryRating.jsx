import "./entryRating.css";
import { useState, useEffect } from "react";
import Star from "./star.png";

const EntryRating = ({ setRating, setRated }) => {
  const [stars, setStars] = useState(0);
  const [starsCSS, setStarsCSS] = useState([
    "starOff",
    "starOff",
    "starOff",
    "starOff",
    "starOff",
  ]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const today = new Date(Date.now());
    setCurrent(
      today.getDate() +
        "/" +
        today.getMonth() +
        "/" +
        today.getFullYear() +
        " @ " +
        today.getHours() +
        ":" +
        ("0" + today.getMinutes()).slice(-2)
    );
  }, []);

  const handleMouseOver = (e) => {
    const value = e.target.id === "" ? 0 : e.target.id;
    if (value === 0) {
      setStarsCSS(["starOff", "starOff", "starOff", "starOff", "starOff"]);
    } else {
      const newCSS = starsCSS.map((cssValue, index) => {
        if (index <= value - 1) return "starOn";
        else return "starOff";
      });
      setStarsCSS(newCSS);
    }
    setRated(true);
    setRating(value);
    setStars(value);
  };

  const handleOver = (e) => {
    console.log(`e.target.id`, e.target.id);
    if (stars === 0) {
      const value = e.target.id === "" ? 0 : e.target.id;
      if (value === 0) {
        setStarsCSS(["starOff", "starOff", "starOff", "starOff", "starOff"]);
      } else {
        const newCSS = starsCSS.map((cssValue, index) => {
          if (index <= value - 1) return "starOn";
          else return "starOff";
        });
        setStarsCSS(newCSS);
      }
    }
  };

  return (
    <div className="em-rating-main" onMouseOut={handleOver}>
      <h2 className="em-rating-title">Wake up</h2>
      <h3 className="em-rating-time">{current}</h3>
      <div className="star-list" id="20">
        <div
          className={`${starsCSS[0]} star`}
          onMouseOver={handleOver}
          onClick={handleMouseOver}
        >
          <img id="1" src={Star} alt="" className="star-img" />
        </div>
        <div
          className={`${starsCSS[1]} star`}
          onMouseOver={handleOver}
          onClick={handleMouseOver}
        >
          <img id="2" src={Star} alt="" className="star-img" />
        </div>
        <div
          className={`${starsCSS[2]} star`}
          onMouseOver={handleOver}
          onClick={handleMouseOver}
        >
          <img id="3" src={Star} alt="" className="star-img" />
        </div>
        <div
          className={`${starsCSS[3]} star`}
          onMouseOver={handleOver}
          onClick={handleMouseOver}
        >
          <img id="4" src={Star} alt="" className="star-img" />
        </div>
        <div
          className={`${starsCSS[4]} star`}
          onMouseOver={handleOver}
          onClick={handleMouseOver}
        >
          <img id="5" src={Star} alt="" className="star-img" />
        </div>
      </div>
    </div>
  );
};

export default EntryRating;
