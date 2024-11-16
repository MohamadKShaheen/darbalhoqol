"use client"
import styles from './divided.module.css';
import Image from "@/app/components/image";
import ContactForm from "@/app/components/contactForm";

const Divided = ({ mode, image1, image2, header, text }) => {
  return (
    <>
      {mode === 1 && (
        <div className={styles.container}>
          <div className={`${styles.first_half} bg-[#3A5B39]`}>
            <div className={styles.centered_image}>
              <img className={styles.second_half_image} src={image1}/>
            </div>
          </div>
          <div className={`${styles.second_half}`}>
            <div className={styles.full_image}>
              <img className={styles.first_half_image} src={image2}/>
            </div>
            <div className={`${styles.text} text-[#f4f1ed] bg-[#0000004D]`}>
              <h2 className={styles.header}>
                {header}
              </h2>
              <p className={styles.paragraph}>
                {text}
                <a href="../about"> see more...</a>
              </p>
            </div>
          </div>
        </div>
      )}
      {mode === 2 && (
        <div className={styles.container}>
          <div className={`${styles.first_half} bg-[#ffffff]`}>
            <div className={styles.text}>
              <h2 className={styles.header}>
                {header}
              </h2>
              <p className={styles.paragraph}>
                {text}
              </p>
            </div>
          </div>
          <div className={`${styles.second_half} bg-[#3a5b39]`}>
            <div className="w-[50%] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]">
              <Image src={image1}/>
            </div>
          </div>
        </div>
      )}
      {mode === 3 && (
        <div className={styles.container}>
          <div className={`${styles.first_half} bg-[#3a5b39]`}>
            <ContactForm />
          </div>
          <div className={`${styles.second_half} bg-[#ffffff]`}>
            <div className="w-[50%] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]">
              <Image src={image1}/>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Divided;