import styles from './Сhart.module.scss';
import DropDownImg from '../../images/DropDown.svg';
import { Diagram } from '../Diagram/Diagram';

interface IItem {
  front: number
  back: number
  db: number
}

interface IObj {
  title: string
  dev: IItem
  test: IItem
  prod: IItem
  norm: number
}

interface IChartProps {
  diagram: IObj
}

export const Chart: React.FC<IChartProps> = ({ diagram }) => {
  return (
    <section className={styles.chart}>
      <div className={styles.chart__header}>
        <p className={styles.chart__title}>{diagram.title}</p>
        <button className={styles.chart__dropDown}><img src={DropDownImg} alt="DropDown" /></button>
      </div>
      <Diagram diagram={diagram} />
    </section>
  );
};