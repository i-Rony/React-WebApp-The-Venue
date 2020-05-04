import React, {Component} from 'react';
import MyButton from './MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        price: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed magna massa. Fusce tristique maximus lectus, vitae dictum ligula pulvinar mattis',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed magna massa. Fusce tristique maximus lectus, vitae dictum ligula pulvinar mattis',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed magna massa. Fusce tristique maximus lectus, vitae dictum ligula pulvinar mattis'
            ],
        linkto: ['http://sales/balcony', 'http://sales/medium', 'http://sales/star'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.price.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className = "pricing_item">
                    <div className = "pricing_inner_wrapper">
                        <div className = "pricing_title">
                            <span>${this.state.price[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className = "pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className = "pricing_buttons">
                            <MyButton
                                text = "Purchase Tickets"
                                bck = "#ffa800"
                                color = "white"
                                link = {this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>           
        ))
    )

    render(){
        return(
            <div className = "bck_black">
                <div className = "center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className = "pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;