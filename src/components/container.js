import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Header from './header'
import Bookdetail from './bookdetail'
import Cart from './cart'
import Myorders from './myorders'
import Buy from './buybook'



class Container extends Component {
    render() {
        return (
            <div>
                <div className="main">
                <Header/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/details/:id' component={Bookdetail} />
                        <Route exact path='/cart' component={Cart} />
                        <Route exact path='/myorders' component={Myorders} />
                        <Route exact path='/checkoutpage' component={Buy} />
                        
                    </Switch>
                </div>
            </div>

        )
    }
}

export default Container;