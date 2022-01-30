import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap'
import Widget from '../../components/Widget/Widget.js'
import ApexActivityChart from './components/ActivityChart.js'

import clock from '../../assets/dashboard/clock.svg'
import calendar from '../../assets/dashboard/calendar.svg'
import meal1 from '../../assets/dashboard/meal-1.svg'
import meal2 from '../../assets/dashboard/meal-2.svg'
import meal3 from '../../assets/dashboard/meal-3.svg'
import upgradeImage from '../../assets/dashboard/upgradeImage.svg'
import heartRed from '../../assets/dashboard/heartRed.svg'
import heartTeal from '../../assets/dashboard/heartTeal.svg'
import heartViolet from '../../assets/dashboard/heartViolet.svg'
import heartYellow from '../../assets/dashboard/heartYellow.svg'
import gymIcon from '../../assets/dashboard/gymIcon.svg'
import therapyIcon from '../../assets/dashboard/therapyIcon.svg'
import user from '../../assets/user.jpg'
import statsPie from '../../assets/dashboard/statsPie.svg'

import s from './Dashboard.module.scss'

const Dashboard = () => {
  const [checkboxes, setCheckboxes] = useState([true, false])

  const toggleCheckbox = id => {
    setCheckboxes(checkboxes =>
      checkboxes.map((checkbox, index) => (index === id ? !checkbox : checkbox))
    )
  }

  const meals = [meal1, meal2, meal3]

  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={8}>
          <Row className="gutter mb-4">
            <Col className="mb-4 mb-md-0" xs={12} md={6}>
              <Widget className="">
                <div className="d-flex justify-content-between widget-p-md">
                  <div className="headline-3 d-flex align-items-center">
                    Sprint do time
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                      &nbsp; Atividades &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Atividades</DropdownItem>
                      <DropdownItem>Implementações</DropdownItem>
                      <DropdownItem>Correções</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <ApexActivityChart className="pb-4" />
              </Widget>
            </Col>
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="d-flex justify-content-between">
                  <div className="headline-3 d-flex align-items-center">
                    Suas conquistas
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>&nbsp; Todas &nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Todas</DropdownItem>
                      <DropdownItem>Esse ano</DropdownItem>
                      <DropdownItem>Ano passado</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                {meals.map(meal => (
                  <div key={uuidv4()} className={`mt-4 ${s.widgetBlock}`}>
                    <div className={s.widgetBody}>
                      <div className="d-flex">
                        <img className="img-fluid mr-2" src={meal} alt="..." />
                        <div className="d-flex flex-column">
                          <p className="body-2">Dev monstro</p>
                          <p className="body-3 muted">
                            com {Math.floor(Math.random() * (16 - 5)) + 5}{' '}
                            atividades feitas
                          </p>
                        </div>
                      </div>
                      <div className="body-3 muted">Sprint</div>
                    </div>
                  </div>
                ))}
              </Widget>
            </Col>
          </Row>

          <Row className="gutter mb-4">
            <Col xs={12} md={12}>
              <Widget className="widget-p-md">
                <div className="d-flex justify-content-between">
                  <div className="headline-3 d-flex align-items-center">
                    Tempo de desenvolvimento
                  </div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                      &nbsp; Média total &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Média total</DropdownItem>
                      <DropdownItem>Ano passado</DropdownItem>
                      <DropdownItem>Ano retrasado</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>

                <div key={uuidv4()} className={`mt-4 ${s.widgetBlock}`}>
                  <div className={s.widgetBody}>
                    <div className="d-flex">
                      <img
                        className="img-fluid mr-2"
                        width={42}
                        height={42}
                        src={clock}
                        alt="..."
                      />
                      <div className="d-flex flex-column">
                        <p className="body-2">Cycle time</p>
                        <p className="body-3 muted">1 dia e 5 horas</p>
                      </div>
                    </div>
                    <div className="body-3 muted">
                      Tempo do <b>Doing</b> até o <b>Done</b>
                    </div>
                  </div>
                </div>

                <div key={uuidv4()} className={`mt-4 ${s.widgetBlock}`}>
                  <div className={s.widgetBody}>
                    <div className="d-flex">
                      <img
                        className="img-fluid mr-2"
                        width={42}
                        height={42}
                        src={calendar}
                        alt="..."
                      />
                      <div className="d-flex flex-column">
                        <p className="body-2">Lead time</p>
                        <p className="body-3 muted">2 dia e 3 horas</p>
                      </div>
                    </div>
                    <div className="body-3 muted">
                      Tempo do <b>Todo</b> até o <b>Production</b>
                    </div>
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>

          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget className="widget-p-none">
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                  <div className="d-flex flex-column align-items-center col-12 col-xl-6 p-sm-4">
                    <p className="headline-1" style={{ width: 300 }}>
                      Plano de estudo
                    </p>
                    <p className="body-3" style={{ width: 300 }}>
                      Que tal montar seu plano de estudos e ir acompanhando o
                      progresso?
                    </p>
                    <div className="d-flex justify-content-between my-4">
                      <Button className="rounded-pill mr-3" color="primary">
                        Criar plano
                      </Button>
                      <Button
                        className="rounded-pill body-3"
                        outline
                        color="dark"
                      >
                        Talvez depois
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center col-12 col-xl-6">
                    <img
                      className="p-1 img-fluid"
                      src={upgradeImage}
                      alt="..."
                    />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img
                      className="py-1 mr-2 img-fluid"
                      src={heartRed}
                      alt="..."
                    />
                    <div className="d-flex flex-column">
                      <p className="headline-3">React</p>
                      <p className="body-2">
                        62<span className="body-3 muted">/ 100%</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Progress
                      color="secondary-red"
                      className={`progress-xs ${s.mutedPink}`}
                      value="62"
                    />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img
                      className="py-1 mr-2 img-fluid"
                      src={heartYellow}
                      alt="..."
                    />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Node</p>
                      <p className="body-2">
                        75<span className="body-3 muted">/ 100%</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Progress
                      color="secondary-yellow"
                      className={`progress-xs ${s.mutedYellow}`}
                      value="75"
                    />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img
                      className="py-1 mr-2 img-fluid"
                      src={heartTeal}
                      alt="..."
                    />
                    <div className="d-flex flex-column">
                      <p className="headline-3">GraphQL</p>
                      <p className="body-2">
                        37<span className="body-3 muted">/ 100%</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Progress
                      color="secondary-cyan"
                      className={`progress-xs ${s.mutedTeal}`}
                      value="37"
                    />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img
                      className="py-1 mr-2 img-fluid"
                      src={heartViolet}
                      alt="..."
                    />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Typescript</p>
                      <p className="body-2">
                        82<span className="body-3 muted">/ 100%</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Progress
                      color="violet"
                      className={`progress-xs ${s.mutedViolet}`}
                      value="82"
                    />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
        <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={4}>
          <Widget className="widget-p-lg">
            <div className="d-flex">
              <img className={s.image} src={user} alt="..." />
              <div className={s.userInfo}>
                <p className="headline-3">Roberto Umbelino</p>
                <p className="body-3 muted">Brasil</p>
              </div>
            </div>
            <div className={s.userParams}>
              <div className="d-flex flex-column">
                <p className="headline-3">3</p>
                <p className="body-3 muted">Monstro</p>
              </div>
              <div className="d-flex flex-column">
                <p className="headline-3">+99</p>
                <p className="body-3 muted">Gatão</p>
              </div>
              <div className="d-flex flex-column">
                <p className="headline-3">25 anos</p>
                <p className="body-3 muted">Idade</p>
              </div>
            </div>
            <div className={s.goals}>
              <div className={s.goalsTitle}>
                <p className="headline-3">Suas métricas</p>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    &nbsp; Todas as sprints &nbsp;
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Todas as sprints</DropdownItem>
                    <DropdownItem>Última sprint</DropdownItem>
                    <DropdownItem>Penúltima sprint</DropdownItem>
                    <DropdownItem>Antepenúltima sprint</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Feat</p>
                  <p className="body-2">
                    92<span className="body-3 muted"> / 160</span>
                  </p>
                </div>
                <Progress
                  color="secondary-violet"
                  className="progress-xs"
                  value={60}
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Fix</p>
                  <p className="body-2">
                    40<span className="body-3 muted"> / 160</span>
                  </p>
                </div>
                <Progress
                  color="secondary-red"
                  className="progress-xs"
                  value={30}
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Validation</p>
                  <p className="body-2">
                    28<span className="body-3 muted"> / 160</span>
                  </p>
                </div>
                <Progress
                  color="secondary-yellow"
                  className="progress-xs"
                  value={10}
                />
              </div>
            </div>
            <p className="headline-3">Compromissos</p>
            <div className={`mt-3 ${s.widgetBlock}`}>
              <div className={s.widgetBody}>
                <div className="d-flex">
                  <img className="img-fluid mr-2" src={gymIcon} alt="..." />
                  <div className="d-flex flex-column">
                    <p className="body-2">25 de fevereiro, 12:00 - 13:30</p>
                    <p className="body-3 muted">Pomodoro, Challenge</p>
                  </div>
                </div>
                <div className="checkbox checkbox-primary">
                  <input
                    id="checkbox0"
                    type="checkbox"
                    className="styled"
                    checked={checkboxes[0]}
                    onChange={() => toggleCheckbox(0)}
                  />
                  <label htmlFor="checkbox0" />
                </div>
              </div>
            </div>
            <div className={`mt-3 ${s.widgetBlock}`}>
              <div className={s.widgetBody}>
                <div className="d-flex">
                  <img className="img-fluid mr-2" src={therapyIcon} alt="..." />
                  <div className="d-flex flex-column">
                    <p className="body-2">19 de março, 08:00 - 18:00</p>
                    <p className="body-3 muted">Hackton Hubble, FW7</p>
                  </div>
                </div>
                <div className="checkbox checkbox-primary">
                  <input
                    id="checkbox1"
                    type="checkbox"
                    className="styled"
                    checked={checkboxes[1]}
                    onChange={() => toggleCheckbox(1)}
                  />
                  <label htmlFor="checkbox1" />
                </div>
              </div>
            </div>
            <a
              className={`btn-secondary-red ${s.statsBtn}`}
              href="#top"
              role="button"
            >
              <img className={s.pieImg} src={statsPie} alt="..." />
              <div>
                <p className="headline-2">ESTATÍSTICA</p>
                <p className="body-3">Download das suas métricas</p>
              </div>
            </a>
          </Widget>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
