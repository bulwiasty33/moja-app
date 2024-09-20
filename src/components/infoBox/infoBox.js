import './infoBox.css';
function InfoBox(){
    const name="Tymek"
    let data =new Date().toUTCString()
    var ggg= ""
    return <div class="infobox">
        <p>{name}</p>
        <p>{data}</p>
        <p>13:30</p>
    </div>
}
export default InfoBox