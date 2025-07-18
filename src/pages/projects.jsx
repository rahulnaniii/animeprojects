import React, { useState, useEffect } from "react";

const animeProjects = [
  {
    title: "Naruto",
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    description:
      "Follow Naruto Uzumaki on his journey to become the Hokage and protect his village.",
    details:
      "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
  },
  {
    title: "One Piece",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/sharedimages/2025/01/0388694_poster_w780.jpg",
    description: "Join Luffy and his crew as they search for the legendary treasure, One Piece.",
    details:
      "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It follows the adventures of Monkey D. Luffy and his crew of pirates as they search for the ultimate treasure known as 'One Piece'.",
  },
  {
    title: "Attack on Titan",
    image:
      "https://c4.wallpaperflare.com/wallpaper/323/934/342/shingeki-no-kyojin-mikasa-ackerman-wallpaper-preview.jpg",
    description: "Experience humanity's fight for survival against the terrifying Titans.",
    details:
      "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. The story is set in a world where humanity lives within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures.",
  },
  {
    title: "My Hero Academia",
    image:
      "https://w0.peakpx.com/wallpaper/361/695/HD-wallpaper-my-hero-academia-academia-anime-boku-deku-hero-my-no-thumbnail.jpg",
    description: "Witness the rise of young heroes in a world where superpowers are the norm.",
    details:
      "My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. It follows Izuku Midoriya, a boy born without superpowers in a world where they are common, but who still dreams of becoming a hero.",
  },
];

function Projects() {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes glowAnimation {
          0%, 100% {
            box-shadow: 0 0 15px 3px #ff00b7;
            filter: brightness(1.1) saturate(1.3);
          }
          33% {
            box-shadow: 0 0 20px 6px #ff9800;
            filter: brightness(1.3) saturate(1.5);
          }
          66% {
            box-shadow: 0 0 25px 8px #00e5ff;
            filter: brightness(1.1) saturate(1.3);
          }
        }

        .glowingImage {
          width: 180px;
          height: 260px;
          border-radius: 8px;
          object-fit: cover;
          margin-bottom: 1rem;
          animation: glowAnimation 4s ease-in-out infinite;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .glowingImage:hover {
          transform: scale(1.05);
          filter: brightness(1.4) saturate(1.7);
          box-shadow: 0 0 35px 10px #5d00ffff !important;
        }
      `}</style>

      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          textAlign: "center",
          padding: "2rem",
          color: "#fff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#111",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(1.2) blur(1.5px)",
          }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              marginBottom: "2rem",
              color: "#ff9800",
              textShadow: "0 0 8px #ff9800",
            }}
          >
            Anime Projects
          </h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {animeProjects.map((anime, index) => (
              <div
                key={anime.title}
                onClick={() => setSelectedAnime(anime)}
                style={{
                  width: "220px",
                  background: "rgba(124, 150, 159, 0.85)",
                  borderRadius: "10px",
                  padding: "1rem",
                  boxShadow: "0 0 25px 4px #12f52cff",
                  cursor: "pointer",
                  color: "#fff",
                  transition: "transform 0.3s",
                  userSelect: "none",
                  transformOrigin: "center",
                  opacity: animated ? 1 : 0,
                  transform: animated ? "scale(1)" : "scale(0.8)",
                  transitionDelay: `${index * 150}ms`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="glowingImage"
                  draggable={false}
                />
                <h3 style={{ textShadow: "0 0 6px #ff9800" }}>{anime.title}</h3>
                <p style={{ fontSize: "0.9rem", textShadow: "0 0 4px #000" }}>{anime.description}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedAnime && (
          <div
            onClick={() => setSelectedAnime(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.85)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 20,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#222",
                borderRadius: "12px",
                padding: "2rem",
                width: "90%",
                maxWidth: "450px",
                color: "#fff",
                boxShadow: "0 0 32px 8px #ff9800",
                textAlign: "center",
                position: "relative",
              }}
            >
              <button
                onClick={() => setSelectedAnime(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "transparent",
                  border: "none",
                  fontSize: "1.5rem",
                  color: "#ff9800",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedAnime.image}
                alt={selectedAnime.title}
                style={{
                  width: "180px",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  boxShadow: "0 0 24px 4px #ff9800",
                  filter: "brightness(1.1) saturate(1.3)",
                  userSelect: "none",
                }}
                draggable={false}
              />
              <h2 style={{ textShadow: "0 0 8px #ff9800" }}>{selectedAnime.title}</h2>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  textShadow: "0 0 6px #000",
                }}
              >
                {selectedAnime.description}
              </p>
              <p style={{ textShadow: "0 0 4px #000" }}>{selectedAnime.details}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Projects;

