import styles from './Column.module.scss';

interface IColumnProps {
  title: string
  coefficient: number
  front?: any
  back?: number
  db?: number
  norm?: number
  arowPosition?: string
}

export const Column: React.FC<IColumnProps> = ({ title, front, back, db, norm, arowPosition, coefficient }) => {

  const heightBlock = (block: number) => {
    if ((block * coefficient) < 1) {
      return 18
    }
    return block * coefficient
  }

  return (
    <div className={styles.column}>
      {
        title === "norm" ?
          <div className={styles.column__norm} style={{ height: norm ? heightBlock(norm!) : 0 }}>
            <p className={styles.column__subtitle}>{norm ? norm : ''}</p>
          </div> :
          <>
            <div className={`${styles.column__blockHeader} ${styles[`column__blockHeader_${arowPosition}`]} ${(front! + back! + db!) ? '' : styles.column__blockHeader_empty}`}></div>
            <div>
              <div className={styles.column__block} style={{ height: heightBlock(front!) }}>{front ? front : ''}</div>
              <div className={styles.column__block} style={{ height: heightBlock(back!) }}>{back ? back : ''}</div>
              <div className={styles.column__block} style={{ height: heightBlock(db!) }}>{db ? db : ''}</div>
            </div>
          </>
      }
      <p className={styles.column__title}>{title === 'norm' ? 'норматив' : title}</p>
    </div>
  );
};