import classes from './Card.module.css';

const Card = (props) => {
    const styles = classes.card;
    return (
        <>
            <div className={styles}>{props.children}</div>
        </>
    );
}

export default Card;