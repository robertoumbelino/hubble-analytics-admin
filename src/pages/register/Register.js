import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input
} from 'reactstrap'
import Widget from '../../components/Widget/Widget.js'
import Footer from '../../components/Footer/Footer.js'

import loginImage from '../../assets/registerImage.svg'
import HubbleLogo from '../../components/Icons/HubbleLogo.js'
import GoogleIcon from '../../components/Icons/AuthIcons/GoogleIcon.js'
import TwitterIcon from '../../components/Icons/AuthIcons/TwitterIcon.js'
import FacebookIcon from '../../components/Icons/AuthIcons/FacebookIcon.js'
import GithubIcon from '../../components/Icons/AuthIcons/GithubIcon.js'
import LinkedinIcon from '../../components/Icons/AuthIcons/LinkedinIcon.js'
import { registerUser } from '../../actions/register.js'
import hasToken from '../../services/authService'

const Register = props => {
  const [state, setState] = useState({ email: '', password: '' })

  const changeCred = event => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const doRegister = event => {
    event.preventDefault()
    props.dispatch(
      registerUser({
        creds: state,
        history: props.history
      })
    )
  }

  const { from } = props.location.state || { from: { pathname: '/template' } }

  if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
    return <Redirect to={from} />
  }

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Cadastrar</p>
                <div className="logo-block">
                  <HubbleLogo />
                  <p className="mb-0">Hubble</p>
                </div>
              </div>
              <div className="auth-info my-2">
                <p>
                  Hubble Analytics é um projeto de métricas do time de
                  desenvolvimento da <b>FW7</b>.
                </p>
              </div>
              <form onSubmit={event => doRegister(event)}>
                <FormGroup className="my-3">
                  <FormText>Email</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={event => changeCred(event)}
                    type="email"
                    required
                    name="email"
                    placeholder="Informe seu email"
                  />
                </FormGroup>
                <FormGroup className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Password</FormText>
                    <Link to="/error">Esqueceu a senha?</Link>
                  </div>
                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    value={state.password}
                    onChange={event => changeCred(event)}
                    type="password"
                    required
                    name="password"
                    placeholder="Informe sua senha"
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-center">
                  <Button
                    className="rounded-pill my-3"
                    type="submit"
                    color="secondary-red"
                  >
                    Cadastrar
                  </Button>
                </div>
                <p className="dividing-line my-3">&#8195;Ou&#8195;</p>
                <div className="d-flex align-items-center my-3">
                  <p className="social-label mb-0">Login com</p>
                  <div className="socials">
                    <a href="https://flatlogic.com/">
                      <GoogleIcon />
                    </a>
                    <a href="https://flatlogic.com/">
                      <TwitterIcon />
                    </a>
                    <a href="https://flatlogic.com/">
                      <FacebookIcon />
                    </a>
                    <a href="https://flatlogic.com/">
                      <GithubIcon />
                    </a>
                    <a href="https://flatlogic.com/">
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>
                <Link to="/login">Fazer meu login</Link>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={loginImage} alt="Error page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage
  }
}

export default withRouter(connect(mapStateToProps)(Register))
