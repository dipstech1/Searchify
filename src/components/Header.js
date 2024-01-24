import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4">
            <Link class="navbar-brand" to="" >Searchify </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav  ms-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="" >Home </Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="" >
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="avatar" height="30px" class="rounded-circle" />

                             </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Header