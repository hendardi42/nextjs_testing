import Image from "next/image";

import styles from "../styles/Parallax.module.scss";

const Parallax = () => {
  return (
    <section className={styles["parallax__website"]}>
      <div
        className={`${styles["parallax__container"]} ${styles["parallax__container--normal"]}`}
      >
        <h1>parallax demo</h1>
      </div>
      <div className={styles["parallax__container"]}>
        <div
          className={`${styles["parallax__content"]} ${styles["parallax__content--back"]}`}
        >
          <Image
            alt="Picture of the future city"
            layout="fill"
            objectFit="cover"
            src="/static/images/index.jpeg"
          />
        </div>
        <div
          className={`${styles["parallax__content"]} ${styles["parallax__content--mid"]}`}
        >
          <div
            className={`${styles["parallax__content__image"]} ${styles["parallax__content__image--middle-left"]}`}
          >
            <Image
              alt="Picture of sun"
              height={500}
              src="/static/images/sun.png"
              width={500}
            />
          </div>
        </div>
        <div
          className={`${styles["parallax__content"]} ${styles["parallax__content--front"]}`}
        >
          <div
            className={`${styles["parallax__content__image"]} ${styles["parallax__content__image--right"]}`}
          >
            <Image
              alt="Picture of rocket"
              height={800}
              src="/static/images/rocket.png"
              width={800}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles["parallax__container"]} ${styles["parallax__container--normal"]}`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        molestiae ab, hic sequi animi nostrum illo quia vitae? Saepe commodi
        sunt vero tempora neque sint ea, ullam delectus veniam tenetur deleniti
        qui illum eaque? Exercitationem at et aspernatur, eveniet accusantium
        molestias dolores dignissimos eius possimus corrupti minima rerum itaque
        minus recusandae neque animi expedita. Explicabo iure odio quisquam rem
        repellat veritatis, labore nihil, maxime, architecto aliquid delectus?
        Esse repellat nostrum animi neque? Repellat reprehenderit quaerat quam
        id iure quos, quasi maiores ex assumenda, dolorem veniam voluptate
        suscipit fugit vero dolores quod voluptatibus magnam molestias dicta
        harum, odio illum beatae dolorum? Temporibus modi rem soluta dolorum, ea
        iste vel voluptas quidem id earum! Quae dolorem, quas nostrum harum
        soluta ducimus nobis praesentium perspiciatis, optio a laudantium.
        Tempora inventore nostrum corporis saepe, quae repellendus at hic atque
        natus, porro modi! Laborum velit soluta, ipsam ipsum unde hic dolor
        aliquam rem! Exercitationem neque atque quidem nihil? Natus quasi
        pariatur consequuntur excepturi perspiciatis ipsam blanditiis
        dignissimos mollitia fuga commodi odit culpa, laboriosam iure
        accusantium porro dolorem sit aperiam quae, error quam cum. Maiores
        dolor libero nisi error? Quos culpa obcaecati nihil odit iste sapiente
        alias! Accusamus expedita, dolorum repellendus alias explicabo placeat
        magnam, vero enim voluptatem iusto maxime ipsa, voluptate possimus
        corporis illo eligendi. Soluta laborum sunt deleniti necessitatibus
        culpa vel exercitationem pariatur eum sint ut a sed expedita incidunt
        velit rerum odio architecto corporis explicabo placeat saepe, quasi nam
        cumque. Natus iure, nam sequi asperiores veritatis eum perferendis.
        Impedit odit, natus eveniet libero eaque laborum illo amet sint quas
        vitae porro! Illum alias vel dolorum incidunt laborum illo tenetur,
        neque repellendus similique architecto doloribus error mollitia eos rem
        pariatur nemo exercitationem accusantium? Repellendus culpa enim
        corporis similique nisi dicta eos eligendi, minima accusantium vitae
        omnis, rerum esse quidem! Corrupti ipsa odio voluptates distinctio.
      </div>
      <div className={styles["parallax__container"]}>
        <div
          className={`${styles["parallax__content"]} ${styles["parallax__content--back"]}`}
        >
          <Image
            alt="Picture of future market"
            layout="fill"
            objectFit="cover"
            src="/static/images/index2.jpeg"
          />
        </div>
        <div
          className={`${styles["parallax__content"]} ${styles["parallax__content--mid"]}`}
        >
          <div
            className={`${styles["parallax__content__image"]} ${styles["parallax__content__image--middle-left"]}`}
          >
            <Image
              alt="Picture of sun"
              height={500}
              src="/static/images/sun.png"
              width={500}
            />
          </div>
        </div>
        <div
          className={`${styles["parallax__content"]} ${styles["parallax__content--front"]}`}
        >
          <div
            className={`${styles["parallax__content__image"]} ${styles["parallax__content__image--right"]}`}
          >
            <Image
              alt="Picture of rocket"
              height={800}
              src="/static/images/rocket.png"
              width={800}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles["parallax__container"]} ${styles["parallax__container--normal"]}`}
      >
        <h1>CSS only btw</h1>
      </div>
    </section>
  );
};

export default Parallax;
