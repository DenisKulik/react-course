import styles from './Rating.module.scss';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    ratingValue: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export default function Rating(props: RatingPropsType) {
    const { ratingValue, setRatingValue } = props;

    return (
        <div>
            <Star selected={ratingValue > 0}
                  setRatingValue={() => setRatingValue(1)} />
            <Star selected={ratingValue > 1}
                  setRatingValue={() => setRatingValue(2)} />
            <Star selected={ratingValue > 2}
                  setRatingValue={() => setRatingValue(3)} />
            <Star selected={ratingValue > 3}
                  setRatingValue={() => setRatingValue(4)} />
            <Star selected={ratingValue > 4}
                  setRatingValue={() => setRatingValue(5)} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setRatingValue: () => void
}

function Star({ selected, setRatingValue }: StarPropsType) {
    return (
        <span className={styles.star} onClick={setRatingValue}>
            {selected ? <b>star </b> : 'star '}
        </span>
    );
}