import {Component} from 'react'
import {
  DivCard,
  Heading,
  Paragraph,
  InputTag,
  Btn,
  FormCard,
} from './StyledComponents'

class InputCard extends Component {
  state = {
    inputValue: '',
    onSubmitButton: true,
  }

  inputValueIsChanged = event => {
    this.setState({inputValue: event.target.value})
  }

  OnSubmitButtonIsClicked = event => {
    event.preventDefault()
    this.setState(prevState => ({
      onSubmitButton: !prevState.onSubmitButton,
    }))
  }

  render() {
    const {inputValue, onSubmitButton} = this.state

    return (
      <FormCard onSubmit={this.OnSubmitButtonIsClicked}>
        <Heading>Editable Text Input</Heading>
        {onSubmitButton ? (
          <DivCard>
            <InputTag
              type="text"
              value={inputValue}
              onChange={this.inputValueIsChanged}
              placeholder="enter Your text"
            />
            <Btn type="submit">Save</Btn>
          </DivCard>
        ) : (
          <DivCard>
            <Paragraph>{inputValue}</Paragraph>
            <Btn type="submit">Edit</Btn>
          </DivCard>
        )}
      </FormCard>
    )
  }
}

export default InputCard
