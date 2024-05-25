import styles from './Сomparison.module.scss';

interface IСomparisonProps {
    position: number
    num: number
}

export const Сomparison: React.FC<IСomparisonProps> = ({ position, num }) => {
    const badOrGood = (num: number) => {
        if (num > 0) return '_good';
        if (num < 0) return '_bad';
        return '_null';
    }

    return (
        <div className={styles.comparison}>
            <div className={styles[`comparison__borderArrow_${position ? 'right' : 'left'}`]}>
                <div className={styles[`comparison__difference${badOrGood(num)}`]}>{num > 0 ? `+${num}` : num}</div>
            </div>
        </div>
    );
};