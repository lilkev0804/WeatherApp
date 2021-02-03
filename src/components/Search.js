import React, { Component } from 'react'
import styled from 'styled-components'

import Form from './Form'

const Search_form = styled.div `
    width:100%;
    height: 100vh;
    background: transparent;
    position : absolute;
    top: 0;
    display: flex;
    align-items:center;
`
 class Search extends Component {
    render() {
        return (
                <Search_form>
                    <Form></Form>
                </Search_form>
            
        )
    }
}
export default Search