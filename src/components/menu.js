import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Div = styled.div`
    background-color: #f4f4f4;
    padding-top: 10px
`

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    & > * {
        color: #333;
        text-decoration: none;
    }
`

const StLink = styled(Link)`
    color: #333;
    text-decoration: none;
    font-family: 'Space Mono'
`

const Menu = () => (
    <Div>
        <Ul>
            <li>
                <StLink activeStyle={{borderBottom:'2px solid #333'}} to="/">Home</StLink>
            </li>

            <li>
                <StLink activeStyle={{borderBottom:'2px solid #333'}} to="/about/">About</StLink>
            </li>

            <li>
                <StLink to="/page-2">Page 2</StLink>
            </li>

            <li>
                <StLink to="/blog">Blog</StLink>
            </li>
        </Ul>
    </Div>
)

export default Menu