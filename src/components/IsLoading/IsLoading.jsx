import styles from "./IsLoading.module.css";

const IsLoading = () => {
    return (
        <div className={`position-relative m-5 p-5 ${styles.window}`}>
            <div className="position-absolute top-0 start-50 translate-middle">
                <div className="spinner-border text-secondary m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>   
            </div>            
        </div>
    );
};

export default IsLoading;
