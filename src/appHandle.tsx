import React,{useRef,useImperativeHandle} from 'react';
import Form,{FormRef} from "./form"

const AppHandler: React.FC = () =>{
  const formRef = useRef<FormRef>(null)
  /* caso queira expor alguns dos funcionamentos do formulário para um componente pai
  pode-se usar 0 useImperativeHandle*/

  function handleSubmit(){
    formRef.current?.submit()
  }
  return (
    <Form ref={formRef} />
  )
}

export default AppHandler;
  