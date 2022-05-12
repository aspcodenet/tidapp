import React, { useState, useEffect } from 'react'

import {fetchCustomers} from './Data/CompanyData'


export const Main = () => {

    const [companies, setCompanies] = useState([])
    const [projects, setProjects] = useState([])
    const [description,setDescription] = useState('')
    const [timmar,setTimmar] = useState(0)
    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(()=>{
        fetchCustomers().then( result => {
            setCompanies(result)
            onSetSelectedCompany(result[0].id)
         }
        )
    },
    []);    

    const onSave = ()=>{
        var dataToSend = {
            "Description": description,
            "Timmar": timmar,
            "Project": selectedProject
        };
        //fetch dataToSend  POST
        console.log(dataToSend)
    }

    const onSetSelectedCompany = (id)=>{
//        setSelectedCompany(id)
        var customer = companies.find(c=>c.id == parseInt(id))
        setProjects(customer.projects)
//        setSelectedProject(customer.projects[0])
    }
  return (
    <form>
        <label>Company:</label>
        <select onChange={e=>onSetSelectedCompany(e.target.value)}>
            {companies.map( comp => 
                        <option value={comp.id}>{comp.title}</option>
                        )}            
        </select>
        <label>Project:</label>
        <select onChange={e=>setSelectedProject(e.target.value)}>
        {projects.map( project => 
                    <option value={project}>{project}</option>
                    )}            
        </select>


        <label>Timmar:</label>
         <input type="number" value={timmar} onChange={e=>setTimmar(e.target.value)}></input>   

         <label>Description:</label>
         <textarea value={description} onChange={e=>setDescription(e.target.value)} rows="4" cols="30"></textarea>   

            <button type="button" onClick={onSave}>Spara</button> 
    </form>  
    
  )
}
   