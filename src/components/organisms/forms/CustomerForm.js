import React from 'react';
import Form from './Form';
import FormLine, {LineLabelInput} from '../../molecules/forms/FormLine';
import Input from '../../atoms/forms/Input';
import Label from '../../atoms/forms/Label';
import FormPanel from './FormPanel';

const FormLayout = ({registerComponentFunction, user={}}) =>
    <FormPanel>
        <form>
            <FormLine lineContainer={LineLabelInput}>
                <Label>Label:</Label>
                <Input value={user.nome} ref={registerComponentFunction}/>
            </FormLine>
        </form>
    </FormPanel>

const CustomerForm = Form(FormLayout);
export default CustomerForm;