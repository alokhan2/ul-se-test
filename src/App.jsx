import React, { useState } from "react";
import "./App.css";
// import logo from "./assets/img/logo.svg";
import Modal from "./components/Modal";
import Form from "./components/Form";

const App = () => {
  const [link, setLink] = useState("");

  const generateLink = () => {
    // Logic to generate a link dynamically
    const newLink = `https://example.com/resource/${Math.random().toString(36).substring(7)}`;
    setLink(newLink);
  };

  return (
    <>
      <div className="App">
        <aside className="sidebar">
          <div className="logo">
            <img src="logo.svg" alt="" />
          </div>
          <div className="chat-button">
            <div className="btn">+ New Research Topic</div>
          </div>
          <div className="current-topic">
            <div className="current-topic-label">Current Research Topic</div>
            <div className="current-topic-title">Battery Technology</div>
          </div>
          <div className="previous-topic">
            <div className="previous-topic-label">Previous Research Topics</div>
            <div className="previous-chats">
              <div className="previous-topic-title">Topic 1</div>
              <div className="previous-topic-title">Topic 2</div>
              <div className="previous-topic-title">Topic 3</div>
            </div>
          </div>
        </aside>
        <div className="main">
          <nav className="header">Market Sensing Tool</nav>
          <div className="chats">
            <div className="chat">
              <img src="user.png" alt="" className="chat-icon" />
              <div className="user-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde tenetur ab in quasi perspiciatis necessitatibus amet ipsum commodi quis!</div>
            </div>
            <div className="chat bot">
              <img src="bot.png" alt="" className="chat-icon" />
              <div className="user-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nulla consequuntur molestiae molestias maxime vel aliquid ullam quisquam veritatis officiis assumenda aut qui laboriosam nobis, ab voluptas quos. Ipsam ex quas
                nobis dolorem. Ab, ratione cum veniam est, eveniet laboriosam placeat saepe debitis, reprehenderit numquam repellat odit porro? Mollitia, necessitatibus placeat sapiente consectetur quasi perspiciatis saepe voluptates et beatae rerum
                nesciunt omnis?mollitia iusto, impedit repellendus ad, animi quidemenderit ipsum error? Incidunt molestiae hic voluptates reicinissimos aspernatur tempore, maiores mollitia iusto, impedit repellendus ad, animi quidem.
              </div>
            </div>
            <div className="chat">
              <img src="user.png" alt="" className="chat-icon" />
              <div className="user-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde tenetur ab in quasi perspiciatis necessitatibus amet ipsum commodi quis!</div>
            </div>
            <div className="chat bot">
              <img src="bot.png" alt="" className="chat-icon" />
              <div className="user-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nulla consequuntur molestiae molestias maxime vel aliquid ullam quisquam veritatis officiis assumenda aut qui laboriosam nobis, ab voluptas quos. Ipsam ex quas
                nobis dolorem. Ab, ratione cum veniam est, eveniet laboriosam placeat saepe debitis, reprehenderit numquam repellat odit porro? Mollitia, necessitatibus placeat sapiente consectetur quasi perspiciatis saepe voluptates et beatae rerum
                nesciunt omnis?mollitia iusto, impedit repellendus ad, animi quidemenderit ipsum error? Incidunt molestiae hic voluptates reicinissimos aspernatur tempore, maiores mollitia iusto, impedit repellendus ad, animi quidem.
              </div>
            </div>
          </div>
          <div className="chat-footer">
            <div className="inp">
              <input type="text" />
              <button>Send</button>
            </div>
          </div>
        </div>
        <button onClick={generateLink}>Generate Link</button>
      {link && (
        <p>
          Your link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </p>
      )}

        <Modal />
        <Form />
      </div>
    </>
  );
};

export default App;
