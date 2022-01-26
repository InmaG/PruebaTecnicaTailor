import styles from '../styles/Loader.module.css'

//funcion que pinta el spinner
export default function Loader(){
    return(
        <div className={styles.loaderContainer}>
             <img src="loader.svg"/>
             <div>Loading...</div>
        </div>
       

    )
}