<header>
  <img
    src="src/lib/assets/mo.jpg"
    alt="Mohamed El Ibrahymy"
    width="150"
    height="150"
  />
  <article>
    <h1>Mohamed <span>El Ibrahymy</span></h1>
    <p>Frontend Developer</p>
  </article>
</header>

<main>
  <section>
    <h2>Over mij</h2>
    <p>
      Frontend developer in opleiding aan de Hogeschool van Amsterdam BLA BLA
      BLA BLA BALB
    </p>
  </section>

  <section>
    <h2>Feiten</h2>
    <ul>
      <li></li>
    </ul>
  </section>

  <section>
    <h2>Contact</h2>
    <nav>
      <a href="https://github.com/mohamedelib">
        <p>Github</p>
        <span>→</span></a
      >

      <a href="https://linkedin.com/mohamedelib"
        ><p>Instagram</p>
        <span>→</span></a
      >
    </nav>
  </section>
</main>

<style>
  :global(body) {
    background: #060606;
    color: #e8e8e8;
    font-family: system-ui, sans-serif;
    padding: 3rem 1.25rem;
  }

  header {
    text-align: center;
    padding-block: 4rem;
  }

  header img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 4px;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.1;
    margin-top: 1.5rem;
  }

  h1 span {
    color: #c22;
  }

  header p {
    color: #666;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  section {
    max-width: 520px;
    margin-inline: auto;
    padding-block: 3rem;
  }

  section h2 {
    font-size: 0.7rem;
    color: #c22;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  section p {
    color: #bbb;
    line-height: 1.75;
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

  nav a {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid #1a1a1a;
    text-decoration: none;
    color: #e8e8e8;
    font-size: 0.85rem;
  }

  nav a span {
    color: #666;
  }

  @media (min-width: 40em) {
    header {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      text-align: left;
      justify-content: center;
    }

    h1 {
      font-size: 2.8rem;
    }
  }
</style>
