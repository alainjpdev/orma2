import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

import Image from 'next/image'

import Header from '../components/Header'
import Link from 'next/link'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit'
import emailjs from '@emailjs/browser'

import { useRef } from 'react'

// import videoBg from "../src/videos/cut.mp4"

export default function Home() {
  const onSubmit = (event) => {
    event.preventDefault()
    router.push('/')
  }

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_t42ges4',
        'template_i02jnzw',
        form.current,
        'LWhLzpN2d1Yzzs4DY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <Head>
        <title>Orma Logistic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container-fluid p-0 m-0">
          <div className="maint px-0">
            <div className="overlayt">
              <video src={'/videos/cat.mp4'} autoPlay loop muted />
            </div>
            <div className="contenttt p-2  mx-2">
              <h1>
                ORMA LOGISTIC MAQUINARIA DE <br />
                <br />
                <div className="inner">
                  <span>
                    CONSTRUCCIÓN.
                    <br />
                    RENTA DE AUTOBUSES.
                    <br />
                  </span>
                </div>
              </h1>
              <h6>
                <br />
                Te hacemos una cotización. ¡Ingresa tu e-mail!
              </h6>
              <MDBCol className="col-6">
                <form ref={form}>
                  <div className="md-form">
                    <div className="form-group">
                      <label HtmlFor="email">
                        <h6>Ingresa tu correo electrónico</h6>
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        class="form-control"
                        id="email"
                        placeholder="email"
                      />
                      <MDBBtn
                        className="me-2 my-1 py-3 mx-1 px-6 py-2 btn-block smBtn"
                        onClick={sendEmail}
                        target="_top"
                      >
                        CONTACTANOS
                      </MDBBtn>
                    </div>
                  </div>
                  <h6>ESTAMOS A SUS ORDENES</h6>
                </form>
              </MDBCol>
            </div>
          </div>

          <div className="container-fluid p-0 m-0" id="brief">
            <div className="row bg-image">
              <div className="col-md-5 p-5 m-3 mt-5 mx-2">
                <h2>
                  <strong>MONTACARGAS.</strong>
                </h2>
                <span>
                  TECNOLOGÍA, CAPACIDAD Y VERSATILIDAD Tenemos una gama de
                  soluciones para todo tipo de trabajo. conozca todos nuestros
                  montacargas, reach trucks, hand pallets y stackers en:
                </span>
              </div>
              <div className="col-md-5 mt-5 mx-2 ">
                <div className="row">
                  <div className="col-md-6 border p-1 ">
                    <div className="circle d-inline-flex">
                      <i className="fas fa-tasks "></i>
                    </div>
                    <spam>MONTACARGAS TODO TERRENO</spam>
                  </div>
                  <div className="col-md-6 border p-1">
                    <div className="circle d-inline-flex">
                      <i className="fas fa-dollar-sign mr-2 "></i>
                    </div>
                    <spam>PATINES HIDRÁULICOS Y ELÉCTRICOS</spam>
                  </div>
                  <div className="col-md-6 border p-1">
                    <div className="circle d-inline-flex">
                      <i className="fas fa-assistive-listening-systems"></i>
                    </div>
                    <spam>PATINES HIDRÁULICOS Y ELÉCTRICOS</spam>
                  </div>
                  <div className="col-md-6 border p-1">
                    <div className="circle d-inline-flex">
                      <i className="far fa-calendar-alt"></i>
                    </div>
                    <spam>Retroxcavadoras</spam>
                  </div>
                  <div className="col-md-6 border p-1">
                    <div className="circle d-inline-flex">
                      <i className="fas fa-power-off"></i>
                    </div>
                    <spam>Mini cargadores</spam>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0" id="ayudanos">
          <div className="maint">
            <div className="overlayt">
              <video src={'/videos/eye.mp4'} autoPlay loop muted />
            </div>
            <div className="contentt mx-2">
              <h1>
                CONTACTO
                <br />
              </h1>
              <p>
                Envienos un mensaje y nos pondremos en contacto a la brevedad.
              </p>
              <MDBBtn
                className="me-2 my-1 py-3 mx-1 px-2 py-2 smBtn"
                onClick={sendEmail}
              >
                Llena la encuesta
              </MDBBtn>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0">
          <div className="row">
            <div className="col content2 mt-1">
              <h2>
                <strong id="anunciate">CENTRO DE SERVICIO.</strong>
              </h2>
              <spam>
                Contamos con personal capacitado y herramientas especializadas
                <br />
                en las marcas CASE Construction, CASE IH, New Holland y Baoli
                <br />
                Montacargas
              </spam>
              <ul>
                <li>Posicionamiento y crecimiento de tu marca.</li>
                <li>
                  Atención a la audiencia específica que requiere tu marca.
                </li>
                <li>Tráfico eficiente a tu website.</li>
                <li>Costos menores a los de la publicidad tradicional.</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
