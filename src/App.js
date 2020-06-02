import React, { Component } from 'react'
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import { BrowserRouter, Route } from "react-router-dom";
import Partners from './Components/Partners/Partners';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path = "/" component = {Home} exact/>
        <Route path = "/product" component = {Product} exact/>
        <Route path = "/partners" component = {Partners} exact/>
        <Route/>
      </BrowserRouter>
    )
  }
}
