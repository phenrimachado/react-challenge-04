import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: any;
  handleUpdateFood: (food: any) => void;
}

function ModalEditFood(props: ModalEditFoodProps) {
  async function handleSubmit(data: any) {
    props.handleUpdateFood(data);
    props.setIsOpen();
  };

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Form onSubmit={handleSubmit} initialData={props.editingFood}>
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
};

export default ModalEditFood;
