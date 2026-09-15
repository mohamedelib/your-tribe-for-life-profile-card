<script>
  // Data ophalen
  let { data } = $props();
  const { person } = data;

  // Back to top
  let visible = $state(false);

  function handleScroll() {
    visible = window.scrollY > 500;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<svelte:window onscroll={handleScroll} />
{#if visible}
  <button class="back-to-top" onclick={scrollToTop}>↑</button>
{/if}
<!-- Header -->

<header>
  <picture>
    <source srcset="src/lib/assets/mo.webp" type="image/webp" />
    <img src={person.avatar} alt={person.name} fetchpriority="high" />
  </picture>
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
      {person.bio}
    </p>
  </section>

  <!-- Feiten -->
  <section class="facts">
    <h2>Feiten</h2>
    <ul>
      <li><span>Favoriete hobby:</span> <span>{person.fav_hobby}</span></li>
      <li><span>Favoriete dier:</span> <span>{person.fav_animal}</span></li>
      <li><span>Favoriete seizoen:</span> <span>{person.fav_season}</span></li>
      <li><span>Favoriete soep:</span> <span>{person.fav_soup}</span></li>
      <li><span>Favoriete fruit:</span> <span>{person.fav_fruit}</span></li>
      <li><span>Schoenmaat:</span> <span>{person.shoe_size}</span></li>
    </ul>
  </section>

  <!-- Contact -->
  <section>
    <h2>Contact</h2>
    <nav>
      <a href="https://github.com/{person.github_handle}">
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

  .facts {
    ul {
      list-style: none;
      padding: 0;
    }

    li {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      border-bottom: 1px solid #333;
      padding: 1rem 0;
      border-bottom: 1px solid #1a1a1a;
      font-size: 0.85rem;
      transition: translate 0.3s;

      &:hover {
        translate: 5px 0;
      }

      span:first-child {
        color: #888;
      }

      span:last-child {
        color: #e8e8e8;
        font-weight: 500;
      }
    }
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
    position: relative;
    transition:
      translate 0.3s,
      color 0.3s;
    &:hover {
      translate: 5px 0;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: #c22;
      transition: width 0.6s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }

  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    border: 1px solid #333;
    background: #c22;
    color: #e8e8e8;
    font-size: 2rem;
    cursor: pointer;
    transition:
      background 0.3s,
      border-color 0.3s;

    &:hover {
      background: #e8e8e8;
      border-color: #e8e8e8;
      color: #060606;
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
