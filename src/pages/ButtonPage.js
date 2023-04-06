import Button from "../components/button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
    const onClickHandler = () => {
        console.log('Button clicked')
    }
    return <div>
        <div><Button success rounded onClick={onClickHandler} className='mb-5'><GoBell/> click me</Button></div>
        <div><Button danger outline>HIIIII!!</Button></div>
        <div><Button warning rounded>NOPE</Button></div>
        <div><Button outline secondary >SHOP <GoDatabase/></Button></div>
        <div><Button rounded secondary ><GoCloudDownload /> KLOPP!!</Button></div>
        
    </div>
}

export default ButtonPage;