function List(){
    const numbers=[12,24,4,25,64,246,846,8,42,72,647,76742]

    const numbers2 = numbers.map((value) => value * 10);
    
    const people=[{name:"Jan", age: "12"},{name:"Jan", age: "12"},{name:"Jan", age: "12"}]
    return <>
    <div>
        {numbers2.map((value,i)=>{return <span key={i}>{value},</span>})} 
        </div>
    <div>
        {people.map((val,i) =>{return <div key={i}><p>Imię:{val.name}</p><p>Wiek: {val.age}</p></div>})}
    </div>
    </>

    
}
export default List