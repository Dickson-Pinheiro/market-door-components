import styled from 'styled-components'

interface IContainerCategory {
    category: string
}

export const ContainerCategory = styled.div<IContainerCategory>`
    width: 60px;
    background-color: ${props => props.theme.categories[props.category]};
    border-bottom-right-radius: 7px;
    border-top-left-radius: 7px;
    padding: 4px;
    color: ${props => props.theme.white};
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
`