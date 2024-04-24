import React from 'react'

export const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark' >
            <div class="mx-auto">
                <a href='/' className='navbar-brand ' >Gestion de empleados</a>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
