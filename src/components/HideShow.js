import React, { useState, useCallback } from "react";
// import { Link } from 'react-router-dom';

const HideShow = () => {
  const useToggle = (initailState = true) => {
    const [state, setState] = useState(initailState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
  };
  const [toggle, setToggle] = useToggle();
  return (
    <>
      <button onClick={setToggle} className="btn btn-primary">
        Toggle State
      </button>

      {toggle && (
        <div className="container">
          <div className="py-4">
            <h3>About Page 1</h3>
            <p>
              A paragraph is a series of related sentences developing a central
              idea, called the topic. Try to think about paragraphs in terms of
              thematic unity: a paragraph is a sentence or a group of sentences
              that supports one central, unified idea. Paragraphs add one idea
              at a time to your broader argument.
            </p>

            <h3>About Page 2</h3>
            <p>
              A paragraph is a series of related sentences developing a central
              idea, called the topic. Try to think about paragraphs in terms of
              thematic unity: a paragraph is a sentence or a group of sentences
              that supports one central, unified idea. Paragraphs add one idea
              at a time to your broader argument.
            </p>

            <h3>About Page 3</h3>
            <p>
              A paragraph is a series of related sentences developing a central
              idea, called the topic. Try to think about paragraphs in terms of
              thematic unity: a paragraph is a sentence or a group of sentences
              that supports one central, unified idea. Paragraphs add one idea
              at a time to your broader argument.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HideShow;
