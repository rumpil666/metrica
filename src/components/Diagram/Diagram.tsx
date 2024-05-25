import { SIZE_COLUMN_COEF } from '../../config/config';
import { Column } from '../Column/Column';
import { Сomparison } from '../Сomparison/Сomparison';
import styles from './Diagram.module.scss';


interface IItem {
  front: number
  back: number
  db: number
}

interface IDiagram {
  title: string
  dev: IItem
  test: IItem
  prod: IItem
  norm: number
}

interface IDiagramProps {
  diagram: IDiagram
}

export const Diagram: React.FC<IDiagramProps> = ({ diagram }) => {

  const arowPosition = (size: number, index: number) => {
    if (index <= 1) return '';
    if (index === size - 2) return 'Center';
    return 'Start'
  }

  const summMetrika: number[] = Object.keys(diagram).map((key, index) => {
    const size = Object.keys(diagram).length;
    if (index === 0 || index === size - 1) return 0;
    return Object.values(diagram[key as keyof IDiagram]).reduce((a, b) => a + b, 0)
  }).filter((i) => i !== 0)

  const createContrastColumn = (arr: number[]) => {
    const array = [];
    for (let i = 0; i < arr.length - 1; i++) {
      array.push(<Сomparison key={i} position={i} num={arr[i] - arr[i + 1]} />)
    }
    return array
  }

  const createColumn = Object.keys(diagram).map((key, index) => {
    const coefficient = SIZE_COLUMN_COEF / Math.max(...summMetrika)
    const size = Object.keys(diagram).length;
    if (key === 'title' || summMetrika[index] === 0) return;
    if (key === 'norm') return <Column key={key} title={key} norm={diagram[key]} coefficient={coefficient} />;
    const diagramKey: IItem = diagram[key as keyof IDiagram] as IItem;
    return <Column key={key} title={key} front={diagramKey.front} back={diagramKey.back} db={diagramKey.db} arowPosition={arowPosition(size, index)} coefficient={coefficient} />
  });

  return (
    <section className={styles.diagram}>
      <div className={styles.diagram__header}>
        {createContrastColumn(summMetrika)}
      </div>
      <div className={styles.diagram__columns}>
        {createColumn}
      </div>
      <div className={styles.diagram__footer}>
        <div className={styles.diagram__description}>
          <div className={styles.diagram__color1}></div>
          <p className={styles.diagram__title}>Клиентская часть</p>
        </div>
        <div className={styles.diagram__description}>
          <div className={styles.diagram__color2}></div>
          <p className={styles.diagram__title}>Серверная часть</p>
        </div>
        <div className={styles.diagram__description}>
          <div className={styles.diagram__color3}></div>
          <p className={styles.diagram__title}>База данных</p>
        </div>
      </div>
    </section>
  );
};