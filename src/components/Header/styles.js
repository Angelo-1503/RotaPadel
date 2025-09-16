import styled from "styled-components";


export const Container = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Title = styled.h1`
    color: #1f1f1f;
    font-size: 64px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
`

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const Link = styled.a`
    color: #1F1F1F;
    font-family: "Bebas Neue Pro";
    font-size: 40px;
    font-style: normal;
    font-weight: 350;
    line-height: normal;
`

export const LoginButton = styled.button`
    border-radius: 15px;
    background: #C1EE0F;
`