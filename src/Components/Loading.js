import loadingGif from "../images/gif/loading-arrow.gif";

function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt="spinner" />
        </div>
    );
};

export default Loading;
