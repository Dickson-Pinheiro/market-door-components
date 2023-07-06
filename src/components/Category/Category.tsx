import { ContainerCategory } from "./Category.styles"

interface ICategoryProps {
    category: string
} 

export default function Category({ category }: ICategoryProps){
    return (
    <ContainerCategory category = {category}>
        <p>{category}</p>
    </ContainerCategory>
    )
}