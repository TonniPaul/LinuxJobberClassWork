import './userForm.css';
import checked from '../../assets/checked.svg';

const UserForm = ({head1, head2, head3}) => {
  return (
    <div className='userform-cont'>
      <div className="profile-checked topcheck">
        <img src={checked} alt="a" className="ccc" />
      </div>
      <div className="sub-uf-cnt">
         <div className="columnsss">
            <p className='prf-txt'>{head1}:</p>
            <div className="input-flex">
               <input type="text"  placeholder={head1}/>
               <span class="material-symbols-outlined">edit</span>
            </div>
         </div>
         <div className="columnsss">
            <p className='prf-txt'>{head2}:</p>
            <div className="input-flex">
               <input type="text" placeholder={head2} />
               <span class="material-symbols-outlined">edit</span>
            </div>
         </div>
         <div className="columnsss">
            <p className='prf-txt'>{head3}:</p>
            <div className="input-flex">
               <input type="text" placeholder={head3} />
               <span class="material-symbols-outlined">edit</span>
            </div>
         </div>
      </div>
    </div>
  )
}

export default UserForm