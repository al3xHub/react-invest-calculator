export default function Calculator({ text, idInput, ...props }) {

    return (
        <div className="form-user">
            <label htmlFor={idInput}>{text}</label>
            <input type="number" id={idInput} min="0" {...props} required />
        </div>
    )
}