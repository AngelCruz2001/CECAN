import {
  faBoxArchive,
  faBoxesStacked,
  faBuildingUser,
  faClipboardCheck,
  faFilePrescription,
  faLaptopMedical,
  faPrescriptionBottleMedical,
  faShop,
  faSquarePlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const useGetAccess = (role: string) => {
  return items.filter((item) => item.role.includes(role));
};

const items = [
  {
    icon: faPrescriptionBottleMedical,
    text: "Cátalogo",
    path: "catalogoFarmacia",
    role: ["Admin", "Farmacia"],
  },
  {
    icon: faSquarePlus,
    text: "Añadir medicina",
    path: "nuevoCatalogo",
    role: ["Admin", "Farmacia"],
  },
  {
    icon: faClipboardCheck,
    text: "Añadir stocks",
    path: "nuevoStock",
    role: ["Admin", "Farmacia"],
  },
  {
    icon: faFilePrescription,
    text: "Generar receta",
    path: "generarReceta",
    role: ["Admin", "Medico"],
  },
  {
    icon: faClipboardCheck,
    text: "Historial de recetas",
    path: "historial",
    role: ["Admin", "Medico"],
  },
  {
    icon: faShop,
    text: "Solicitudes",
    path: "almacen",
    role: ["Admin", "Almacén"],
  },
  {
    icon: faBoxesStacked,
    text: "Lista de almacen",
    path: "listaAlmacen",
    role: ["Admin", "Almacén"],
  },
  {
    icon: faSquarePlus,
    text: "Añadir utilidad almacen",
    path: "nuevoListaAlmacen",
    role: ["Admin", "Almacén"],
  },
  {
    icon: faBoxArchive,
    text: "Añadir stock almacen",
    path: "nuevoStockAlmacen",
    role: ["Admin", "Almacén"],
  },
  {
    icon: faLaptopMedical,
    text: "Activo fijo",
    path: "activoFijo",
    role: ["Admin", "Ingeniero", "Auditor"],
  },
  {
    icon: faSquarePlus,
    text: "Añadir activo fijo",
    path: "nuevoActivoFijo",
    role: ["Admin", "Ingeniero"],
  },
  {
    icon: faBoxArchive,
    text: "Solicitudes de activo fijo",
    path: "solicitudesActivoFijo",
    role: ["Admin", "Ingeniero"],
  },
  {
    icon: faBuildingUser,
    text: "Departamentos",
    path: "departamentos",
    role: ["Admin"],
  },
  {
    icon: faSquarePlus,
    text: "Añadir departamento",
    path: "nuevoDepartamento",
    role: ["Admin"],
  },
  {
    icon: faUser,
    text: "Usuarios",
    path: "usuarios",
    role: ["Admin"],
  },
  {
    icon: faSquarePlus,
    text: "Añadir usuario",
    path: "nuevoUsuario",
    role: ["Admin"],
  },
];

// solicitudesActivoFijo
