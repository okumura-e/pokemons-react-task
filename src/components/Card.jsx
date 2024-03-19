import './styles.css'

const Card = props => {
    return(
        <section className="card">
          <img className='pokemonImg' src={props.image || "https://down-br.img.susercontent.com/file/c841c80c94c16341e5722c8f68644b8d"} alt="PokeAPI" />
          <div className='textSection'>
            <p className='title'>{props.name}</p>
            
            {/* você pode escolher mais informações para serão exibidas aqui: */}
            <p className='description'></p>
            <p className='description'></p>
          </div>
        </section>
    )
}

export default Card