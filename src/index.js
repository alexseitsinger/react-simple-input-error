import React from "react"
import PropTypes from "prop-types"

import {
	Container,
	TextContainer,
	Text,
	CaretContainer,
	Caret
} from "./elements"

function FormFieldError({
	isVisible,
	position,
	onClick,
	text,
	textStyle,
	containerStyle,
	containerClassName
}) {
	const backgroundColor = textStyle.backgroundColor
	const caretStyle = {}
	switch (position) {
		case "left":
		case "leftCenter":
		case "leftBottom":
		case "leftTop":
			caretStyle["borderRightColor"] = backgroundColor
			break
		case "right":
		case "rightCenter":
		case "rightBottom":
		case "rightTop":
			caretStyle["borderLeftColor"] = backgroundColor
			break
		case "top":
		case "topCenter":
		case "topLeft":
		case "topRight":
			caretStyle["borderTopColor"] = backgroundColor
			break
		case "bottom":
		case "bottomCenter":
		case "bottomLeft":
		case "bottomRight":
			caretStyle["borderBottomColor"] = backgroundColor
			break
	}
	return isVisible ? (
		<Container
			className={containerClassName}
			position={position}
			onClick={onClick}
			style={containerStyle}>
			<CaretContainer>
				<Caret position={position} style={caretStyle} />
			</CaretContainer>
			<TextContainer>
				<Text style={textStyle}>{text}</Text>
			</TextContainer>
		</Container>
	) : null
}

FormFieldError.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	textStyle: PropTypes.object,
	containerStyle: PropTypes.object,
	onClick: PropTypes.func,
	containerClassName: PropTypes.string
}

FormFieldError.defaultProps = {
	containerClassName: "FormFieldError",
	containerStyle: {
		zIndex: 10
	},
	textStyle: {
		backgroundColor: "red",
		color: "white",
		padding: "0.333em",
		borderRadius: "0.333em"
	},
	onClick: () => {}
}

export default FormFieldError
