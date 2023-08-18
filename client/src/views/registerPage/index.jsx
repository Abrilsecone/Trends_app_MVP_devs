import { useState } from "react";
import { ProfessionalRegisterForm, StudentRegisterForm, CompanyRegisterForm } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import style from "./RegisterPage.module.css"; 

export default function RegisterPage() {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState("");

  const handleRegister = (type) => {
    setRegisterForm(type);
  };

  return (
    <main className={style["main-container"]}> 
      <h2 style={{ margin: "1rem"}}>¿Cómo quieres registrarte?</h2>
      {registerForm === "" && (
        <section className={style["button-section"]}> 
          <Link to="/Trends_app_MVP/studentRegister">
            Estudiante
          </Link>
          <Link to="/Trends_app_MVP/professionalRegister">
            Profesional
          </Link>
          <Link to="/Trends_app_MVP/companyRegister">
            Compañia
          </Link>
        </section>
      )}
      
      <footer className={style["footer-container"]}>
        <button className={style["back-button"]} onClick={() => navigate("/Trends_app_MVP")}>Inicio
          {registerForm === "company" && <CompanyRegisterForm />}
        </button>
      </footer>
    </main>
  );
}
