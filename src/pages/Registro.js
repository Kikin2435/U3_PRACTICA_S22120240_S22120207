/*
        Integrantes:                            No.Control:
        Angel Eduardo Diosdado Gutierrez        s22120240
        Francisco Javier Jacob Garcia           s22120207
*/

import { Banner } from "../components/Banner";
import { Marca } from "../components/Marca";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";

export default function Tags({ softwareOptions }) {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={softwareOptions}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Software Utilizado"
            placeholder="Seleccione el software"
          />
        )}
      />
    </Stack>
  );
}

export function Registro(props) {
  const materiasISC = [
    "Tópicos Avanzados de Programación",
    "Cálculo Diferencial",
    "Graficación",
    "Cálculo Integral",
    "Fundanmentos de Programación",
    "Taller de Ética",
    "Matemáticas Discretas",
    "Taller de Administración",
    "Fundamentos de Investigación",
    "Tutoría I",
    "Tutoría II",
    "Programación Orientada a Objetos",
    "Contabilidad Financiera",
    "Química",
    "Desarrollo Sustentable",
    "Probabilidad y Estadística",
    "Cálculo Vectorial",
    "Estructura de Datos",
    "Cultura Empresarial",
    "Algebra Lineal",
    "Sistemas Operativos",
    "Física General",
    "Ecuaciones Diferenciales",
    "Lenguaje y Automatas I",
    "Fundamentos de Bases de Datos",
    "Taller de Sistemas Operativos",
    "Principios Elec. y Aplic. Dig.",
    "Tutoría I",
    "Métodos Numéricos",
    "Taller de Sistemas Operativos",
    "Desarrollo Sustentable",
    "Taller de Bases de Datos",
    "Administración de Bases de Datos",
    "Lenguajes de Interfaz",
    "Lenguajes y Autómatas II",
    "Programación Web II",
    "Gestión de Proyectos de Software",
    "Programación Web",
    "Form. y eval. de proy. de inv.",
    "Programación Móvil II",
    "Residencia Profesional",
    "Programación Web III",
    "Fundamentos de Programación",
    "Programación Orientada a Objetos",
    "Fundamentos de Telecomunicaciones",
    "Redes de Computadoras",
    "Conmutación y Enrutamiento de Redes de Datos",
    "Administración de Redes",
    "B Lenguaje y Autómatas I",
    "Programación Lógica y Funcional",
    "Internet de las Cosas",
    "Inteligencia Artificial",
    "Fundamentos de Bases de Datos",
    "Taller de Investigación I",
    "Taller de Investigación II",
    "Sistemas Operativos",
    "Fundamentos de Ing. De Software",
    "Ingeniería de Software",
    "Actividad Complementaria V",
    "Sistemas Programables",
    "Física General",
    "Principios Elec. y Aplic. Dig.",
    "Arquitectura de Computadoras",
    "Investigación de Operaciones",
    "Simulación",
    "Precálculo",
    "ITS",
    "Lógica Matemática",
    "Comprensión Lectora",
  ];

  const materiasSemiConductores = [];

  const materiasIndustrial = [];

  const materiasAmbiental = [];

  const materiasElectronica = [];

  const materiasGastronomia = [];

  const materiasISA = [
    "Programación",
    "Cálculo Diferencial",
    "Cambio de Aceite I",
  ];

  const [materias, setMaterias] = React.useState([]);
  const [cantAlumnos, setCantAlumnos] = React.useState(0);
  const [atSeleccionado, setAtSeleccionado] = React.useState("at1");
  const carreras = [
    { label: "Ing. Sistemas Computacionales", id: 1 },
    { label: "Ing. Industrial", id: 2 },
    { label: "Ing. Semiconductores", id: 3 },
    { label: "Ing. Electrónica", id: 4 },
    { label: "Ing. Sistemas Automotrices", id: 5 },
    { label: "Ing. Ambiental", id: 6 },
    { label: "Gastronomía", id: 7 },
  ];

  const softwareOptions = [
    { title: "Ansys", id: 1 },
    { title: "COMPAQ", id: 2 },
    { title: "CODEBLOCKS", id: 3 },
    { title: "AutoCAD", id: 4 },
    { title: "Microsoft Office", id: 5 },
    { title: "Cisco Packet Tracer 8.2", id: 6 },
    { title: "Arduino", id: 7 },
    { title: "Internet", id: 8 },
    { title: "Apache Netbeans 20", id: 9 },
    { title: "CODEBLOCKS", id: 10 },
    { title: "minitab 17", id: 11 },
    { title: "Java JDK 8, 11 y 21", id: 12 },
    { title: "Java", id: 13 },
    { title: "MySQL Community Server 8.0.30", id: 14 },
    { title: "LabView", id: 15 },
    { title: "Microsoft Visual Studio 2022 Community", id: 16 },
    { title: "Microsoft Office", id: 17 },
    { title: "Microsoft SQL Server Developer", id: 18 },
    { title: "Octave GNU", id: 19 },
    { title: "Bizagi Modeler", id: 20 },
    { title: "Vivado", id: 21 },
    { title: "Pencil Project", id: 22 },
    { title: "SolidWorks", id: 23 },
    { title: "OracleXE y Oracle SQL Developer", id: 24 },
    { title: "Prolog", id: 25 },
    { title: "Visual Studio Code", id: 26 },
    { title: "Intellij idea", id: 27 },
    { title: "Android Studio Hedgehog 2023.1.1", id: 28 },
    { title: "Geogebra", id: 29 },
    { title: "JFLAP", id: 30 },
    { title: "VirtualBox 7.0", id: 31 },
    { title: "Microsoft Project", id: 32 },
    { title: "Star UML", id: 33 },
    { title: "XAMPP", id: 34 },
    { title: "PsostgreSQL 16", id: 35 },
  ];

  function onAtChange(event, newAt) {
    //alert("Se cambio a " + newAt);
    setAtSeleccionado(newAt);
  }

  function sliderCantAlumnosChange(event, nuevaCantAlumnos) {
    setCantAlumnos(nuevaCantAlumnos);
  }

  function inputCantAlumnosChange(event) {
    setCantAlumnos(event.target.value);
  }

  function onCarreraChange(event, carreraSeleccionada) {
    if (carreraSeleccionada) {
      //alert(carreraSeleccionada.id);
      switch (carreraSeleccionada.id) {
        case 1:
          setMaterias(materiasISC);
          break;
        case 2:
          setMaterias([materiasIndustrial]);
          break;
        case 3:
          setMaterias([materiasSemiConductores]);
          break;
        case 4:
          setMaterias([materiasElectronica]);
          break;
        case 5:
          setMaterias(materiasISA);
          break;
        case 6:
          setMaterias([materiasAmbiental]);
          break;
        case 7:
          setMaterias([materiasGastronomia]);
          break;
      }
    }
  }

  function onBotonGuardarClick(event) {
    /* devolver la variable de estado en el componente APP a null*/
    props.setActualizarMaestro(null);
    alert("Registro Guardado");
  }

  return (
    <div className="Registro">
      <Banner />

      <div className="contenedor">
        <h4>Docente: {props.maestro.nombre} </h4>

        <p>Aula tecnológica:</p>
        <ToggleButtonGroup
          id="toggle-button-aula"
          color="primary"
          value={atSeleccionado}
          onChange={onAtChange}
          exclusive
          aria-label="Aula tecnológica"
        >
          <ToggleButton value="at1">AT1</ToggleButton>
          <ToggleButton value="at2">AT2</ToggleButton>
          <ToggleButton value="at3">AT3</ToggleButton>
          <ToggleButton value="at4">AT4</ToggleButton>
          <ToggleButton value="at5">AT5</ToggleButton>
        </ToggleButtonGroup>

        <br />
        <p>Carrera:</p>
        <Autocomplete
          disablePortal
          id="combo-box-carrera"
          options={carreras}
          onChange={onCarreraChange}
          renderInput={(params) => (
            <TextField {...params} placeholder="Seleccione una carrera." />
          )}
        />

        <br />
        <p>Materia:</p>
        <Autocomplete
          disablePortal
          id="combo-box-materia"
          options={materias}
          renderInput={(params) => (
            <TextField {...params} placeholder="Seleccione una carrera." />
          )}
        />

        <br />
        <p>Software Utilizado:</p>
        <Tags softwareOptions={softwareOptions} />

        <p>Cantidad de alumnos:</p>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider
            value={cantAlumnos}
            onChange={sliderCantAlumnosChange}
            min={0}
            max={45}
            aria-labelledby="input-slider"
          />
          <Input
            value={cantAlumnos}
            size="small"
            onChange={inputCantAlumnosChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 45,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Stack>
        <Button variant="outlined" onClick={onBotonGuardarClick}>
          Registrar
        </Button>
      </div>
    </div>
  );
}
