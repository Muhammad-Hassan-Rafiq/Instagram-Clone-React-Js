import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faUser,faInstagram,faPlus, faMessage} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Nav() {
  return (
    <div className='top fixed-top'>
        <nav class="navbar sticky-top fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a class="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="logo" width={103}/>
                </a>
                <form className="form-inline">
                    <input className="form-control ml-sm-5" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className = "user-profile">
                    <Link class="navbar-brand" href="/profile"> 
                        <img className="rounded-circle" src="https://images.unsplash.com/photo-1567324216289-97cc4134f626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="logo" width={40} height = {35}/>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav
