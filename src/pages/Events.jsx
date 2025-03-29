import React,{useState, useEffect} from "react";
import "../styles/Events.css";
import events1Img from "../assets/images/events-1.jpg";
import events2Img from "../assets/images/events-2.jpg";
import events3Img from "../assets/images/events-3.jpg";
import events4Img from "../assets/images/events-4.jpg";

const eventsData = [
  {
    img: events1Img,
    title: "Custom Parties",
    date: "$99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: events2Img,
    title: "Private Parties",
    date: "$289",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: events3Img,
    title: "Birthday Parties",
    date: "$499",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: events4Img,
    title: "Private Parties",
    date: "$899",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="events" className="events section">
      <div className="container2">

        <div className="events-container">
          {eventsData.map((event, index) => (
            <div key={index} className="event-item" >
              <div className="event-img">
                <img src={event.img} alt={event.title} />
              </div>
              <div className="event-content">
                <p>{event.title}</p>
                <div className="date">
                  <p>{event.date}</p>
                </div>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
