/*
fetch all data to get all id and return them to next to generate how many routes and pages they know to generate 
*/
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    //map data to an array of path objects with params (id)
    const paths = data.map(ninja =>{
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

/*fetch individual information to pass into Details page, run 10 times for 10 ids */
export const getStaticProps = async (context) => {
    const id = context.params.id;
    /*get single item by the id*/
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}


const Details = ({ ninja }) => {
    return ( 
        <div>
            <h1>{ ninja.name }</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website}</p>
            <p>{ ninja.address.city }</p>
        </div>
     );
}
 
export default Details;