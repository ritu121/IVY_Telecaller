import React, { useState } from 'react'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TopComponent from '../../components/TopComponent'
import Skeleton from '../../layouts/Skeleton'
import { FiUsers } from 'react-icons/fi'

function AddLeads() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [designation, setDesignation] = useState('')
    const [description, setDescription] = useState('')
    const [referredBy, setReferredBy] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [college, setCollege] = useState('')
    const [lead, setLead] = useState('')
    const [qualification, setQualification] = useState('')
    const [country, setCountry] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            firstName,
            lastName,
            email,
            phone,
            lead,
            qualification,
            country,
            designation,
            description,
            college,
            assignTo
        }
        console.log("values --", values)
    }
    const handleClick = () => {
        console.log("hello")
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setLead('')
        setCountry('')
        setQualification('')
        setDesignation('')
        setDescription('')
        setAssignTo('')
        setCollege('')
    }
    return (
        <Skeleton>
            <div className='p-10'>
                <TopComponent title="Add Lead" component="Dashboard" current="Add Lead" Icon={FiUsers} />
                <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                    <div className='p-5 border-b border-#6c6c6c-500  m-b-2'>
                        <h1 style={{ fontWeight: 700 }}>Add Lead</h1>
                    </div>
                    <div className='py-10 px-5'>
                        <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md mb-6' >Lead Information</div>
                        <form action='#' onSubmit={(event) => onSubmit(event)}>
                            <div className='mb-5'>
                                <h1 className='block text-gray-700 text-sm font-bold mb-2'>Name<span className="text-red-500">&nbsp;*</span></h1>
                                <div className='grid grid-cols-2 gap-5'>
                                    <Input
                                        id="firstName"
                                        type={"text"}
                                        placeholder="First name"
                                        value={firstName}
                                        required
                                        onChange={(v) => setFirstName(v)}
                                    />
                                    <Input
                                        id="lastName"
                                        type={"text"}
                                        placeholder="last name"
                                        value={lastName}
                                        required
                                        onChange={(v) => setLastName(v)}
                                    />
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <Input
                                        id="number"
                                        label={"Mobile"}
                                        required
                                        type={"number"}
                                        placeholder="Mobile Number"
                                        value={phone}
                                        onChange={(v) => setPhone(v)}

                                    />
                                    <Input
                                        id="email"
                                        label={"Email"}
                                        required
                                        type={"email"}
                                        placeholder="Email Id"
                                        value={email}
                                        onChange={(v) => setEmail(v)}
                                    />
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='grid grid-cols-2 gap-5'>
                                  
                                    <Select
                                      id={"country"}
                                        label={"Country Interested"}
                                        required
                                        value={lead}
                                        onChange={(v) => setCountry(v)}
                                    />
                                   <label className="block text-gray-700 text-sm font-bold mb-2"> Lead Source<span className="text-red-500">&nbsp;*</span>
                                        
                                        <select className="w-full h-10 border-1  shadow-md outline-0 rounded-lg bg-white text-gray-500 border-gray-300" onChange={(v) => setLead(v)}>
                                            <option >Select</option>
                                            <option>option1</option>
                                            <option>option2</option>
                                        </select>     
                      
                                        </label> 
                                </div>
                            </div>
                            <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md mb-6' >Education Information</div>
                            <div className='mb-5'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <Input
                                        id={"qualification"}
                                        label={"Qualification"}
                                        required
                                        value={designation}
                                        onChange={(v) => setQualification(v)}
                                    />
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Backlogs<span className="text-red-500">&nbsp;*</span>
                                        
                                    <select className="w-full h-10 border-1  shadow-md outline-0 rounded-lg bg-white text-gray-500 border-gray-300" onChange={(v) => setLead(v)}>
                                        <option >Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>     
                  
                                    </label>
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='w-4/5'>
                                    <Input
                                        id={"city of college"}
                                        label={"City of College"}
                                        value={referredBy}
                                        onChange={(v) => setCollege(v)}
                                    />
                                </div>
                            </div>
                          
                            <div className='mb-10'>
                                <div>
                                    <label for="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                    <textarea
                                        id='description'
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        value={description}
                                        rows={5}
                                        placeholder="Enter experience"
                                        onChange={(e) => setDescription(e.target.value)}
                                    >
                                       Experience
                                    </textarea>
                                </div>    
                            </div>

                            <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md mb-6' >Other Information</div>
                            <div className='grid grid-cols-2 gap-5'>
                                    <Input
                                        id="fund"
                                        label={"Proof of Funds"}
                                        required
                                        type={"file"}
                                        placeholder="Choose File"
                                        value={phone}
                                        onChange={(v) => setPhone(v)}

                                    />
                                    <Input
                                        id="income"
                                        label={"Income Proof"}
                                        required
                                        type={"file"}
                                        placeholder="Choose File"
                                        value={email}
                                        onChange={(v) => setEmail(v)}
                                    />
                                </div>

                                <div className='mb-5'>
                                <div className='grid grid-cols-2 gap-5  mt-10'>
                                  
                                <label className="block text-gray-700 text-sm font-bold mb-2"> Program Interested<span className="text-red-500">&nbsp;*</span>
                                        <select className="w-full h-10 border-1  shadow-md outline-0 rounded-lg bg-white text-gray-500 border-gray-300" onChange={(v) => setLead(v)}>
                                            <option >Please Select</option>
                                            <option>option1</option>
                                            <option>option2</option>
                                        </select>     
                      
                                        </label> 
                                   <label className="block text-gray-700 text-sm font-bold mb-2"> Intake Interested<span className="text-red-500">&nbsp;*</span>
                                        
                                        <select className="w-full h-10 border-1  shadow-md outline-0 rounded-lg bg-white text-gray-500 border-gray-300" onChange={(v) => setLead(v)}>
                                            <option >Please Select</option>
                                            <option>option1</option>
                                            <option>option2</option>
                                        </select>     
                      
                                        </label> 
                                </div>
                            </div>
                            <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2"> Counsellor<span className="text-red-500">&nbsp;*</span>
                                        
                                        <select className="w-full h-10 border-1  shadow-md outline-0 rounded-lg bg-white text-gray-500 border-gray-300" onChange={(v) => setLead(v)}>
                                            <option >Please Select Your Counsellor</option>
                                            <option>option1</option>
                                            <option>option2</option>
                                        </select>     
                      
                                        </label> 
                            </div>

                            <div className='text-center space-x-5 mt-10'>
                                <button
                                    className={`text-white text-base rounded-3xl py-2 px-10 btn-bg-green `}
                                    type="submit"
                                >
                                    Submit
                                </button>
                                {/* <CircularButton title="Submit" bgColor={'btn-bg-green'} bgColorHover={''} type="submit" /> */}
                                <CircularButton title="Reset" bgColor={'btn-bg-gray'} bgColorHover={''} onClick={() => handleClick()} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Skeleton>
    )
}

export default AddLeads