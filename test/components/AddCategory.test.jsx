import { fireEvent,render, screen } from '@testing-library/react'
import {AddCategory} from '../../src/components/AddCategory'



describe('Pruebas en AdCategory', ()=>{
    test('Debe cambiar el valor de la caja de texto', ()=>{
        render( <AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target:{value:'Saitama'}})

        expect(input.value).toBe('Saitama')

        // screen.debug()
    });

    test('Debe llamar onNewCategory si el input tiene un valor',()=>{
        const inputValue = 'Saitama';

        render( <AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);


        expect(input.value).toBe('');
    })
})