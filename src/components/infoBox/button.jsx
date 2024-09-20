function Button() {



    function handleClick(){
        console.log("Przycisk został naciśnięty")
    }

    return <button class='btn' onClick={handleClick} onMouseEnter={()=> console.log("Najechanie myszkiem")}>
        Naciśnij MNIE
    </button>
}
export default Button