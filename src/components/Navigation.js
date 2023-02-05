import React from 'react'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
        <div className='container-fluid'>
        <a href='#' className='navbar-brand'>Bootstrap</a>
        <button type='button' className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navMenu'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Products</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='nav-link'>Career</a>
                </li>
            </ul>

            <form className='d-flex ms-auto'>
                <input type="text" className='form-control' placeholder='Enter keyword' />
                <button type='button' className='btn btn-outline-secondary ms-2'>Search</button>
            </form>
            <ul className='navbar-nav'>
                <li className='nav-item'><a href='#' className='nav-link'>Cart : 0 items</a></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navigation
