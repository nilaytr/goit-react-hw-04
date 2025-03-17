import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
    return (
        <div className='{css.loadMoreBtnDiv}'>
            <button className='{css.loadMoreBtn}' onClick={onClick}>Load More</button>
        </div>
    );
};

export default LoadMoreBtn