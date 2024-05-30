// custom hook que permite reutilizar la lógica de una función para instanciarla entre distintos componentes y separarlo
// siendo reutilizable en el tiempo.

const useMouse = () => {

    const handleMouse = (e) => {
        const card = e.currentTarget;
        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`)
    }

    return handleMouse
   
};

export default useMouse;