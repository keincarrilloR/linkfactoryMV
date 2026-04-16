interface MaxMinNom {
  ma_desmac: string
  MolSuc: string
  dbp_device: string
  ar_codice: string
  ma_codice: string
  dbp_valmin: number
  dbp_valnom: number
  dbp_valmax: number
}

export interface Valores {
  nombre?: string
  actual: number
  maxMinNom: MaxMinNom
}

interface EstadoYRun {
  piezas: number
  estado: string
  turno: string
}

interface OdtArtDesc {
  odt: string
  articulo: string
  descripcion: string
}

interface Tonelaje {
  tont: number
  maquina: string
}

interface Informativo {
  estadoYRun: EstadoYRun
  odtArtDesc: OdtArtDesc
  tonelaje: Tonelaje
}

export interface Variables {
  presNitrogeno?: Valores
  tempZinc?: Valores
  flujoNitrogeno?: Valores
  tempCombustion?: Valores
  corrTocco?: Valores
  corrFinpass?: Valores
  voltPreTocco?: Valores
  corrArmaduraSizing?: Valores
  corrArmaduraBreakdown?: Valores
  tempAguaDestEntPreTocco?: Valores
  tempAguaDestSalPreTocco?: Valores
  corrArmaduraFormador?: Valores
  corrArmaduraCalibrador?: Valores
  velLinea?: Valores
  voltThermatool?: Valores
  corrThermatool?: Valores
  tempAguaDestEntThermatool?: Valores
  tempAguaDestSalThermatool?: Valores
  potThermatool?: Valores
  voltPlacaThermatool?: Valores
  numeroPaquetes?: Valores
  numeroTubosxPaquete?: Valores
  numeroTubosTPF?: Valores
  numeroTubosTC?: Valores
  numeroPaquetesM?: Valores
  numeroFilamentos?: Valores
  numeroTufil1?: Valores
  numeroTufil2?: Valores
  enMarcha?: Valores
  enError?: Valores
  imanesMarcha?: Valores
  galopanteError: ?Valores
  autoManGnral: ?Valores
  autoManGalopante?: Valores
  autoRosc1?: Valores
  rosc1Marcha?: Valores
  giroRosc1?: Valores
  manualRosc1?: Valores
  autoRosc2?: Valores
  manualRosc2?: Valores
  giroRosc2?: Valores
  runWalkingRosc4?: Valores
  tempTubo?: Valores
  corrPre?: Valores
  voltPre?: Valores
  frecPre?: Valores
  velProgramada?: Valores
  potPre?: Valores
  rpmMandril1?: Valores
  rpmMandril2?: Valores
}

// Tipo para cada Maquina
interface MaquinaData {
  id: string
  nombre: string
  informativo: Informativo
  variables: Variables
}

export type { MaquinaData }
