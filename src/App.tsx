import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/Global"
import { defaultTheme } from './styles/themes/default'
import ButtonSpinner from './components/ButtonSpinner'
import Product from './components/Product'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        
        <Product category='padaria' description='Pão francês quentinho, direto da nossa padaria' image='https://www.estadao.com.br/resizer/R1gMaM_65rqcD2CQnoK8AjOyoz8=/1200x900/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/BSRFGPQARVI7ZHFPKHOT4RBE54.jpg' name='Pão francês' price={1199} />
        <Product category='carnes' description='Pão francês quentinho, direto da nossa padaria' image='https://www.estadao.com.br/resizer/R1gMaM_65rqcD2CQnoK8AjOyoz8=/1200x900/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/BSRFGPQARVI7ZHFPKHOT4RBE54.jpg' name='Pão francês' price={1199} />
        <FormContainer>
          <p>Aqui você pode cadastrar um produto</p>
          <ContainerInputs>
            <input type='text' placeholder='name' required />
            <textarea placeholder='description' required />
            <input type='url' placeholder='image' required />
            <InputCategoryPrice>
            <select placeholder='category' required >
              <option value={'padaria'}>Pararia</option>
              <option value={'carnes'}>carnes</option>
            </select>
            <input type='text' placeholder='price' required />
            </InputCategoryPrice>
          </ContainerInputs>
          <Button type='submit'><ButtonSpinner /></Button>
        </FormContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App


const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 100vh;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  & > p {
    color: ${props => props.theme.black};
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }
`

const ContainerInputs = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
   input, textarea, select {
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 8px;
    height: 30px;
    width: 100%;
    padding-left: 10px;
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    &::placeholder {
      font-weight: 700;
    }
  }
  textarea {
    resize: none;
    height: 80px;
  }
  select {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.white};
    font-weight: bold;
  }
`
const InputCategoryPrice = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  gap: 8px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.white};
  cursor: pointer;
`