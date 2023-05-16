import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select onchange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                {props.itens.map((item, index) => {
                    return <option key={index}>(item)</option>
                })}
            </select>
        </div>
    )   
}

export default ListaSuspensa
