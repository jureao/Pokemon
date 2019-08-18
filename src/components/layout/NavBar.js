import React, { Component } from 'react'
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav classNAme="navbar navbar-expand-md navbar-dark bg-dark fixed-top"style={{backgroundColor:"#ef5330"

                }}>
                    <h1 align="center">150 Pokemon</h1>
                </nav>
                
            </div>
        )
    }
}
