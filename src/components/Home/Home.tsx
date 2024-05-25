import styles from './Home.module.scss';
import { Chart } from '../Сhart/Сhart';

export const Home: React.FC = () => {
  //Было мало информации откуда брать данные. Поэтому я просто сделал объект с данными. Если данные приходят ввиде JSON 
  //их надо распарсить с помощью JSON.parse

  const diagramArr = [
    {
      title: "OS Doors",
      dev: {
        front: 66,
        back: 100,
        db: 31
      },
      test: {
        front: 60,
        back: 80,
        db: 31
      },
      prod: {
        front: 66,
        back: 83,
        db: 31
      },
      norm: 150
    },
    {
      title: "OS Bombuntu",
      dev: {
        front: 13,
        back: 16,
        db: 6
      },
      test: {
        front: 13,
        back: 16,
        db: 6
      },
      prod: {
        front: 13,
        back: 15,
        db: 9
      },
      norm: 10
    },
    {
      title: "Mibre Office",
      dev: {
        front: 13,
        back: 16,
        db: 6
      },
      test: {
        front: 11,
        back: 15,
        db: 9
      },
      prod: {
        front: 23,
        back: 25,
        db: 6
      },
      norm: 60
    },
    {
      title: "LoWtEx",
      dev: {
        front: 500000,
        back: 1000,
        db: 700000
      },
      test: {
        front: 500001,
        back: 500000,
        db: 900000
      },
      prod: {
        front: 5,
        back: 5,
        db: 9
      },
      norm: 500000
    },
    {
      title: "W$ POS",
      dev: {
        front: 0,
        back: 0,
        db: 0
      },
      test: {
        front: 0,
        back: 0,
        db: 0
      },
      prod: {
        front: 0,
        back: 0,
        db: 0
      },
      norm: 0
    }
  ]

  return (
    <main className={styles.home}>
      {diagramArr.map((i, key) => <Chart key={key} diagram={i} />)}
    </main>
  )
};