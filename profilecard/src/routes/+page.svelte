<!-- Header -->

<header>
  <img src="src/lib/assets/mo.jpg" alt="Mohamed El Ibrahymy" />
  <article>
    <h1>Mohamed <span>El Ibrahymy</span></h1>
    <p>Frontend Developer</p>
  </article>
</header>

<!-- Over mij -->

<main>
  <section>
    <h2>Over mij</h2>
    <p>
      Frontend developer in opleiding aan de Hogeschool van Amsterdam BLA BLA
      BLA BLA BALB
    </p>
  </section>

  <!-- Feiten -->
  <section>
    <h2>Feiten</h2>
    <ul>
      <li></li>
    </ul>
  </section>

  <!-- Contact -->
  <section>
    <h2>Contact</h2>
    <nav>
      <a href="https://github.com/mohamedelib">
        <span>Github</span>
        <span>→</span></a
      >

      <a href="https://www.instagram.com/mo.eliiiii/"
        ><span>Instagram</span>
        <span>→</span></a
      >
    </nav>
  </section>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap");
  :global(body) {
    background: #060606;
    color: #e8e8e8;
    font-family: "Outfit", sans-serif;
    margin: 0;
  }

  /* Header */
  header {
    text-align: center;
    max-width: 520px;
    margin-inline: auto;
    display: grid;
    place-content: center;
    justify-items: center;
    min-height: 100svh;
    padding: 3rem 1.25rem;

    animation: entrance 0.8s ease both;

    img {
      max-width: 200px;
      box-shadow: 0 0 30px rgba(204, 34, 34, 0.25);
      border-radius: 10px;
      transition: border-color 3s;

      &:hover {
        border: 1px solid #c22;
      }
    }

    h1 {
      font-size: 2rem;
      line-height: 1.1;
      margin-top: 1.5rem;
    }

    h1 span {
      color: #c22;
    }
    p {
      color: grey;
      font-size: 0.8rem;
      margin-top: 0.5rem;
    }
  }

  /* Algemene section styling */
  section {
    max-width: 520px;
    margin-inline: auto;
    align-content: center;
    min-height: 100svh;
    padding: 3rem 1.25rem;
    animation: show linear both;
    animation-timeline: view();
    animation-range: entry;

    h2 {
      font-size: 0.7rem;
      color: #c22;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    p {
      color: #bbb;
      line-height: 1.75;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  li {
    font-size: 0.75rem;
    color: #666;
    padding: 0.35rem 0.8rem;
    border: 1px solid #1a1a1a;
    border-radius: 3px;
  }

  /* Nav */
  nav a {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid #1a1a1a;
    text-decoration: none;
    color: #e8e8e8;
    font-size: 0.85rem;
    transition:
      translate 0.3s,
      color 0.3s;
    &:hover {
      color: #c22;
      translate: 5px 0;
    }
  }

  /* Responsiveness */
  @media (min-width: 40em) {
    header {
      max-width: 1000px;
      grid-template-columns: auto 1fr;
      gap: 2.5rem;
      text-align: left;

      article {
        align-content: center;
      }
      img {
        max-width: 300px;
      }
      h1 {
        font-size: 2.8rem;
      }
    }

    section {
      max-width: 1000px;
      h2,
      p,
      span {
        font-size: 2rem;
      }
    }
  }
  @keyframes show {
    from {
      opacity: 0;
      scale: 0.5;
    }
  }

  @keyframes entrance {
    from {
      opacity: 0;
      translate: 0 30px;
    }
  }
</style>
