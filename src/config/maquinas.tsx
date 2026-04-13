import {
  CircleGauge,
  Droplet,
  //Gauge,
  Package,
  //PillBottle,
  PlugZap,
  RefreshCcwDot,
  //Thermometer,
  //Waves,
  Zap
} from 'lucide-react'
import { classesIcons } from '../styles/icons'
import type { Variables } from '../types/maquinaData'
import type { JSX } from 'react'

interface MaquinaKey {
  key: keyof Variables
  grafana: string
  icon: JSX.Element
  transform?: (value: number) => number
}

// Las maquinas deben de seguir el orden que se quieren mostrar
export const MAQUINAS = [
  {
    maquinaId: 'mvrs2',
    nombre: 'Roscadora N4',
    galvanizado: false,
    variables: true
  },
  {
    maquinaId: 'mvpt1',
    nombre: 'Pintadora',
    galvanizado: false,
    variables: true
  },
  {
    maquinaId: 'mvrs3',
    nombre: 'Roscadora Aluminio',
    galvanizado: false,
    variables: true
  }
]

const round2 = (v: number) => Number(v.toFixed(2))

//const div100 = (v: number) => Number((v / 100).toFixed(2))

// Las variables deben de seguir el orden que se quieren mostrar, el primer array es para la maquina 1, el segundo para la maquina 2, etc. Si una maquina no tiene galvanizado o variables, se deja un array vacio [] en su lugar.
export const GALVANIZADO_KEYS: MaquinaKey[][] = [
  // Roscadora N4
  []
]

export const VARIABLES_KEYS: MaquinaKey[][] = [
  // Roscadora N4
  [
    {
      key: 'numeroTubosxPaquete',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      icon: <Package className={classesIcons} />
    },
    {
      key: 'numeroPaquetesM',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b49e48001313436583bfa1c2d651b5ea?orgId=1',
      icon: <Package className={classesIcons} />
    }
  ],
  // Pintadora
  [
    {
      key: 'tempTubo',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      icon: <Droplet className={classesIcons} />,
      transform: round2
    },
    {
      key: 'corrPre',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: round2
    },
    {
      key: 'voltPre',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      icon: <PlugZap className={classesIcons} />
    },
    {
      key: 'frecPre',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      icon: <RefreshCcwDot className={classesIcons} />
    },
    {
      key: 'velProgramada',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      icon: <CircleGauge className={classesIcons} />
    },
    {
      key: 'potPre',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      icon: <Zap className={classesIcons} />
    }
  ]
]
