import React from 'react'
import imageAle from '../image/perfil-behance.png'
import './styles/Card.css'

class Card extends React.Component {
    
    render(){
        const {parrafo} = this.props
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-md-6">
                            <img src={imageAle} className="img-fluid"></img>
                        </div>
                        <div className="col-md-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{parrafo}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card