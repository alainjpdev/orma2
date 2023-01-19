import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from 'mdbreact'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { MDBCol } from 'mdb-react-ui-kit'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MDBNavbar className=" navbarcss" expand="md">
      <MDBNavbarToggler onClick={handleToggle} />
      <MDBCol xs="1" className="text-center align-self-center">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            width={100}
            height={100}
            alt="LogoNav"
          />
        </Link>
      </MDBCol>
      <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
        <MDBNavbarNav left></MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active={router.pathname === '/'}>
            <Link href="/">
              <a className="nav-link">
                <Link href={'#brief'}>Nuestro equipo</Link>
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            {/* <Link href="/properties" passHref> */}
            <a className="nav-link">
              <Link href={'#que'}>¿Qué hacemos?</Link>
            </a>
            {/* </Link> */}
          </MDBNavItem>
          <MDBNavItem>
            {/* <Link href="/rent" passHref> */}
            <a className="nav-link">
              <Link href={'#ayudanos'}>Montacargas</Link>
            </a>
            {/* </Link> */}
          </MDBNavItem>
          <MDBNavItem>
            {/* <Link href="/mapPdf" passHref> */}
            <a className="nav-link">
              <Link href={'#anunciate'}>Servicio de taller</Link>
            </a>
            {/* </Link> */}
          </MDBNavItem>
          <MDBNavItem>
            {/* <Link href="/agents/agents" passHref> */}
            <a className="nav-link">
              {/* <MDBIcon icon="building" className="mr-1" /> */}
              Contacto
            </a>
            {/* </Link> */}
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}

export default Header
