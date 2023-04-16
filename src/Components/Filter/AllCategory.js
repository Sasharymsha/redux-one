import Filter from "./Filter";
const AllCategory = () => {
    return(
        <div>
            <h2>DESSERT CATEGORY</h2>
            <p>{['CAKE', 'TART', 'PIES', 'BROWNIES', 'CHEESECAKE', 'ALL'].map(category => <Filter category={category}/>)}</p>
        </div>
    )
}

export default AllCategory;