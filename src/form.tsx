import React,{forwardRef,useImperativeHandle} from 'react';
  
interface FormProps {
  initial?: string;
}

export interface FormRef {
  submit(): void;
}

const Form: React.RefForwardingComponent<FormRef,FormProps> = (props,ref) =>{
//caso não tivesse o ref, podeira ser => Form: React.FC<formProps> = (props,ref) =>{
  function submit(){
      alert("submit")
  }
  useImperativeHandle(ref,()=>({
    submit,
  }))

  return (
    <form>
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
    </form>
  )
}
  
export default forwardRef(Form);
  