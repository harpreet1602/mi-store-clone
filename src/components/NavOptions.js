import React,{ useState, useEffect} from 'react';
import NavCard from './NavCard.js';
import "../styles/NavOptions.css";




const NavOptions = ({miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio,accessories}) => {

    const [miPhonesToggle,setMiPhonesToggle] = useState(false);
    const [redmiPhonesToggle,setRedmiPhonesToggle] = useState(false);
    const [tvToggle,setTvToggle] = useState(false);
    const [laptopToggle,setLaptopToggle] = useState(false);
    const [fitnessAndLifeStyleToggle,setFitnessAndLifeStyleToggle] = useState(false);
    const [homeToggle,setHomeToggle] = useState(false);
    const [audioToggle,setAudioToggle] = useState(false);
    const [accessoriesToggle,setAccessoriesToggle] = useState(false);

    // empty array passed make it run only for the first time and by clicking on different link
    // this component is rendering again and again that is why use effect runs agin because the
    // whole page gets reloaded. 
    useEffect(
        ()=>{
            if(window.location.pathname === "/miphones")
            { 
                setMiPhonesToggle(true);
            }

            if(window.location.pathname === "/redmiphones"){
                setRedmiPhonesToggle(true)
            }

            if(window.location.pathname === "/tv"){
                setTvToggle(true)
            }
            if(window.location.pathname === "/laptops"){
                setLaptopToggle(true)
            }

            if(window.location.pathname === "/lifestyle"){
                setFitnessAndLifeStyleToggle(true)
            }

            if(window.location.pathname === "/home"){
                setHomeToggle(true)
            }

            if(window.location.pathname === "/audio"){
                setAudioToggle(true)
            }
                
            if(window.location.pathname === "/accessories"){
                setAccessoriesToggle(true)
            }
            console.log("hello");
        },[]);


    return (
        <div className='navOptions'>
            {miPhonesToggle? miPhones.map((item,index)=>(
                <NavCard name={item.name} price={item.price} image={item.image} index={index}/>
            )):null}


            {redmiPhonesToggle? redmiPhones.map((item,index)=>(
                <NavCard name={item.name} price={item.price} image={item.image} index={index}/>
            )):null}

            {tvToggle? tv.map((item,index)=>(
                <NavCard name={item.name} price={item.price} image={item.image} index={index}/>
            )):null}

            {laptopToggle? laptop.map((item,index)=>(
                <NavCard name={item.name} price={item.price} image={item.image} index={index}/>
            )):null}


            {fitnessAndLifeStyleToggle? fitnessAndLifeStyle.map((item,index)=>(
                <NavCard name={item.name} price={item.price} image={item.image} index={index}/>
            )):null}

            {homeToggle? home.map((item,index)=>(
                <NavCard name={item.name} price={item.price} image={item.image} index={index}/>
            )):null}

            {audioToggle? audio.map((item,index)=>(
                <NavCard name={item.name} price={item.price} image={item.image} index={index}/>
            )):null}

            
            {accessoriesToggle? accessories.map((item,index)=>(
                <NavCard name={item.name} price={item.price} image={item.image} index={index}/>
            )):null}
        </div>
    )
}

export default NavOptions;
