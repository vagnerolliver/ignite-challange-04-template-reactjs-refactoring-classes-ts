import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { useRef } from 'react';

import { IFood } from '../../types';
import { Modal } from '../Modal';
import Input from '../Input';

import { Form } from './styles';

type AddFood = Omit<IFood, 'id' | 'available'>; 
interface ModalAdddFoodProps {
  isOpen: boolean, 
  setIsOpen: () => void, 
  handleUpdateFood: (data: AddFood) => Promise<void>,
  editingFood: AddFood
}

export function ModalEditFood ({ 
  isOpen, 
  setIsOpen, 
  handleUpdateFood, 
  editingFood  
}: ModalAdddFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: AddFood) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />
  
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />
  
        <Input name="description" placeholder="Descrição" />
  
        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}  