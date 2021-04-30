import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

/*run at build time(not in browser). 
fetch request*/
export const getStaticProps = async () => {
    /*fetch from endpoint, store it in res */
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    /* store res to array of users */
    const data = await res.json();

    return {
        props: { ninjas: data }
    }

}


const Ninjas = ({ ninjas }) => {
    return ( 
        <div>
            <h1>All ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={'/ninja/' + ninja.id} key={ ninja.id }>
                    <a className={styles.single}> 
                        <h3>{ ninja.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;