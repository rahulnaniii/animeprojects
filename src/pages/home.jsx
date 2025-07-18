import React from 'react';

function Home() {
  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to Anime World</h1>
      <img
        src="https://scontent.fbpm1-2.fna.fbcdn.net/v/t39.30808-6/409320421_2372258072963289_2552789963686063012_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2285d6&_nc_ohc=rWrkN-g7IOkQ7kNvwFWWF1k&_nc_oc=AdmKNrZQnCQW8viGaMC6LP4-mxPP_C2g9oG5zQtMoRoDgb6bewmdZwOVQkRCRuxLHp8&_nc_zt=23&_nc_ht=scontent.fbpm1-2.fna&_nc_gid=N4UV71MhZujslqRnRKVGJQ&oh=00_AfSuFW47NIXTAFe0OMTd_2GRQfPfhKlZWmn_gRrkILP7oQ&oe=687E3FC1"
        alt="Anime Characters"
        style={{ width: "320px", borderRadius: "12px", margin: "1rem 0" }}
      />
      <p>
        Dive into the vibrant universe of anime! Discover your favorite shows, characters, and stories from classic to the latest releases.
        Whether you're a seasoned otaku or just starting your anime journey, there's something here for everyone.
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><strong>Genres:</strong> Action, Adventure, Romance, Fantasy, Sci-Fi, and more</li>
        <li><strong>Popular Titles:</strong> Naruto, One Piece, Attack on Titan, My Hero Academia</li>
        <li><strong>Community:</strong> Join discussions, share fan art, and connect with fellow fans!</li>
      </ul>
      <p>
        Start exploring our <a href="/projects">Anime Projects</a> or <a href="/contact">Contact Us</a> for recommendations!
      </p>
    </section>
  );
}

export default Home;