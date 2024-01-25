import {render, screen} from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Probando GifItem', ()=>{
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitana.jpg';
    test('Esta prueba debe hacer match con su snapshot',()=>{

        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el url y el alt indicado', ()=>{
        render(<GifItem title={title} url={url}/>)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe mostrar el titulo en el componente',()=>{
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
    })
})