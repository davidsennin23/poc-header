import React from 'react';

const Form = (FormComponent) =>
    class extends React.Component {
        state = {}
        handleChange = e => {
            const node = e.target;
            this.setState({
                [node.name]: {node, value: node.value}
            });
        }

        registerComponent = (node) => {
            if (!node || this.state[node.name]) return;
            this.setState({
                [node.name]: {node, value: node.value}
            });
            if (node.type === "text") {
                node.addEventListener("change", this.handleChange);
            }
        }

        render() {
            return (
                <FormComponent 
                    registerComponentFunction={this.registerComponent}
                    {...this.props}
                >
                    {
                        this.props.children
                    }
                </FormComponent>
            )
        }

    }

export default Form;