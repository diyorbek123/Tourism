import { Select } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeEn, changeUz } from '../redux/actions/languageAction';
import '../style/style.css'
import CountriesComp from './CountriesComp';


const Layout = () => {
    const [open, setOpen] = useState(null)
    const lan = useSelector((state) => state.languageReducer)
    const dispatch = useDispatch()
    const { Option } = Select;

    const setCountries = () =>{
        if(open == null){
            setOpen(<CountriesComp/>)
        }
        else{
            setOpen(null)
        }
    }

    const showDrawer = () => {
        const menu = document.querySelector(".navbar-element");
        if (menu.style.display !== "block") {
            menu.style.display = "block"
        } else {
            menu.style.display = "none"
        }
    };

    function handleChange(value) {
        if (value == "En") {
            dispatch(changeEn())
        }
        if (value == "Uz") {
            dispatch(changeUz())
        }
    }

    return (
        <div className="navbar-project">
            <div className="navbar-res">
                <img src='logo.jfif' />
                <div className="navbar-menu-btn">
                    <img src='menu.png' onClick={showDrawer} />
                </div>
            </div>
            <div className="navbar-element">
                <ul>
                    <li>{lan.home}</li>
                    <li>{lan.portfolio}</li>
                    <li>{lan.contact}</li>
                    <li>
                        <Select defaultValue="En" style={{ width: 90 }} onChange={handleChange}>
                            <Option value="En">En<img className="ms-3" style={{ width: '20px', height: '20px' }} src='flagEn.png' /></Option>
                            <Option value="Uz">Uz<img className="ms-3" style={{ width: '20px', height: '20px' }} src='flagUzb.png' /></Option>
                        </Select>
                    </li>
                </ul>
            </div>
            <div className="inputsearch">
            <input placeholder={lan.search}/>
            <button>Ok</button>
            </div>
            <div className="home-all">
            <div className="home">
                <div className="tours">{lan.tours}</div>
                <div className="descreption">
                    <div className="road">{lan.road}</div>
                    <div className="tradition">{lan.tradition}</div>
                    <div className="cuisine">{lan.cuisine}</div>
                    <div className="holidays">{lan.holidays}</div>
                </div>
            </div>
                <div className="countries-regions">
                    <div onClick={setCountries}  className="countries">{lan.countries}</div>
                    <div  className="regions">{lan.regions}</div>
                </div>
                {open !== null ? open:''}
                <div className="gallery-shrines">
                    <div className="gallery">{lan.gallery}</div>
                    <div className="shrines">{lan.shrines}</div>
                </div>
                <div className="footer">{lan.trains}</div>
            </div>
        </div>
    )
}

export default Layout