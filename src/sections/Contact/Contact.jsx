import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">
        Contact
        <form action="https://formspree.io/f/mgvzpbzn" method="post">
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              email
            </label>
            <input
              type="text"
              email="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Name
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <input className="hover btn" type="submit" value="Submit"></input>
        </form>
      </h1>
    </section>
  );
}

export default Contact;
