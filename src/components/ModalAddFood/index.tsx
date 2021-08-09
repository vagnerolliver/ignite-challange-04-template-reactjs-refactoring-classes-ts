import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { useRef } from 'react';

import { IFood } from '../../types';
import { Modal } from '../Modal';
import Input from '../Input';

import { Form } from './styles';
 
// type AddFood = Omit<IFood, 'id' | 'available'>; 

interface ModalAdddFoodProps {
  isOpen: boolean, 
  setIsOpen: () => void, 
  handleAddFood: (addFood: IFood) => Promise<void>,
}

export function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAdddFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: IFood) => {
    handleAddFood(data);
    setIsOpen();
  };
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}