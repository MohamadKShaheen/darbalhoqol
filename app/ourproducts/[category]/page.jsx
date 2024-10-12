import Card from '@/app/components/card';
import styles from './page.module.css'

const category = ({params}) => {
  const category = params.category;

  const Data = {
    Jams: [
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      },
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      },
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      },
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      },
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      },
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      },
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      },
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      }
    ],
    Pickles: [
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      }
    ],
    Others: [
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      }
    ],
    Vinegar: [
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      }
    ],
    Sauces: [
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      }
    ],
    OliveOil: [
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      }
    ],
    Dry: [
      {
        image: '/images/B7.jpeg',
        description: "Dry"
      }
    ],
  }

  return (
    <div>
      <div className={styles.cardContainer}>
        {Data[category].map((product, index) => (
          <div key={index} className={styles.card}>
            <Card image={product.image} description={product.description}></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default category;