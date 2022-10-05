import UserForm from "../userForm/UserForm"
import './userDispay.css'
import contact from '../../assets/contact.svg'

const UserDisplay = () => {
  return (
    <div className="usr-dsp-cnt">
      <div className="profileIcon">
         <div className="iconsdiv">
            <img src={contact} alt="" className="icons" />
         </div>
         <p>Your Profile</p>
      </div>
      <UserForm
         head1={'First Name'}
         head2= {'Last Name'}
         head3 = {'Email'}
      />
      <UserForm 
         head1={'Course of study in school'}
         head2= {'I am a student'}
         head3 = {'Graduation date'}
      />
      <div className='userform-cont'>
         <div className=" block-styling">
            <div className='slider-desc'>
               <p className='slider-title'>My interests : </p>
            </div>
        <div>
          <input  
            className= 'sliderInput'
            type="range" 
            max= {10}
            min= {1}
            step={1}
            value= {10}
            // onChange={handleChange(max)}
          />
        </div>
            </div>
      </div>
    </div>
  )
}

export default UserDisplay;