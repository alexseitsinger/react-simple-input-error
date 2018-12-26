# Form Field Error

## Description

A react component for form fields errors.

## Props

-   isVisible - (Boolean, Required) - Determines if the component is visible.
-   position - (String, Required) - The position of the component.
-   onClick - (Function, Optional) - The function to invoke when it's clicked.
-   text - (Node, Required) - The text to display.
-   textStyle - (Object, Optional) - Extra styles to apply to the text element.
-   containerStyle - (Object, Optional) - Extra style to apply to the container element.
-   containerClassName - (String, Optional) - An alternative className to use on the container element,

## Usage

```javascript
import React from "react"
import PropTypes from "prop-types"
import FormFieldError from "@alexseitsinger/form-field-error"
import { connect } from "react-redux"

import { Form, FormField, Input, SubmitButton } from "./elements"
import {
	setFormSubmitted,
	setNameFieldEmpty,
	onFormCompleted
} from "../../actions/form"

function Form({ dispatch, nameFieldEmpty, formSubmitted }) {
	return (
		<Form
			onSubmit={(event) => {
				event.stopPropagation()
				event.preventDefault()
				const form = event.target
				const input = form.querySelector("input[name=name")
				dispatch(setFormSubmitted(true))
				if (!input.value.length) {
					dispatch(setNameFieldEmpty(true))
					return
				}
				dispatch(onFormCompleted(input.value))
			}}>
			<FormField>
				<FormFieldError
					isVisible={formSubmitted && nameFieldEmpty}
					text={"Field empty"}
					position={"inside"}
					setVisible={() => {
						dispatch(setNameFieldEmpty(!nameFieldEmpty))
					}}
				/>
				<Input
					type={"text"}
					name={"name"}
					placeholder={"Text"}
					onChange={(event) => {
						if (event.target.value.length) {
							dispatch(setFormSubmitted(false))
							dispatch(setNameFieldEmpty(false))
						}
					}}
					onFocus={() => {
						dispatch(setFormSubmitted(false))
						dispatch(setNameFieldEmpty(false))
					}}
				/>
			</FormField>
			<SubmitButton>Submit</SubmitButton>
		</Form>
	)
}

const mapStateToProps = (state) => {
	return {
		nameFieldEmpty: state.form.nameFieldEmpty,
		formSubmitted: state.form.formSubmitted
	}
}

Form.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nameFieldEmpty: PropTypes.bool.isRequired,
	formSubmitted: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Form)
```
