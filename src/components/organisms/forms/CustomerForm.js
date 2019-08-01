import React from 'react';
import Form from './Form';
import FormLine, {LineLabelInput} from '../../molecules/forms/FormLine';
import Input from '../../atoms/forms/Input';
import Label from '../../atoms/forms/Label';
import Submit from '../../atoms/forms/Submit';
import FormPanel from './FormPanel';

const FormLayout = ({registerComponentFunction, user={}, onFormSubmit=() => {}}) =>
    <FormPanel>
        <form onSubmit={onFormSubmit}>
            <FormLine lineContainer={LineLabelInput}>
                <Label input="nome">Nome:</Label>
                <Input defaultValue={user.nome} name="nome" id="nome" ref={registerComponentFunction}/>
            </FormLine>
            <FormLine lineContainer={LineLabelInput}>
                <Label input="sobrenome">Sobrenome:</Label>
                <Input defaultValue={user.sobrenome} name="sobrenome" id="sobrenome" ref={registerComponentFunction}/>
            </FormLine>
            <FormLine lineContainer={LineLabelInput}>
                <Label input="email">E-mail:</Label>
                <Input defaultValue={user.email} name="email" id="email" ref={registerComponentFunction}/>
            </FormLine>
            <FormLine lineContainer={LineLabelInput}>
                <Label input="nascimento">Nascimento:</Label>
                <Input defaultValue={user.nascimento} name="nascimento" id="nascimento" ref={registerComponentFunction}/>
            </FormLine>
            <FormLine lineContainer={LineLabelInput}>
                <Label input="telefone">Telefone:</Label>
                <Input defaultValue={user.telefone} name="telefone" id="telefone" ref={registerComponentFunction}/>
            </FormLine>
            <FormLine lineContainer={LineLabelInput}>
                <Label input="foto">Foto:</Label>
                <Input defaultValue={user.urlFoto} name="foto" id="foto" ref={registerComponentFunction}/>
            </FormLine>
            <FormLine lineContainer={LineLabelInput}>
                <Submit>Cadastrar</Submit>
            </FormLine>
        </form>
    </FormPanel>

const CustomerForm = Form(FormLayout);
export default CustomerForm;