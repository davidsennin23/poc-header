import React from 'react';
import FormPanel from './FormPanel';

const Form = (FormComponent) =>
    class extends React.Component {

        registerComponent = (node) => {
            console.log(node);
        }

        render() {
            return (
                <FormPanel>
                    <FormComponent registerComponentFunction={this.registerComponent}>
                        {this.props.children}
                    </FormComponent>
                </FormPanel>
            )
        }

    }

export default Form;