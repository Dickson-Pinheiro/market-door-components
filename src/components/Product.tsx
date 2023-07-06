import styled from 'styled-components'
import Category from './Category/Category'

interface ProductProps {
    name: string
    image: string,
    description: string,
    price: number,
    category: string
}


export default function Product({ image, name, price, description, category }: ProductProps) {

    return(
        <ContainerProduct>
        <img src={image} />
        <ContainerContent>
            <ContainerTitle>
                <h2>{name}</h2>
                <p>{description}</p>
            </ContainerTitle>
            <ContanerInfo>
                <p>R${(price/100).toString().replace('.', ',')}</p>
                <Category category= {category}/>
            </ContanerInfo>
        </ContainerContent>
    </ContainerProduct>
    )
}

const ContainerProduct = styled.div`
    position: relative;
    width: 220px;
    height: 300px;
    background-color: ${props => props.theme.secondary};
    border-radius: 8px;
    border: 1px solid ${props => props.theme.gray};
    transition: 300ms;
    cursor: pointer;
    &:hover {
        border: 1px solid ${props => props.theme.secondary};
    }
    img {
        width: 100%;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
    }
`
const ContainerContent = styled.div`
    padding: 8px;
`
const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    h2 {
        font-size: 18px;
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        color: ${props => props.theme.white};
    }
    p {
        font-size: 14px;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        color: ${props => props.theme.gray};
    }
`
const ContanerInfo = styled.div`
    position: absolute;
    width: 220px;
    font-weight: 700;
    font-size: 16px;
    bottom: 0;
    left: 0;
    color: ${props => props.theme.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    & > p {
        padding-left: 4px;
    }
`