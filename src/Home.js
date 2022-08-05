import React from "react";

function Home() {
  return (
    <div className="home_container">
      <header>What is Partanimal exactly?</header>
      <h1>
        Partanimal is a website that gives you information about the best
        psytrance festivals around the world. With us you have the change to get
        familiar with all genres of trance music and share your experience with
        other people.
      </h1>
      <iframe
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/xbH8lEt4sDs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2>
        {" "}
        Psytrance or Psychedelic Trance is a kind of electronic dance music
        (EDM), more specifically it’s a subgenre of trance music. The term
        Psychedelic is coined by English psychiatrist Humphry Osmond, derived
        from Ancient Greek psukhḗ (mind or soul) and dêlos (to reveal, to
        manifest) to signify “Mind-manifesting“. Psytrance is characterized by
        arrangements of rhythms, layered melodies created by high tempo riffs
        and a very distinctive bass. The combination of these hypnotic, pulsing
        melodies and rhythms aim to guide dancers in replicating or enhancing
        the psychedelic experience; the alternated state of consciousness of
        experiencing a collective state of bodily transcendence, similar to that
        of ancient shamanic dancing rituals.
      </h2>
      <section className="video"></section>

      <img src="rave.jpg" alt="party"></img>
      <img src="rave1.jpg" alt="party"></img>
      <img src="rave2.jpg" alt="party"></img>
    </div>
  );
}

export default Home;
