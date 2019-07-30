import React from 'react';
import {registerComponent, unregisterComponent} from '../../utils/SharedStates';

const Form = (FormComponent) =>
    class extends React.Component {
        state = {}
        handleChange = e => {
            const node = e.target;
            this.setState({
                [node.name]: {node, value: node.value}
            });
            if (this.setSharedState) {
                this.setSharedState({
                    [node.name]: {node, value: node.value}
                })
            }
        }

        componentDidMount() {
            const { sharedState } = this.props;
            if (sharedState) {
                registerComponent(this, sharedState);
            }
        }

        componentWillUnmount() {
            const { sharedState } = this.props;
            if (sharedState) {
                unregisterComponent(this);
            }
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