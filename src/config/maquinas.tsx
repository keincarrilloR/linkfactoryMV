import {
  Droplet,
  Gauge,
  PillBottle,
  PlugZap,
  Thermometer,
  Waves,
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

export const MAQUINAS = [
  {
    maquinaId: 'mxm001',
    nombre: 'Molino 1',
    galvanizado: true,
    variables: true
  },
  {
    maquinaId: 'mxm002',
    nombre: 'Molino 2',
    galvanizado: false,
    variables: true
  },
  {
    maquinaId: 'mxm003',
    nombre: 'Molino 3',
    galvanizado: false,
    variables: true
  },
  {
    maquinaId: 'mxsl1',
    nombre: 'Slitter',
    galvanizado: false,
    variables: false
  },
  {
    maquinaId: 'mxrs1',
    nombre: 'Roscadora',
    galvanizado: false,
    variables: false
  }
]

const round2 = (v: number) => Number(v.toFixed(2))

const div100 = (v: number) => Number((v / 100).toFixed(2))

export const GALVANIZADO_KEYS: MaquinaKey[][] = [
  // Molino 1
  [
    {
      key: 'tempZinc',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/c5aa64528cc84133952af166eec3aadd?orgId=1',
      icon: <Thermometer className={classesIcons} />
    },
    {
      key: 'tempCombustion',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/08c6333289bb49d488bf9f431a344dd8?orgId=1',
      icon: <Thermometer className={classesIcons} />
    },
    {
      key: 'flujoNitrogeno',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/4b3f3ed8aeba4e6cb15413b034538459?orgId=1',
      icon: <Waves className={classesIcons} />
    },
    {
      key: 'presNitrogeno',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/a3cf2cf69c024e399bbfcf2f1dc424d3?orgId=1',
      icon: <PillBottle className={classesIcons} />
    }
  ],
  // Molino 2
  []
]

export const VARIABLES_KEYS: MaquinaKey[][] = [
  // Molino 1
  [
    {
      key: 'velLinea',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b5672b592aad43c88444bda7e3ec9520?orgId=1',
      icon: <Gauge className={classesIcons} />
    },
    {
      key: 'corrTocco',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b49e48001313436583bfa1c2d651b5ea?orgId=1',
      icon: <PlugZap className={classesIcons} />
    },
    {
      key: 'corrFinpass',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/76046ee620514f9aa4e6008ce98c906d?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: div100
    },
    {
      key: 'voltThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/df9fef453dcd4e58aa5d7feb544bb3c8?orgId=1',
      icon: <Zap className={classesIcons} />
    },
    {
      key: 'corrArmaduraSizing',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/56b63eb4e6724e159caaa8e84165a6ee?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: div100
    },
    {
      key: 'corrArmaduraBreakdown',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/40e69cfe1bed470383a13b4c08f0b8ab?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: div100
    },
    {
      key: 'corrThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/d480ccd85d1347b382b771290cd830a0?orgId=1',
      icon: <PlugZap className={classesIcons} />
    },
    {
      key: 'voltPreTocco',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/66dd1e6b6e91409cb656251824e72f0a',
      icon: <PlugZap className={classesIcons} />
    },
    {
      key: 'tempAguaDestEntPreTocco',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b41c71f0b160419bba1d7c82dad978ca?orgId=1',
      icon: <Droplet className={classesIcons} />,
      transform: round2
    },
    {
      key: 'tempAguaDestEntThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/fd7ae4e0347d4f64ad357dbf4395e6cb',
      icon: <Droplet className={classesIcons} />,
      transform: round2
    },
    {
      key: 'potThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/6bb14344159f45f9b1ce94d0118ffa6a',
      icon: <Zap className={classesIcons} />
    },
    {
      key: 'tempAguaDestSalPreTocco',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/984bc55f8705400f902abe55b2dfd81a',
      icon: <Droplet className={classesIcons} />
    },
    {
      key: 'tempAguaDestSalThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/dbe8ea3e2c6f4ad8b559c32220e0bfc9?orgId=1',
      icon: <Droplet className={classesIcons} />,
      transform: round2
    }
  ],
  // Molino 2
  [
    {
      key: 'velLinea',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/644ae91e095e440297501cff25d92c5a?orgId=1',
      icon: <Gauge className={classesIcons} />,
      transform: round2
    },
    {
      key: 'corrArmaduraFormador',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/508d743cb31248158bfd82f6628cf698?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: div100
    },
    {
      key: 'corrArmaduraCalibrador',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/4b6fb52becca446cafdee25813d4f610?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: div100
    },
    {
      key: 'corrThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/28b63efd65484426bf5bfd861d9a6dad?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: round2
    },
    {
      key: 'potThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/fdac2bb75fd04f35870e6ad5a2e08826',
      icon: <Zap className={classesIcons} />,
      transform: round2
    },
    {
      key: 'voltThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/2252016f7e1d451ebccb0602c072d319?orgId=1',
      icon: <Zap className={classesIcons} />,
      transform: round2
    },
    {
      key: 'tempAguaDestEntThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/074821be96b94cb68464d899e19b43a6?orgId=1',
      icon: <Droplet className={classesIcons} />,
      transform: round2
    },
    {
      key: 'tempAguaDestSalThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/5cdaa80e0eb94777884b74fa4cef7d04?orgId=1',
      icon: <Droplet className={classesIcons} />,
      transform: round2
    }
  ],
  // Molino 3
  [
    {
      key: 'velLinea',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/632fad6e27d84225b6d9a6d3231c6a5e?orgId=1',
      icon: <Gauge className={classesIcons} />,
      transform: round2
    },
    {
      key: 'corrArmaduraFormador',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/71dcb951f94f40ebb13492da4dd6c6c2?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: div100
    },
    {
      key: 'corrArmaduraCalibrador',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/00f497e8fb524a5799e1f80396174426?orgId=1',
      icon: <PlugZap className={classesIcons} />,
      transform: div100
    },
    {
      key: 'potThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/2b9be34bb5a043839d21f83e0df913df?orgId=1',
      icon: <Zap className={classesIcons} />,
      transform: round2
    },
    {
      key: 'voltPlacaThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/6f882cc348d149fc989e03bd8ef3b4b8?orgId=1',
      icon: <Zap className={classesIcons} />,
      transform: round2
    },
    {
      key: 'tempAguaDestEntThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/e52314340ff14581a9210af258aff280?orgId=1',
      icon: <Droplet className={classesIcons} />,
      transform: round2
    },
    {
      key: 'tempAguaDestSalThermatool',
      grafana:
        'http://monitormx.rymco.io:9030/public-dashboards/b20ffa2b4b64439797f7f8f94dc2f321?orgId=1',
      icon: <Droplet className={classesIcons} />,
      transform: round2
    }
  ]
]
