import '../ui/From.css'

interface FormProps {
    onClose:()=>void,
    handleAprooveBtn:()=> void,
    time?:number,
    enabled?:boolean
}
const Form = ({onClose, handleAprooveBtn, time, enabled}:FormProps) => {
    return (
        <div className='approoving-form'>
            <div className='header'>
                <h3>Согласие с правилами</h3>
                <div className='cross' onClick={onClose}>X</div>
            </div>           
            <p>Для данной функции применяются особые условия и правила пользования, их необходимо подтвердить, нажав на кнопку Подтвердить</p>
            <div className='footer'>
                <button onClick={onClose}>
                 Отмена
                </button>
                <button className={enabled?'enabled':'disabled'} onClick={handleAprooveBtn}>
                    Подтвердить {time?time:''}
                </button>
            </div>

            
        </div>
    );
};

export default Form;