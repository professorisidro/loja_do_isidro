export default function Disponivel(props){
    if (props.qtde > 0){
        return (<p>Disponivel</p>);
    }
    else {
        return (<p>Indisponivel</p>);
    }
}